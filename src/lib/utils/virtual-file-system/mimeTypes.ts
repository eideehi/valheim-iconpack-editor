import _ from "~lodash";

export const MimeTypes = {
  text: "plain/text",
  png: "image/png",
  json: "application/json",
  zip: "application/zip",
  unknown: "unknown",
} as const;

interface MimeType {
  get(extension: string): (typeof MimeTypes)[keyof typeof MimeTypes];

  isMatch(mimeType: keyof typeof MimeTypes, type: string): boolean;
}

export const MimeType: MimeType = Object.freeze({
  get: (extension) => {
    switch (extension) {
      case "json":
        return MimeTypes.json;
      case "zip":
        return MimeTypes.zip;
      case "txt":
      case "":
        return MimeTypes.text;
      case "png":
        return MimeTypes.png;
      default:
        return "unknown";
    }
  },
  isMatch: (mimeType: keyof typeof MimeTypes, type: string): boolean => {
    switch (mimeType) {
      case "text":
        return _.eq("plain/text", _.toLower(type));
      case "png":
        return _.eq("image/png", _.toLower(type));
      case "json":
        return _.eq("application/json", _.toLower(type));
      case "zip":
        return _.includes(["application/zip", "application/x-zip-compressed"], _.toLower(type));
    }
  },
});
