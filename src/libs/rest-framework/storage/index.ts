import { MetadataStorage } from "./MetadataStorage";

export * from "./MetadataStorage";
export * from "./ControllerMetadataArgs";

export function getMetadataStorage(): MetadataStorage {
  if (!(global as any).metadataStorage)
    (global as any).metadataStorage = new MetadataStorage();

  return (global as any).metadataStorage;
}
