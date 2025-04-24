import { Challenge } from '../types/challenge';

interface ExecutionResult {
  success: boolean;
  output?: any;
  error?: string;
  testResults?: {
    passed: boolean;
    input: any[];
    expectedOutput: any;
    actualOutput: any;
    error?: string;
  }[];
}

export function executeCode(code: string, challenge: Challenge): ExecutionResult {
  const testResults: ExecutionResult['testResults'] = [];
  let allTestsPassed = true;
  
  try {
    // Create a safe function from the code
    const functionName = extractFunctionName(code);
    const fn = createFunction(code);
    
    // Run each test case
    for (const testCase of challenge.testCases) {
      try {
        const result = fn(...testCase.input);
        
        // Handle custom check if available
        const passed = (testCase as any).customCheck 
          ? (testCase as any).customCheck(testCase.input, result)
          : deepEquals(result, testCase.output);
        
        if (!passed) {
          allTestsPassed = false;
        }
        
        testResults.push({
          passed,
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: result
        });
      } catch (err) {
        allTestsPassed = false;
        testResults.push({
          passed: false,
          input: testCase.input,
          expectedOutput: testCase.output,
          actualOutput: null,
          error: err instanceof Error ? err.message : String(err)
        });
      }
    }
    
    return {
      success: allTestsPassed,
      testResults
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
      testResults
    };
  }
}

// Helper function to extract function name from code
function extractFunctionName(code: string): string {
  const match = code.match(/function\s+([a-zA-Z0-9_]+)/);
  return match ? match[1] : 'userFunction';
}

// Create a Function object from code string
function createFunction(code: string): Function {
  // This is a simplified version and has security implications
  // In a production app, you'd want to use a proper sandbox
  try {
    // Extract the function body between braces
    const firstBrace = code.indexOf('{');
    const lastBrace = code.lastIndexOf('}');
    
    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error('Invalid function syntax');
    }
    
    const functionName = extractFunctionName(code);
    const fullCode = `${code}\nreturn ${functionName};`;
    
    // Create a new Function that returns the user function
    return new Function(fullCode)();
  } catch (error) {
    throw new Error(`Syntax error: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Deep comparison function for checking test results
function deepEquals(a: any, b: any): boolean {
  if (a === b) return true;
  
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEquals(a[key], b[key])) return false;
  }
  
  return true;
}
