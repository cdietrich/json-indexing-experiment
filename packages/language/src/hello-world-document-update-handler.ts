import { DefaultDocumentUpdateHandler } from "langium/lsp";
import { DidChangeWatchedFilesParams } from "vscode-languageserver-protocol";

export class HelloWorldDocumentUpdateHandler extends DefaultDocumentUpdateHandler {
    override didChangeWatchedFiles(params: DidChangeWatchedFilesParams): void {
        console.log("Watched files changed:", JSON.stringify(params, null, 2));
        super.didChangeWatchedFiles(params);
    }
}