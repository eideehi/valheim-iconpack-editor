declare module "@/assets/data/licenses.json" {
  interface Licenses {
    [key: string]: {
      publisher: string;
      licenseText: string;
      name: string;
      version: string;
    };
  }

  const licenses: Licenses;
  export default licenses;
}
