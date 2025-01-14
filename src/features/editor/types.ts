import { fabric } from "fabric";
import { ITextboxOptions } from "fabric/fabric-impl";
import * as material from "material-colors";

export const JSON_KEYS = [
  "name",
  "gradientAngle",
  "selectable",
  "hasControls",
  "linkData",
  "editable",
  "extensionType",
  "extension"
];

export const filters = [
  "none",
  "polaroid",
  "sepia",
  "kodachrome",
  "contrast",
  "brightness",
  "greyscale",
  "brownie",
  "vintage",
  "technicolor",
  "pixelate",
  "invert",
  "blur",
  "sharpen",
  "emboss",
  "removecolor",
  "blacknwhite",
  "vibrance",
  "blendcolor",
  "huerotate",
  "resize",
  "saturation",
  "gamma",
];

export const fonts = [
  "Arial",
  "Arial Black",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
  "Palatino",
  "Bookman",
  "Comic Sans MS",
  "Impact",
  "Lucida Sans Unicode",
  "Geneva",
  "Lucida Console",
];

export const selectionDependentTools = [
  "fill",
  "font",
  "filter",
  "opacity",
  "remove-bg",
  "stroke-color",
  "stroke-width",
];

export const colors = [
  material.red["500"],
  material.pink["500"],
  material.purple["500"],
  material.deepPurple["500"],
  material.indigo["500"],
  material.blue["500"],
  material.lightBlue["500"],
  material.cyan["500"],
  material.teal["500"],
  material.green["500"],
  material.lightGreen["500"],
  material.lime["500"],
  material.yellow["500"],
  material.amber["500"],
  material.orange["500"],
  material.deepOrange["500"],
  material.brown["500"],
  material.blueGrey["500"],
  "transparent",
];

export type ActiveTool =
  | "select"
  | "shapes"
  | "text"
  | "images"
  | "draw"
  | "fill"
  | "stroke-color"
  | "stroke-width"
  | "font"
  | "opacity"
  | "filter"
  | "settings"
  | "ai"
  | "remove-bg"
  | "templates";

export const FILL_COLOR = "rgba(0,0,0,1)";
export const STROKE_COLOR = "rgba(0,0,0,1)";
export const STROKE_WIDTH = 2;
export const STROKE_DASH_ARRAY = [];
export const FONT_FAMILY = "Arial";
export const FONT_SIZE = 32;
export const FONT_WEIGHT = 400;

export const CIRCLE_OPTIONS = {
  radius: 225,
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
};

export const RECTANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const DIAMOND_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 600,
  height: 600,
  angle: 0,
};

export const TRIANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const TEXT_OPTIONS = {
  type: "textbox",
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  fontSize: FONT_SIZE,
  fontFamily: FONT_FAMILY,
};

export interface EditorHookProps {
  defaultState?: string;
  defaultWidth?: number;
  defaultHeight?: number;
  clearSelectionCallback?: () => void;
  saveCallback?: (values: {
    json: string;
    height: number;
    width: number;
  }) => void;
};

export type BuildEditorProps = {
  undo: () => void;
  redo: () => void;
  save: (skip?: boolean) => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  autoZoom: () => void;
  copy: () => void;
  paste: () => void;
  canvas: fabric.Canvas;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  selectedObjects: fabric.Object[];
  strokeDashArray: number[];
  fontFamily: string;
  setStrokeDashArray: (value: number[]) => void;
  setFillColor: (value: string) => void;
  setStrokeColor: (value: string) => void;
  setStrokeWidth: (value: number) => void;
  setFontFamily: (value: string) => void;
};

export interface Editor {
  savePng: () => void;
  saveJpg: () => void;
  saveSvg: () => void;
  saveJson: () => void;
  loadJson: (json: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  autoZoom: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  getWorkspace: () => fabric.Object | undefined;
  changeBackground: (value: string) => void;
  changeSize: (value: { width: number; height: number }) => void;
  enableDrawingMode: () => void;
  disableDrawingMode: () => void;
  onCopy: () => void;
  onPaste: () => void;
  changeImageFilter: (value: string) => void;
  addImage: (value: string) => void;
  delete: () => void;
  changeFontSize: (value: number) => void;
  getActiveFontSize: () => number;
  changeTextAlign: (value: string) => void;
  getActiveTextAlign: () => string;
  changeFontUnderline: (value: boolean) => void;
  getActiveFontUnderline: () => boolean;
  changeFontLinethrough: (value: boolean) => void;
  getActiveFontLinethrough: () => boolean;
  changeFontStyle: (value: string) => void;
  getActiveFontStyle: () => string;
  changeFontWeight: (value: number) => void;
  getActiveFontWeight: () => number;
  getActiveFontFamily: () => string;
  changeFontFamily: (value: string) => void;
  addText: (value: string, options?: ITextboxOptions) => void;
  getActiveOpacity: () => number;
  changeOpacity: (value: number) => void;
  bringForward: () => void;
  sendBackwards: () => void;
  changeStrokeWidth: (value: number) => void;
  changeFillColor: (value: string) => void;
  changeStrokeColor: (value: string) => void;
  changeStrokeDashArray: (value: number[]) => void;
  addCircle: () => void;
  addSoftRectangle: () => void;
  addRectangle: () => void;
  addTriangle: () => void;
  addInverseTriangle: () => void;
  addDiamond: () => void;
  canvas: fabric.Canvas;
  getActiveFillColor: () => string;
  getActiveStrokeColor: () => string;
  getActiveStrokeWidth: () => number;
  getActiveStrokeDashArray: () => number[];
  selectedObjects: fabric.Object[];
};



export const Allfonts = [
  "Arial",
  "Arial Black",
  "Arial Narrow",
  "Arial Rounded MT Bold",
  "Helvetica",
  "Verdana",
  "Calibri",
  "Noto",
  "Lucida Sans",
  "Gill Sans",
  "Century Gothic",
  "Candara",
  "Futura",
  "Franklin Gothic Medium",
  "Trebuchet MS",
  "Geneva",
  "Segoe UI",
  "Optima",
  "Avanta Garde",
  "Times New Roman",
  "Big Caslon",
  "Bodoni MT",
  "Book Antiqua",
  "Bookman",
  "New Century Schoolbook",
  "Calisto MT",
  "Cambria",
  "Didot",
  "Garamond",
  "Georgia",
  "Goudy Old Style",
  "Hoefler Text",
  "Lucida Bright",
  "Palatino",
  "Perpetua",
  "Rockwell",
  "Rockwell Extra Bold",
  "Baskerville",
  "Consolas",
  "Courier",
  "Courier New",
  "Lucida Console",
  "Lucidatypewriter",
  "Lucida Sans Typewriter",
  "Monaco",
  "Andale Mono",
  "Comic Sans",
  "Comic Sans MS",
  "Apple Chancery",
  "Zapf Chancery",
  "Bradley Hand",
  "Brush Script MT",
  "Brush Script Std",
  "Snell Roundhan",
  "URW Chancery",
  "Coronet Script",
  "Florence",
  "Parkavenue",
  "Impact",
  "Brushstroke",
  "Luminari",
  "Chalkduster",
  "Jazz LET",
  "Blippo",
  "Stencil Std",
  "Marker Felt",
  "Trattatello",
  "Arnoldboecklin",
  "Oldtown",
  "Copperplate",
  "Papyrus",
  "Abadi MT Condensed Light",
  "Aharoni",
  "Aharoni Bold",
  "Aldhabi",
  "AlternateGothic2 BT",
  "Andale Mono",
  "Andalus",
  "Angsana New",
  "AngsanaUPC",
  "Aparajita",
  "Arabic Typesetting",
  "Bahnschrift",
  "Bahnschrift Light",
  "Bahnschrift SemiBold",
  "Bahnschrift SemiLight",
  "Batang",
  "BatangChe",
  "BIZ UDGothic",
  "BIZ UDMincho Medium",
  "Blippo",
  "Book Antiqua",
  "Bradley Hand",
  "Browallia New",
  "BrowalliaUPC",
  "Brushstroke",
  "Cambodian",
  "Cambria Math",
  "Cherokee",
  "Cordia New",
  "CordiaUPC",
  "Courier New",
  "DaunPenh",
  "David",
  "DengXian",
  "DFKai-SB",
  "Dotum",
  "DotumChe",
  "Estrangelo Edessa",
  "FangSong",
  "Gadugi",
  "Gautami",
  "Gisha",
  "Gulim",
  "GulimChe",
  "Gungsuh",
  "GungsuhChe",
  "Hebrew",
  "HoloLens MDL2 Assets",
  "Ink Free",
  "IrisUPC",
  "Iskoola Pota",
  "Japanese",
  "JasmineUPC",
  "Javanese Text",
  "KaiTi",
  "Kalinga",
  "Kartika",
  "Khmer UI",
  "KodchiangUPC",
  "Kokila",
  "Lao",
  "Lao UI",
  "Leelawadee",
  "Leelawadee UI",
  "Leelawadee UI Semilight",
  "Levenim MT",
  "LilyUPC",
  "Lucida Handwriting",
  "Lucida Sans Unicode",
  "Malgun Gothic",
  "Malgun Gothic Semilight",
  "Mangal",
  "Marker Felt",
  "Meiryo",
  "Meiryo UI",
  "Microsoft Himalaya",
  "Microsoft JhengHei",
  "Microsoft New Tai Lue",
  "Microsoft PhagsPa",
  "Microsoft Sans Serif",
  "Microsoft Tai Le",
  "Microsoft Uighur",
  "Microsoft YaHei",
  "Microsoft YaHei UI",
  "Microsoft Yi Baiti",
  "MingLiU",
  "MingLiU_HKSCS",
  "Miriam",
  "Mongolian Baiti",
  "MoolBoran",
  "MS Gothic",
  "MS Mincho",
  "MS PGothic",
  "MS PMincho",
  "MS UI Gothic",
  "MV Boli",
  "Myanmar Text",
  "Neue Haas Grotesk Text Pro",
  "News Gothic MT",
  "Nirmala UI",
  "NSimSun",
  "Nyala",
  "Palatino Linotype",
  "Parkavenue",
  "Plantagenet Cherokee",
  "PMingLiU",
  "Raavi",
  "Rockwell Nova",
  "Sanskrit Text",
  "Segoe MDL2 Assets",
  "Segoe Print",
  "Segoe Script",
  "Segoe UI Emoji",
  "Segoe UI Historic",
  "Segoe UI Symbol",
  "Shruti",
  "SimHei",
  "SimKai",
  "SimSun",
  "SimSun-ExtB",
  "Sitka",
  "Sylfaen",
  "Tahoma",
  "Tunga",
  "UD Digi Kyokasho",
  "Verdana Pro",
  "Vijaya",
  "Vrinda",
  "Webdings",
  "Wingdings",
  "Yu Gothic",
  "Yu Gothic UI",
  "Yu Mincho",
  "Zapf Chancery"
];
