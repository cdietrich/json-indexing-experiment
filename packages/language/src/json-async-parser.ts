import { AstNode, AsyncParser, LangiumParser, ParseResult, ParserOptions } from "langium";
import { CancellationToken } from "vscode-jsonrpc";

export class JsonAsyncParser implements AsyncParser {
    // Implementation of the JSON async parser
    parse<T extends AstNode>(text: string, cancelToken: CancellationToken): Promise<ParseResult<T>> {
        const parseResult = parseInternal<T>(text);
        return Promise.resolve(parseResult);
    }
}

export class JsonLangiumParser extends LangiumParser {
    override parse<T extends AstNode = AstNode>(input: string, options?: ParserOptions): ParseResult<T> {
        const parseResult = parseInternal<T>(input);
        return parseResult;
    }
}

function parseInternal<T extends AstNode>(text: string,): ParseResult<T> {
    const s = JSON.parse(text);
        let name = "unknown"
        if (typeof s === 'object' && s !== null) {
            if ("name" in s && typeof s.name === 'string') {
                name = s.name;
            }
        }
        const parseResult: ParseResult<T> = {
            value: { name, $type: "Person"} as unknown as T,
            parserErrors: [],
            lexerErrors: [],
        }
        return parseResult;
}

