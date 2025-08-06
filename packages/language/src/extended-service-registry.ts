import { DefaultServiceRegistry, LangiumCoreServices, URI } from "langium";

export class ServiceRegistryExtended extends DefaultServiceRegistry {
    override getServices(uri: URI): LangiumCoreServices {
        if (uri.toString().endsWith(".test.json")) {
                const services = this.fileExtensionMap.get(".test.json")
                if (!services) {
                    throw new Error(`The service registry contains no services for the extension '.test.json'.`);
                }
                return services;
            }
        const services = super.getServices(uri);
        return services;
    }
}