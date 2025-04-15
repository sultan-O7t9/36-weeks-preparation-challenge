class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
    }

    subtract(number) {
        this.result -= number;
    }

    multiply(number) {
        this.result *= number;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Division by zero");
        }
        this.result /= number;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    calculate(expression) {
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            throw new Error("Invalid characters in expression");
        }

        expression = expression.replace(/\s+/g, '');
        if (!this.isValidParentheses(expression)) {
            throw new Error("Invalid parentheses");
        }

        try {
            this.result = Function('"use strict";return (' + expression + ')')();
            
            if (!Number.isFinite(this.result)) {
                throw new Error("Division by zero");
            }
            
            return this.result;
        } catch (error) {
            throw new Error("Invalid expression");
        }
    }

    isValidParentheses(expr) {
        let count = 0;
        for (let char of expr) {
            if (char === '(') count++;
            if (char === ')') count--;
            if (count < 0) return false;
        }
        return count === 0;
    }
}

module.exports = Calculator;
