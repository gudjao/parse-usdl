declare module 'parse-usdl' {
    export function parse(str: any, options?: {
        suppressErrors: boolean;
    });
    export function parseTest(str: any);
}