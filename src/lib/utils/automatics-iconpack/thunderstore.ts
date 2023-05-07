import semverValid from "semver/functions/valid";

export interface Manifest {
  name: string;
  description: string;
  version_number: string;
  dependencies: Array<string>;
  website_url: string;
}

const VALID_NAME_PATTERN = /^[a-zA-Z0-9_]+$/g;

export function isValidName(name: string): boolean {
  return VALID_NAME_PATTERN.test(name);
}

export function isValidDescription(description: string): boolean {
  return description.length <= 250;
}

export function isValidVersionNumber(versionNumber: string): boolean {
  return semverValid(versionNumber) != null;
}

export function isValidManifest(manifest: Manifest): boolean {
  return (
    isValidName(manifest.name) &&
    isValidDescription(manifest.description) &&
    isValidVersionNumber(manifest.version_number)
  );
}
