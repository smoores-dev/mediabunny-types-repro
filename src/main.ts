import { ALL_FORMATS, FilePathSource, Input } from "mediabunny";

const input = new Input({
  source: new FilePathSource("test.mp3"),
  formats: ALL_FORMATS,
});
