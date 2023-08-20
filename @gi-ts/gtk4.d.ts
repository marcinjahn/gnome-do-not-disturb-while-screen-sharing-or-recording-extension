// @ts-nocheck
/**
 * Gtk 4.0
 *
 * Generated from 4.10.5
 */

import * as Gio from "./gio2";
import * as GObject from "./gobject2";
import * as Gdk from "./gdk4";
import * as GLib from "./glib2";
import * as Pango from "./pango1";
import * as cairo from "./cairo1";
import * as Gsk from "./gsk4";
import * as GdkPixbuf from "./gdkpixbuf2";
import * as Graphene from "./graphene1";

export const ACCESSIBLE_VALUE_UNDEFINED: number;
export const BINARY_AGE: number;
export const IM_MODULE_EXTENSION_POINT_NAME: string;
export const INPUT_ERROR: number;
export const INTERFACE_AGE: number;
export const INVALID_LIST_POSITION: number;
export const LEVEL_BAR_OFFSET_FULL: string;
export const LEVEL_BAR_OFFSET_HIGH: string;
export const LEVEL_BAR_OFFSET_LOW: string;
export const MAJOR_VERSION: number;
export const MAX_COMPOSE_LEN: number;
export const MEDIA_FILE_EXTENSION_POINT_NAME: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PAPER_NAME_A3: string;
export const PAPER_NAME_A4: string;
export const PAPER_NAME_A5: string;
export const PAPER_NAME_B5: string;
export const PAPER_NAME_EXECUTIVE: string;
export const PAPER_NAME_LEGAL: string;
export const PAPER_NAME_LETTER: string;
export const PRINT_SETTINGS_COLLATE: string;
export const PRINT_SETTINGS_DEFAULT_SOURCE: string;
export const PRINT_SETTINGS_DITHER: string;
export const PRINT_SETTINGS_DUPLEX: string;
export const PRINT_SETTINGS_FINISHINGS: string;
export const PRINT_SETTINGS_MEDIA_TYPE: string;
export const PRINT_SETTINGS_NUMBER_UP: string;
export const PRINT_SETTINGS_NUMBER_UP_LAYOUT: string;
export const PRINT_SETTINGS_N_COPIES: string;
export const PRINT_SETTINGS_ORIENTATION: string;
export const PRINT_SETTINGS_OUTPUT_BASENAME: string;
export const PRINT_SETTINGS_OUTPUT_BIN: string;
export const PRINT_SETTINGS_OUTPUT_DIR: string;
export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT: string;
export const PRINT_SETTINGS_OUTPUT_URI: string;
export const PRINT_SETTINGS_PAGE_RANGES: string;
export const PRINT_SETTINGS_PAGE_SET: string;
export const PRINT_SETTINGS_PAPER_FORMAT: string;
export const PRINT_SETTINGS_PAPER_HEIGHT: string;
export const PRINT_SETTINGS_PAPER_WIDTH: string;
export const PRINT_SETTINGS_PRINTER: string;
export const PRINT_SETTINGS_PRINTER_LPI: string;
export const PRINT_SETTINGS_PRINT_PAGES: string;
export const PRINT_SETTINGS_QUALITY: string;
export const PRINT_SETTINGS_RESOLUTION: string;
export const PRINT_SETTINGS_RESOLUTION_X: string;
export const PRINT_SETTINGS_RESOLUTION_Y: string;
export const PRINT_SETTINGS_REVERSE: string;
export const PRINT_SETTINGS_SCALE: string;
export const PRINT_SETTINGS_USE_COLOR: string;
export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA: string;
export const PRINT_SETTINGS_WIN32_DRIVER_VERSION: string;
export const PRIORITY_RESIZE: number;
export const STYLE_PROVIDER_PRIORITY_APPLICATION: number;
export const STYLE_PROVIDER_PRIORITY_FALLBACK: number;
export const STYLE_PROVIDER_PRIORITY_SETTINGS: number;
export const STYLE_PROVIDER_PRIORITY_THEME: number;
export const STYLE_PROVIDER_PRIORITY_USER: number;
export const TEXT_VIEW_PRIORITY_VALIDATE: number;
export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: number;
export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: number;
export function accelerator_get_default_mod_mask(): Gdk.ModifierType;
export function accelerator_get_label(
  accelerator_key: number,
  accelerator_mods: Gdk.ModifierType
): string;
export function accelerator_get_label_with_keycode(
  display: Gdk.Display | null,
  accelerator_key: number,
  keycode: number,
  accelerator_mods: Gdk.ModifierType
): string;
export function accelerator_name(
  accelerator_key: number,
  accelerator_mods: Gdk.ModifierType
): string;
export function accelerator_name_with_keycode(
  display: Gdk.Display | null,
  accelerator_key: number,
  keycode: number,
  accelerator_mods: Gdk.ModifierType
): string;
export function accelerator_parse(
  accelerator: string
): [boolean, number, Gdk.ModifierType | null];
export function accelerator_parse_with_keycode(
  accelerator: string,
  display: Gdk.Display | null
): [boolean, number, number[] | null, Gdk.ModifierType | null];
export function accelerator_valid(
  keyval: number,
  modifiers: Gdk.ModifierType
): boolean;
export function accessible_property_init_value(
  property: AccessibleProperty,
  value: GObject.Value | any
): void;
export function accessible_relation_init_value(
  relation: AccessibleRelation,
  value: GObject.Value | any
): void;
export function accessible_state_init_value(
  state: AccessibleState,
  value: GObject.Value | any
): void;
export function bitset_iter_init_at(
  set: Bitset,
  target: number
): [boolean, BitsetIter, number];
export function bitset_iter_init_first(
  set: Bitset
): [boolean, BitsetIter, number];
export function bitset_iter_init_last(
  set: Bitset
): [boolean, BitsetIter, number];
export function builder_error_quark(): GLib.Quark;
export function check_version(
  required_major: number,
  required_minor: number,
  required_micro: number
): string | null;
export function constraint_vfl_parser_error_quark(): GLib.Quark;
export function css_parser_error_quark(): GLib.Quark;
export function css_parser_warning_quark(): GLib.Quark;
export function dialog_error_quark(): GLib.Quark;
export function disable_setlocale(): void;
export function distribute_natural_allocation(
  extra_space: number,
  sizes: RequestedSize[]
): number;
export function editable_delegate_get_property(
  object: GObject.Object,
  prop_id: number,
  value: GObject.Value | any,
  pspec: GObject.ParamSpec
): boolean;
export function editable_delegate_set_property(
  object: GObject.Object,
  prop_id: number,
  value: GObject.Value | any,
  pspec: GObject.ParamSpec
): boolean;
export function editable_install_properties(
  object_class: GObject.Object,
  first_prop: number
): number;
export function enumerate_printers(func: PrinterFunc, wait: boolean): void;
export function file_chooser_error_quark(): GLib.Quark;
export function get_binary_age(): number;
export function get_debug_flags(): DebugFlags;
export function get_default_language(): Pango.Language;
export function get_interface_age(): number;
export function get_locale_direction(): TextDirection;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function hsv_to_rgb(
  h: number,
  s: number,
  v: number
): [number, number, number];
export function icon_theme_error_quark(): GLib.Quark;
export function init(): void;
export function init_check(): boolean;
export function is_initialized(): boolean;
export function native_get_for_surface(surface: Gdk.Surface): Native | null;
export function ordering_from_cmpfunc(cmpfunc_result: number): Ordering;
export function paper_size_get_default(): string;
export function paper_size_get_paper_sizes(
  include_custom: boolean
): PaperSize[];
export function param_spec_expression(
  name: string,
  nick: string,
  blurb: string,
  flags: GObject.ParamFlags
): GObject.ParamSpec;
export function print_error_quark(): GLib.Quark;
export function print_run_page_setup_dialog(
  parent: Window | null,
  page_setup: PageSetup | null,
  settings: PrintSettings
): PageSetup;
export function print_run_page_setup_dialog_async(
  parent: Window | null,
  page_setup: PageSetup | null,
  settings: PrintSettings,
  done_cb: PageSetupDoneFunc
): void;
export function recent_manager_error_quark(): GLib.Quark;
export function render_activity(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_arrow(
  context: StyleContext,
  cr: cairo.Context,
  angle: number,
  x: number,
  y: number,
  size: number
): void;
export function render_background(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_check(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_expander(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_focus(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_frame(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_handle(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function render_icon(
  context: StyleContext,
  cr: cairo.Context,
  texture: Gdk.Texture,
  x: number,
  y: number
): void;
export function render_layout(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  layout: Pango.Layout
): void;
export function render_line(
  context: StyleContext,
  cr: cairo.Context,
  x0: number,
  y0: number,
  x1: number,
  y1: number
): void;
export function render_option(
  context: StyleContext,
  cr: cairo.Context,
  x: number,
  y: number,
  width: number,
  height: number
): void;
export function rgb_to_hsv(
  r: number,
  g: number,
  b: number
): [number, number, number];
export function set_debug_flags(flags: DebugFlags): void;
export function show_uri(
  parent: Window | null,
  uri: string,
  timestamp: number
): void;
export function show_uri_full(
  parent: Window | null,
  uri: string,
  timestamp: number,
  cancellable?: Gio.Cancellable | null
): void;
export function show_uri_full_finish(
  parent: Window,
  result: Gio.AsyncResult
): boolean;
export function test_accessible_assertion_message_role(
  domain: string,
  file: string,
  line: number,
  func: string,
  expr: string,
  accessible: Accessible,
  expected_role: AccessibleRole,
  actual_role: AccessibleRole
): void;
export function test_accessible_has_property(
  accessible: Accessible,
  property: AccessibleProperty
): boolean;
export function test_accessible_has_relation(
  accessible: Accessible,
  relation: AccessibleRelation
): boolean;
export function test_accessible_has_role(
  accessible: Accessible,
  role: AccessibleRole
): boolean;
export function test_accessible_has_state(
  accessible: Accessible,
  state: AccessibleState
): boolean;
export function test_list_all_types(): GObject.GType[];
export function test_register_all_types(): void;
export function test_widget_wait_for_draw(widget: Widget): void;
export function tree_create_row_drag_content(
  tree_model: TreeModel,
  path: TreePath
): Gdk.ContentProvider;
export function tree_get_row_drag_data(
  value: GObject.Value | any
): [boolean, TreeModel | null, TreePath | null];
export function tree_row_reference_deleted(
  proxy: GObject.Object,
  path: TreePath
): void;
export function tree_row_reference_inserted(
  proxy: GObject.Object,
  path: TreePath
): void;
export function value_dup_expression(
  value: GObject.Value | any
): Expression | null;
export function value_get_expression(
  value: GObject.Value | any
): Expression | null;
export function value_set_expression(
  value: GObject.Value | any,
  expression: Expression
): void;
export function value_take_expression(
  value: GObject.Value | any,
  expression?: Expression | null
): void;
export type AssistantPageFunc = (current_page: number) => number;
export type CellAllocCallback = (
  renderer: CellRenderer,
  cell_area: Gdk.Rectangle,
  cell_background: Gdk.Rectangle
) => boolean;
export type CellCallback = (renderer: CellRenderer) => boolean;
export type CellLayoutDataFunc = (
  cell_layout: CellLayout,
  cell: CellRenderer,
  tree_model: TreeModel,
  iter: TreeIter
) => void;
export type CustomAllocateFunc = (
  widget: Widget,
  width: number,
  height: number,
  baseline: number
) => void;
export type CustomFilterFunc<A = GObject.Object> = (item: A) => boolean;
export type CustomMeasureFunc = (
  widget: Widget,
  orientation: Orientation,
  for_size: number
) => void;
export type CustomRequestModeFunc = (widget: Widget) => SizeRequestMode;
export type DrawingAreaDrawFunc = (
  drawing_area: DrawingArea,
  cr: cairo.Context,
  width: number,
  height: number
) => void;
export type EntryCompletionMatchFunc = (
  completion: EntryCompletion,
  key: string,
  iter: TreeIter
) => boolean;
export type ExpressionNotify = () => void;
export type FlowBoxCreateWidgetFunc<A = GObject.Object> = (item: A) => Widget;
export type FlowBoxFilterFunc = (child: FlowBoxChild) => boolean;
export type FlowBoxForeachFunc = (box: FlowBox, child: FlowBoxChild) => void;
export type FlowBoxSortFunc = (
  child1: FlowBoxChild,
  child2: FlowBoxChild
) => number;
export type FontFilterFunc = (
  family: Pango.FontFamily,
  face: Pango.FontFace
) => boolean;
export type IconViewForeachFunc = (icon_view: IconView, path: TreePath) => void;
export type ListBoxCreateWidgetFunc<A = GObject.Object> = (item: A) => Widget;
export type ListBoxFilterFunc = (row: ListBoxRow) => boolean;
export type ListBoxForeachFunc = (box: ListBox, row: ListBoxRow) => void;
export type ListBoxSortFunc = (row1: ListBoxRow, row2: ListBoxRow) => number;
export type ListBoxUpdateHeaderFunc = (
  row: ListBoxRow,
  before?: ListBoxRow | null
) => void;
export type MapListModelMapFunc<A = GObject.Object> = (
  item: A
) => GObject.Object;
export type MenuButtonCreatePopupFunc = (menu_button: MenuButton) => void;
export type PageSetupDoneFunc = (page_setup: PageSetup) => void;
export type PrintJobCompleteFunc = (
  print_job: PrintJob,
  error: GLib.Error
) => void;
export type PrintSettingsFunc = (key: string, value: string) => void;
export type PrinterFunc = (printer: Printer) => boolean;
export type ScaleFormatValueFunc = (scale: Scale, value: number) => string;
export type ShortcutFunc = (
  widget: Widget,
  args?: GLib.Variant | null
) => boolean;
export type TextCharPredicate = (ch: number) => boolean;
export type TextTagTableForeach = (tag: TextTag) => void;
export type TickCallback = (
  widget: Widget,
  frame_clock: Gdk.FrameClock
) => boolean;
export type TreeCellDataFunc = (
  tree_column: TreeViewColumn,
  cell: CellRenderer,
  tree_model: TreeModel,
  iter: TreeIter
) => void;
export type TreeIterCompareFunc = (
  model: TreeModel,
  a: TreeIter,
  b: TreeIter
) => number;
export type TreeListModelCreateModelFunc<A = GObject.Object> = (
  item: A
) => Gio.ListModel | null;
export type TreeModelFilterModifyFunc = (
  model: TreeModel,
  iter: TreeIter,
  column: number
) => void;
export type TreeModelFilterVisibleFunc = (
  model: TreeModel,
  iter: TreeIter
) => boolean;
export type TreeModelForeachFunc = (
  model: TreeModel,
  path: TreePath,
  iter: TreeIter
) => boolean;
export type TreeSelectionForeachFunc = (
  model: TreeModel,
  path: TreePath,
  iter: TreeIter
) => void;
export type TreeSelectionFunc = (
  selection: TreeSelection,
  model: TreeModel,
  path: TreePath,
  path_currently_selected: boolean
) => boolean;
export type TreeViewColumnDropFunc = (
  tree_view: TreeView,
  column: TreeViewColumn,
  prev_column: TreeViewColumn,
  next_column: TreeViewColumn
) => boolean;
export type TreeViewMappingFunc = (tree_view: TreeView, path: TreePath) => void;
export type TreeViewRowSeparatorFunc = (
  model: TreeModel,
  iter: TreeIter
) => boolean;
export type TreeViewSearchEqualFunc = (
  model: TreeModel,
  column: number,
  key: string,
  iter: TreeIter
) => boolean;
export type WidgetActionActivateFunc = (
  widget: Widget,
  action_name: string,
  parameter?: GLib.Variant | null
) => void;
export type TreeRowData = object | null;

export namespace AccessibleAutocomplete {
  export const $gtype: GObject.GType<AccessibleAutocomplete>;
}

export enum AccessibleAutocomplete {
  NONE = 0,
  INLINE = 1,
  LIST = 2,
  BOTH = 3,
}

export namespace AccessibleInvalidState {
  export const $gtype: GObject.GType<AccessibleInvalidState>;
}

export enum AccessibleInvalidState {
  FALSE = 0,
  TRUE = 1,
  GRAMMAR = 2,
  SPELLING = 3,
}

export namespace AccessiblePlatformState {
  export const $gtype: GObject.GType<AccessiblePlatformState>;
}

export enum AccessiblePlatformState {
  FOCUSABLE = 0,
  FOCUSED = 1,
  ACTIVE = 2,
}

export namespace AccessibleProperty {
  export const $gtype: GObject.GType<AccessibleProperty>;
}

export enum AccessibleProperty {
  AUTOCOMPLETE = 0,
  DESCRIPTION = 1,
  HAS_POPUP = 2,
  KEY_SHORTCUTS = 3,
  LABEL = 4,
  LEVEL = 5,
  MODAL = 6,
  MULTI_LINE = 7,
  MULTI_SELECTABLE = 8,
  ORIENTATION = 9,
  PLACEHOLDER = 10,
  READ_ONLY = 11,
  REQUIRED = 12,
  ROLE_DESCRIPTION = 13,
  SORT = 14,
  VALUE_MAX = 15,
  VALUE_MIN = 16,
  VALUE_NOW = 17,
  VALUE_TEXT = 18,
}

export namespace AccessibleRelation {
  export const $gtype: GObject.GType<AccessibleRelation>;
}

export enum AccessibleRelation {
  ACTIVE_DESCENDANT = 0,
  COL_COUNT = 1,
  COL_INDEX = 2,
  COL_INDEX_TEXT = 3,
  COL_SPAN = 4,
  CONTROLS = 5,
  DESCRIBED_BY = 6,
  DETAILS = 7,
  ERROR_MESSAGE = 8,
  FLOW_TO = 9,
  LABELLED_BY = 10,
  OWNS = 11,
  POS_IN_SET = 12,
  ROW_COUNT = 13,
  ROW_INDEX = 14,
  ROW_INDEX_TEXT = 15,
  ROW_SPAN = 16,
  SET_SIZE = 17,
}

export namespace AccessibleRole {
  export const $gtype: GObject.GType<AccessibleRole>;
}

export enum AccessibleRole {
  ALERT = 0,
  ALERT_DIALOG = 1,
  BANNER = 2,
  BUTTON = 3,
  CAPTION = 4,
  CELL = 5,
  CHECKBOX = 6,
  COLUMN_HEADER = 7,
  COMBO_BOX = 8,
  COMMAND = 9,
  COMPOSITE = 10,
  DIALOG = 11,
  DOCUMENT = 12,
  FEED = 13,
  FORM = 14,
  GENERIC = 15,
  GRID = 16,
  GRID_CELL = 17,
  GROUP = 18,
  HEADING = 19,
  IMG = 20,
  INPUT = 21,
  LABEL = 22,
  LANDMARK = 23,
  LEGEND = 24,
  LINK = 25,
  LIST = 26,
  LIST_BOX = 27,
  LIST_ITEM = 28,
  LOG = 29,
  MAIN = 30,
  MARQUEE = 31,
  MATH = 32,
  METER = 33,
  MENU = 34,
  MENU_BAR = 35,
  MENU_ITEM = 36,
  MENU_ITEM_CHECKBOX = 37,
  MENU_ITEM_RADIO = 38,
  NAVIGATION = 39,
  NONE = 40,
  NOTE = 41,
  OPTION = 42,
  PRESENTATION = 43,
  PROGRESS_BAR = 44,
  RADIO = 45,
  RADIO_GROUP = 46,
  RANGE = 47,
  REGION = 48,
  ROW = 49,
  ROW_GROUP = 50,
  ROW_HEADER = 51,
  SCROLLBAR = 52,
  SEARCH = 53,
  SEARCH_BOX = 54,
  SECTION = 55,
  SECTION_HEAD = 56,
  SELECT = 57,
  SEPARATOR = 58,
  SLIDER = 59,
  SPIN_BUTTON = 60,
  STATUS = 61,
  STRUCTURE = 62,
  SWITCH = 63,
  TAB = 64,
  TABLE = 65,
  TAB_LIST = 66,
  TAB_PANEL = 67,
  TEXT_BOX = 68,
  TIME = 69,
  TIMER = 70,
  TOOLBAR = 71,
  TOOLTIP = 72,
  TREE = 73,
  TREE_GRID = 74,
  TREE_ITEM = 75,
  WIDGET = 76,
  WINDOW = 77,
  TOGGLE_BUTTON = 78,
}

export namespace AccessibleSort {
  export const $gtype: GObject.GType<AccessibleSort>;
}

export enum AccessibleSort {
  NONE = 0,
  ASCENDING = 1,
  DESCENDING = 2,
  OTHER = 3,
}

export namespace AccessibleState {
  export const $gtype: GObject.GType<AccessibleState>;
}

export enum AccessibleState {
  BUSY = 0,
  CHECKED = 1,
  DISABLED = 2,
  EXPANDED = 3,
  HIDDEN = 4,
  INVALID = 5,
  PRESSED = 6,
  SELECTED = 7,
}

export namespace AccessibleTristate {
  export const $gtype: GObject.GType<AccessibleTristate>;
}

export enum AccessibleTristate {
  FALSE = 0,
  TRUE = 1,
  MIXED = 2,
}

export namespace Align {
  export const $gtype: GObject.GType<Align>;
}

export enum Align {
  FILL = 0,
  START = 1,
  END = 2,
  CENTER = 3,
  BASELINE = 4,
}

export namespace ArrowType {
  export const $gtype: GObject.GType<ArrowType>;
}

export enum ArrowType {
  UP = 0,
  DOWN = 1,
  LEFT = 2,
  RIGHT = 3,
  NONE = 4,
}

export namespace AssistantPageType {
  export const $gtype: GObject.GType<AssistantPageType>;
}

export enum AssistantPageType {
  CONTENT = 0,
  INTRO = 1,
  CONFIRM = 2,
  SUMMARY = 3,
  PROGRESS = 4,
  CUSTOM = 5,
}

export namespace BaselinePosition {
  export const $gtype: GObject.GType<BaselinePosition>;
}

export enum BaselinePosition {
  TOP = 0,
  CENTER = 1,
  BOTTOM = 2,
}

export namespace BorderStyle {
  export const $gtype: GObject.GType<BorderStyle>;
}

export enum BorderStyle {
  NONE = 0,
  HIDDEN = 1,
  SOLID = 2,
  INSET = 3,
  OUTSET = 4,
  DOTTED = 5,
  DASHED = 6,
  DOUBLE = 7,
  GROOVE = 8,
  RIDGE = 9,
}

export class BuilderError extends GLib.Error {
  static $gtype: GObject.GType<BuilderError>;

  constructor(options: { message: string; code: number });
  constructor(copy: BuilderError);

  // Fields
  static INVALID_TYPE_FUNCTION: number;
  static UNHANDLED_TAG: number;
  static MISSING_ATTRIBUTE: number;
  static INVALID_ATTRIBUTE: number;
  static INVALID_TAG: number;
  static MISSING_PROPERTY_VALUE: number;
  static INVALID_VALUE: number;
  static VERSION_MISMATCH: number;
  static DUPLICATE_ID: number;
  static OBJECT_TYPE_REFUSED: number;
  static TEMPLATE_MISMATCH: number;
  static INVALID_PROPERTY: number;
  static INVALID_SIGNAL: number;
  static INVALID_ID: number;
  static INVALID_FUNCTION: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace ButtonsType {
  export const $gtype: GObject.GType<ButtonsType>;
}

export enum ButtonsType {
  NONE = 0,
  OK = 1,
  CLOSE = 2,
  CANCEL = 3,
  YES_NO = 4,
  OK_CANCEL = 5,
}

export namespace CellRendererAccelMode {
  export const $gtype: GObject.GType<CellRendererAccelMode>;
}

export enum CellRendererAccelMode {
  GTK = 0,
  OTHER = 1,
}

export namespace CellRendererMode {
  export const $gtype: GObject.GType<CellRendererMode>;
}

export enum CellRendererMode {
  INERT = 0,
  ACTIVATABLE = 1,
  EDITABLE = 2,
}

export namespace Collation {
  export const $gtype: GObject.GType<Collation>;
}

export enum Collation {
  NONE = 0,
  UNICODE = 1,
  FILENAME = 2,
}

export namespace ConstraintAttribute {
  export const $gtype: GObject.GType<ConstraintAttribute>;
}

export enum ConstraintAttribute {
  NONE = 0,
  LEFT = 1,
  RIGHT = 2,
  TOP = 3,
  BOTTOM = 4,
  START = 5,
  END = 6,
  WIDTH = 7,
  HEIGHT = 8,
  CENTER_X = 9,
  CENTER_Y = 10,
  BASELINE = 11,
}

export namespace ConstraintRelation {
  export const $gtype: GObject.GType<ConstraintRelation>;
}

export enum ConstraintRelation {
  LE = -1,
  EQ = 0,
  GE = 1,
}

export namespace ConstraintStrength {
  export const $gtype: GObject.GType<ConstraintStrength>;
}

export enum ConstraintStrength {
  REQUIRED = 1001001000,
  STRONG = 1000000000,
  MEDIUM = 1000,
  WEAK = 1,
}

export class ConstraintVflParserError extends GLib.Error {
  static $gtype: GObject.GType<ConstraintVflParserError>;

  constructor(options: { message: string; code: number });
  constructor(copy: ConstraintVflParserError);

  // Fields
  static SYMBOL: number;
  static ATTRIBUTE: number;
  static VIEW: number;
  static METRIC: number;
  static PRIORITY: number;
  static RELATION: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace ContentFit {
  export const $gtype: GObject.GType<ContentFit>;
}

export enum ContentFit {
  FILL = 0,
  CONTAIN = 1,
  COVER = 2,
  SCALE_DOWN = 3,
}

export namespace CornerType {
  export const $gtype: GObject.GType<CornerType>;
}

export enum CornerType {
  TOP_LEFT = 0,
  BOTTOM_LEFT = 1,
  TOP_RIGHT = 2,
  BOTTOM_RIGHT = 3,
}

export class CssParserError extends GLib.Error {
  static $gtype: GObject.GType<CssParserError>;

  constructor(options: { message: string; code: number });
  constructor(copy: CssParserError);

  // Fields
  static FAILED: number;
  static SYNTAX: number;
  static IMPORT: number;
  static NAME: number;
  static UNKNOWN_VALUE: number;
}

export namespace CssParserWarning {
  export const $gtype: GObject.GType<CssParserWarning>;
}

export enum CssParserWarning {
  DEPRECATED = 0,
  SYNTAX = 1,
  UNIMPLEMENTED = 2,
}

export namespace DeleteType {
  export const $gtype: GObject.GType<DeleteType>;
}

export enum DeleteType {
  CHARS = 0,
  WORD_ENDS = 1,
  WORDS = 2,
  DISPLAY_LINES = 3,
  DISPLAY_LINE_ENDS = 4,
  PARAGRAPH_ENDS = 5,
  PARAGRAPHS = 6,
  WHITESPACE = 7,
}

export class DialogError extends GLib.Error {
  static $gtype: GObject.GType<DialogError>;

  constructor(options: { message: string; code: number });
  constructor(copy: DialogError);

  // Fields
  static FAILED: number;
  static CANCELLED: number;
  static DISMISSED: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace DirectionType {
  export const $gtype: GObject.GType<DirectionType>;
}

export enum DirectionType {
  TAB_FORWARD = 0,
  TAB_BACKWARD = 1,
  UP = 2,
  DOWN = 3,
  LEFT = 4,
  RIGHT = 5,
}

export namespace EditableProperties {
  export const $gtype: GObject.GType<EditableProperties>;
}

export enum EditableProperties {
  PROP_TEXT = 0,
  PROP_CURSOR_POSITION = 1,
  PROP_SELECTION_BOUND = 2,
  PROP_EDITABLE = 3,
  PROP_WIDTH_CHARS = 4,
  PROP_MAX_WIDTH_CHARS = 5,
  PROP_XALIGN = 6,
  PROP_ENABLE_UNDO = 7,
  NUM_PROPERTIES = 8,
}

export namespace EntryIconPosition {
  export const $gtype: GObject.GType<EntryIconPosition>;
}

export enum EntryIconPosition {
  PRIMARY = 0,
  SECONDARY = 1,
}

export namespace EventSequenceState {
  export const $gtype: GObject.GType<EventSequenceState>;
}

export enum EventSequenceState {
  NONE = 0,
  CLAIMED = 1,
  DENIED = 2,
}

export namespace FileChooserAction {
  export const $gtype: GObject.GType<FileChooserAction>;
}

export enum FileChooserAction {
  OPEN = 0,
  SAVE = 1,
  SELECT_FOLDER = 2,
}

export class FileChooserError extends GLib.Error {
  static $gtype: GObject.GType<FileChooserError>;

  constructor(options: { message: string; code: number });
  constructor(copy: FileChooserError);

  // Fields
  static NONEXISTENT: number;
  static BAD_FILENAME: number;
  static ALREADY_EXISTS: number;
  static INCOMPLETE_HOSTNAME: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace FilterChange {
  export const $gtype: GObject.GType<FilterChange>;
}

export enum FilterChange {
  DIFFERENT = 0,
  LESS_STRICT = 1,
  MORE_STRICT = 2,
}

export namespace FilterMatch {
  export const $gtype: GObject.GType<FilterMatch>;
}

export enum FilterMatch {
  SOME = 0,
  NONE = 1,
  ALL = 2,
}

export namespace FontLevel {
  export const $gtype: GObject.GType<FontLevel>;
}

export enum FontLevel {
  FAMILY = 0,
  FACE = 1,
  FONT = 2,
  FEATURES = 3,
}

export namespace IconSize {
  export const $gtype: GObject.GType<IconSize>;
}

export enum IconSize {
  INHERIT = 0,
  NORMAL = 1,
  LARGE = 2,
}

export class IconThemeError extends GLib.Error {
  static $gtype: GObject.GType<IconThemeError>;

  constructor(options: { message: string; code: number });
  constructor(copy: IconThemeError);

  // Fields
  static NOT_FOUND: number;
  static FAILED: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace IconViewDropPosition {
  export const $gtype: GObject.GType<IconViewDropPosition>;
}

export enum IconViewDropPosition {
  NO_DROP = 0,
  DROP_INTO = 1,
  DROP_LEFT = 2,
  DROP_RIGHT = 3,
  DROP_ABOVE = 4,
  DROP_BELOW = 5,
}

export namespace ImageType {
  export const $gtype: GObject.GType<ImageType>;
}

export enum ImageType {
  EMPTY = 0,
  ICON_NAME = 1,
  GICON = 2,
  PAINTABLE = 3,
}

export namespace InputPurpose {
  export const $gtype: GObject.GType<InputPurpose>;
}

export enum InputPurpose {
  FREE_FORM = 0,
  ALPHA = 1,
  DIGITS = 2,
  NUMBER = 3,
  PHONE = 4,
  URL = 5,
  EMAIL = 6,
  NAME = 7,
  PASSWORD = 8,
  PIN = 9,
  TERMINAL = 10,
}

export namespace InscriptionOverflow {
  export const $gtype: GObject.GType<InscriptionOverflow>;
}

export enum InscriptionOverflow {
  CLIP = 0,
  ELLIPSIZE_START = 1,
  ELLIPSIZE_MIDDLE = 2,
  ELLIPSIZE_END = 3,
}

export namespace Justification {
  export const $gtype: GObject.GType<Justification>;
}

export enum Justification {
  LEFT = 0,
  RIGHT = 1,
  CENTER = 2,
  FILL = 3,
}

export namespace LevelBarMode {
  export const $gtype: GObject.GType<LevelBarMode>;
}

export enum LevelBarMode {
  CONTINUOUS = 0,
  DISCRETE = 1,
}

export namespace License {
  export const $gtype: GObject.GType<License>;
}

export enum License {
  UNKNOWN = 0,
  CUSTOM = 1,
  GPL_2_0 = 2,
  GPL_3_0 = 3,
  LGPL_2_1 = 4,
  LGPL_3_0 = 5,
  BSD = 6,
  MIT_X11 = 7,
  ARTISTIC = 8,
  GPL_2_0_ONLY = 9,
  GPL_3_0_ONLY = 10,
  LGPL_2_1_ONLY = 11,
  LGPL_3_0_ONLY = 12,
  AGPL_3_0 = 13,
  AGPL_3_0_ONLY = 14,
  BSD_3 = 15,
  APACHE_2_0 = 16,
  MPL_2_0 = 17,
}

export namespace MessageType {
  export const $gtype: GObject.GType<MessageType>;
}

export enum MessageType {
  INFO = 0,
  WARNING = 1,
  QUESTION = 2,
  ERROR = 3,
  OTHER = 4,
}

export namespace MovementStep {
  export const $gtype: GObject.GType<MovementStep>;
}

export enum MovementStep {
  LOGICAL_POSITIONS = 0,
  VISUAL_POSITIONS = 1,
  WORDS = 2,
  DISPLAY_LINES = 3,
  DISPLAY_LINE_ENDS = 4,
  PARAGRAPHS = 5,
  PARAGRAPH_ENDS = 6,
  PAGES = 7,
  BUFFER_ENDS = 8,
  HORIZONTAL_PAGES = 9,
}

export namespace NaturalWrapMode {
  export const $gtype: GObject.GType<NaturalWrapMode>;
}

export enum NaturalWrapMode {
  INHERIT = 0,
  NONE = 1,
  WORD = 2,
}

export namespace NotebookTab {
  export const $gtype: GObject.GType<NotebookTab>;
}

export enum NotebookTab {
  FIRST = 0,
  LAST = 1,
}

export namespace NumberUpLayout {
  export const $gtype: GObject.GType<NumberUpLayout>;
}

export enum NumberUpLayout {
  LRTB = 0,
  LRBT = 1,
  RLTB = 2,
  RLBT = 3,
  TBLR = 4,
  TBRL = 5,
  BTLR = 6,
  BTRL = 7,
}

export namespace Ordering {
  export const $gtype: GObject.GType<Ordering>;
}

export enum Ordering {
  SMALLER = -1,
  EQUAL = 0,
  LARGER = 1,
}

export namespace Orientation {
  export const $gtype: GObject.GType<Orientation>;
}

export enum Orientation {
  HORIZONTAL = 0,
  VERTICAL = 1,
}

export namespace Overflow {
  export const $gtype: GObject.GType<Overflow>;
}

export enum Overflow {
  VISIBLE = 0,
  HIDDEN = 1,
}

export namespace PackType {
  export const $gtype: GObject.GType<PackType>;
}

export enum PackType {
  START = 0,
  END = 1,
}

export namespace PadActionType {
  export const $gtype: GObject.GType<PadActionType>;
}

export enum PadActionType {
  BUTTON = 0,
  RING = 1,
  STRIP = 2,
}

export namespace PageOrientation {
  export const $gtype: GObject.GType<PageOrientation>;
}

export enum PageOrientation {
  PORTRAIT = 0,
  LANDSCAPE = 1,
  REVERSE_PORTRAIT = 2,
  REVERSE_LANDSCAPE = 3,
}

export namespace PageSet {
  export const $gtype: GObject.GType<PageSet>;
}

export enum PageSet {
  ALL = 0,
  EVEN = 1,
  ODD = 2,
}

export namespace PanDirection {
  export const $gtype: GObject.GType<PanDirection>;
}

export enum PanDirection {
  LEFT = 0,
  RIGHT = 1,
  UP = 2,
  DOWN = 3,
}

export namespace PolicyType {
  export const $gtype: GObject.GType<PolicyType>;
}

export enum PolicyType {
  ALWAYS = 0,
  AUTOMATIC = 1,
  NEVER = 2,
  EXTERNAL = 3,
}

export namespace PositionType {
  export const $gtype: GObject.GType<PositionType>;
}

export enum PositionType {
  LEFT = 0,
  RIGHT = 1,
  TOP = 2,
  BOTTOM = 3,
}

export namespace PrintDuplex {
  export const $gtype: GObject.GType<PrintDuplex>;
}

export enum PrintDuplex {
  SIMPLEX = 0,
  HORIZONTAL = 1,
  VERTICAL = 2,
}

export class PrintError extends GLib.Error {
  static $gtype: GObject.GType<PrintError>;

  constructor(options: { message: string; code: number });
  constructor(copy: PrintError);

  // Fields
  static GENERAL: number;
  static INTERNAL_ERROR: number;
  static NOMEM: number;
  static INVALID_FILE: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace PrintOperationAction {
  export const $gtype: GObject.GType<PrintOperationAction>;
}

export enum PrintOperationAction {
  PRINT_DIALOG = 0,
  PRINT = 1,
  PREVIEW = 2,
  EXPORT = 3,
}

export namespace PrintOperationResult {
  export const $gtype: GObject.GType<PrintOperationResult>;
}

export enum PrintOperationResult {
  ERROR = 0,
  APPLY = 1,
  CANCEL = 2,
  IN_PROGRESS = 3,
}

export namespace PrintPages {
  export const $gtype: GObject.GType<PrintPages>;
}

export enum PrintPages {
  ALL = 0,
  CURRENT = 1,
  RANGES = 2,
  SELECTION = 3,
}

export namespace PrintQuality {
  export const $gtype: GObject.GType<PrintQuality>;
}

export enum PrintQuality {
  LOW = 0,
  NORMAL = 1,
  HIGH = 2,
  DRAFT = 3,
}

export namespace PrintStatus {
  export const $gtype: GObject.GType<PrintStatus>;
}

export enum PrintStatus {
  INITIAL = 0,
  PREPARING = 1,
  GENERATING_DATA = 2,
  SENDING_DATA = 3,
  PENDING = 4,
  PENDING_ISSUE = 5,
  PRINTING = 6,
  FINISHED = 7,
  FINISHED_ABORTED = 8,
}

export namespace PropagationLimit {
  export const $gtype: GObject.GType<PropagationLimit>;
}

export enum PropagationLimit {
  NONE = 0,
  SAME_NATIVE = 1,
}

export namespace PropagationPhase {
  export const $gtype: GObject.GType<PropagationPhase>;
}

export enum PropagationPhase {
  NONE = 0,
  CAPTURE = 1,
  BUBBLE = 2,
  TARGET = 3,
}

export class RecentManagerError extends GLib.Error {
  static $gtype: GObject.GType<RecentManagerError>;

  constructor(options: { message: string; code: number });
  constructor(copy: RecentManagerError);

  // Fields
  static NOT_FOUND: number;
  static INVALID_URI: number;
  static INVALID_ENCODING: number;
  static NOT_REGISTERED: number;
  static READ: number;
  static WRITE: number;
  static UNKNOWN: number;

  // Members
  static quark(): GLib.Quark;
}

export namespace ResponseType {
  export const $gtype: GObject.GType<ResponseType>;
}

export enum ResponseType {
  NONE = -1,
  REJECT = -2,
  ACCEPT = -3,
  DELETE_EVENT = -4,
  OK = -5,
  CANCEL = -6,
  CLOSE = -7,
  YES = -8,
  NO = -9,
  APPLY = -10,
  HELP = -11,
}

export namespace RevealerTransitionType {
  export const $gtype: GObject.GType<RevealerTransitionType>;
}

export enum RevealerTransitionType {
  NONE = 0,
  CROSSFADE = 1,
  SLIDE_RIGHT = 2,
  SLIDE_LEFT = 3,
  SLIDE_UP = 4,
  SLIDE_DOWN = 5,
  SWING_RIGHT = 6,
  SWING_LEFT = 7,
  SWING_UP = 8,
  SWING_DOWN = 9,
}

export namespace ScrollStep {
  export const $gtype: GObject.GType<ScrollStep>;
}

export enum ScrollStep {
  STEPS = 0,
  PAGES = 1,
  ENDS = 2,
  HORIZONTAL_STEPS = 3,
  HORIZONTAL_PAGES = 4,
  HORIZONTAL_ENDS = 5,
}

export namespace ScrollType {
  export const $gtype: GObject.GType<ScrollType>;
}

export enum ScrollType {
  NONE = 0,
  JUMP = 1,
  STEP_BACKWARD = 2,
  STEP_FORWARD = 3,
  PAGE_BACKWARD = 4,
  PAGE_FORWARD = 5,
  STEP_UP = 6,
  STEP_DOWN = 7,
  PAGE_UP = 8,
  PAGE_DOWN = 9,
  STEP_LEFT = 10,
  STEP_RIGHT = 11,
  PAGE_LEFT = 12,
  PAGE_RIGHT = 13,
  START = 14,
  END = 15,
}

export namespace ScrollablePolicy {
  export const $gtype: GObject.GType<ScrollablePolicy>;
}

export enum ScrollablePolicy {
  MINIMUM = 0,
  NATURAL = 1,
}

export namespace SelectionMode {
  export const $gtype: GObject.GType<SelectionMode>;
}

export enum SelectionMode {
  NONE = 0,
  SINGLE = 1,
  BROWSE = 2,
  MULTIPLE = 3,
}

export namespace SensitivityType {
  export const $gtype: GObject.GType<SensitivityType>;
}

export enum SensitivityType {
  AUTO = 0,
  ON = 1,
  OFF = 2,
}

export namespace ShortcutScope {
  export const $gtype: GObject.GType<ShortcutScope>;
}

export enum ShortcutScope {
  LOCAL = 0,
  MANAGED = 1,
  GLOBAL = 2,
}

export namespace ShortcutType {
  export const $gtype: GObject.GType<ShortcutType>;
}

export enum ShortcutType {
  ACCELERATOR = 0,
  GESTURE_PINCH = 1,
  GESTURE_STRETCH = 2,
  GESTURE_ROTATE_CLOCKWISE = 3,
  GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
  GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
  GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
  GESTURE = 7,
  GESTURE_SWIPE_LEFT = 8,
  GESTURE_SWIPE_RIGHT = 9,
}

export namespace SizeGroupMode {
  export const $gtype: GObject.GType<SizeGroupMode>;
}

export enum SizeGroupMode {
  NONE = 0,
  HORIZONTAL = 1,
  VERTICAL = 2,
  BOTH = 3,
}

export namespace SizeRequestMode {
  export const $gtype: GObject.GType<SizeRequestMode>;
}

export enum SizeRequestMode {
  HEIGHT_FOR_WIDTH = 0,
  WIDTH_FOR_HEIGHT = 1,
  CONSTANT_SIZE = 2,
}

export namespace SortType {
  export const $gtype: GObject.GType<SortType>;
}

export enum SortType {
  ASCENDING = 0,
  DESCENDING = 1,
}

export namespace SorterChange {
  export const $gtype: GObject.GType<SorterChange>;
}

export enum SorterChange {
  DIFFERENT = 0,
  INVERTED = 1,
  LESS_STRICT = 2,
  MORE_STRICT = 3,
}

export namespace SorterOrder {
  export const $gtype: GObject.GType<SorterOrder>;
}

export enum SorterOrder {
  PARTIAL = 0,
  NONE = 1,
  TOTAL = 2,
}

export namespace SpinButtonUpdatePolicy {
  export const $gtype: GObject.GType<SpinButtonUpdatePolicy>;
}

export enum SpinButtonUpdatePolicy {
  ALWAYS = 0,
  IF_VALID = 1,
}

export namespace SpinType {
  export const $gtype: GObject.GType<SpinType>;
}

export enum SpinType {
  STEP_FORWARD = 0,
  STEP_BACKWARD = 1,
  PAGE_FORWARD = 2,
  PAGE_BACKWARD = 3,
  HOME = 4,
  END = 5,
  USER_DEFINED = 6,
}

export namespace StackTransitionType {
  export const $gtype: GObject.GType<StackTransitionType>;
}

export enum StackTransitionType {
  NONE = 0,
  CROSSFADE = 1,
  SLIDE_RIGHT = 2,
  SLIDE_LEFT = 3,
  SLIDE_UP = 4,
  SLIDE_DOWN = 5,
  SLIDE_LEFT_RIGHT = 6,
  SLIDE_UP_DOWN = 7,
  OVER_UP = 8,
  OVER_DOWN = 9,
  OVER_LEFT = 10,
  OVER_RIGHT = 11,
  UNDER_UP = 12,
  UNDER_DOWN = 13,
  UNDER_LEFT = 14,
  UNDER_RIGHT = 15,
  OVER_UP_DOWN = 16,
  OVER_DOWN_UP = 17,
  OVER_LEFT_RIGHT = 18,
  OVER_RIGHT_LEFT = 19,
  ROTATE_LEFT = 20,
  ROTATE_RIGHT = 21,
  ROTATE_LEFT_RIGHT = 22,
}

export namespace StringFilterMatchMode {
  export const $gtype: GObject.GType<StringFilterMatchMode>;
}

export enum StringFilterMatchMode {
  EXACT = 0,
  SUBSTRING = 1,
  PREFIX = 2,
}

export namespace SymbolicColor {
  export const $gtype: GObject.GType<SymbolicColor>;
}

export enum SymbolicColor {
  FOREGROUND = 0,
  ERROR = 1,
  WARNING = 2,
  SUCCESS = 3,
}

export namespace SystemSetting {
  export const $gtype: GObject.GType<SystemSetting>;
}

export enum SystemSetting {
  DPI = 0,
  FONT_NAME = 1,
  FONT_CONFIG = 2,
  DISPLAY = 3,
  ICON_THEME = 4,
}

export namespace TextDirection {
  export const $gtype: GObject.GType<TextDirection>;
}

export enum TextDirection {
  NONE = 0,
  LTR = 1,
  RTL = 2,
}

export namespace TextExtendSelection {
  export const $gtype: GObject.GType<TextExtendSelection>;
}

export enum TextExtendSelection {
  WORD = 0,
  LINE = 1,
}

export namespace TextViewLayer {
  export const $gtype: GObject.GType<TextViewLayer>;
}

export enum TextViewLayer {
  BELOW_TEXT = 0,
  ABOVE_TEXT = 1,
}

export namespace TextWindowType {
  export const $gtype: GObject.GType<TextWindowType>;
}

export enum TextWindowType {
  WIDGET = 1,
  TEXT = 2,
  LEFT = 3,
  RIGHT = 4,
  TOP = 5,
  BOTTOM = 6,
}

export namespace TreeViewColumnSizing {
  export const $gtype: GObject.GType<TreeViewColumnSizing>;
}

export enum TreeViewColumnSizing {
  GROW_ONLY = 0,
  AUTOSIZE = 1,
  FIXED = 2,
}

export namespace TreeViewDropPosition {
  export const $gtype: GObject.GType<TreeViewDropPosition>;
}

export enum TreeViewDropPosition {
  BEFORE = 0,
  AFTER = 1,
  INTO_OR_BEFORE = 2,
  INTO_OR_AFTER = 3,
}

export namespace TreeViewGridLines {
  export const $gtype: GObject.GType<TreeViewGridLines>;
}

export enum TreeViewGridLines {
  NONE = 0,
  HORIZONTAL = 1,
  VERTICAL = 2,
  BOTH = 3,
}

export namespace Unit {
  export const $gtype: GObject.GType<Unit>;
}

export enum Unit {
  NONE = 0,
  POINTS = 1,
  INCH = 2,
  MM = 3,
}

export namespace WrapMode {
  export const $gtype: GObject.GType<WrapMode>;
}

export enum WrapMode {
  NONE = 0,
  CHAR = 1,
  WORD = 2,
  WORD_CHAR = 3,
}

export namespace ApplicationInhibitFlags {
  export const $gtype: GObject.GType<ApplicationInhibitFlags>;
}

export enum ApplicationInhibitFlags {
  LOGOUT = 1,
  SWITCH = 2,
  SUSPEND = 4,
  IDLE = 8,
}

export namespace BuilderClosureFlags {
  export const $gtype: GObject.GType<BuilderClosureFlags>;
}

export enum BuilderClosureFlags {
  SWAPPED = 1,
}

export namespace CellRendererState {
  export const $gtype: GObject.GType<CellRendererState>;
}

export enum CellRendererState {
  SELECTED = 1,
  PRELIT = 2,
  INSENSITIVE = 4,
  SORTED = 8,
  FOCUSED = 16,
  EXPANDABLE = 32,
  EXPANDED = 64,
}

export namespace DebugFlags {
  export const $gtype: GObject.GType<DebugFlags>;
}

export enum DebugFlags {
  TEXT = 1,
  TREE = 2,
  KEYBINDINGS = 4,
  MODULES = 8,
  GEOMETRY = 16,
  ICONTHEME = 32,
  PRINTING = 64,
  BUILDER = 128,
  SIZE_REQUEST = 256,
  NO_CSS_CACHE = 512,
  INTERACTIVE = 1024,
  TOUCHSCREEN = 2048,
  ACTIONS = 4096,
  LAYOUT = 8192,
  SNAPSHOT = 16384,
  CONSTRAINTS = 32768,
  BUILDER_OBJECTS = 65536,
  A11Y = 131072,
  ICONFALLBACK = 262144,
  INVERT_TEXT_DIR = 524288,
}

export namespace DialogFlags {
  export const $gtype: GObject.GType<DialogFlags>;
}

export enum DialogFlags {
  MODAL = 1,
  DESTROY_WITH_PARENT = 2,
  USE_HEADER_BAR = 4,
}

export namespace EventControllerScrollFlags {
  export const $gtype: GObject.GType<EventControllerScrollFlags>;
}

export enum EventControllerScrollFlags {
  NONE = 0,
  VERTICAL = 1,
  HORIZONTAL = 2,
  DISCRETE = 4,
  KINETIC = 8,
  BOTH_AXES = 3,
}

export namespace FontChooserLevel {
  export const $gtype: GObject.GType<FontChooserLevel>;
}

export enum FontChooserLevel {
  FAMILY = 0,
  STYLE = 1,
  SIZE = 2,
  VARIATIONS = 4,
  FEATURES = 8,
}

export namespace IconLookupFlags {
  export const $gtype: GObject.GType<IconLookupFlags>;
}

export enum IconLookupFlags {
  FORCE_REGULAR = 1,
  FORCE_SYMBOLIC = 2,
  PRELOAD = 4,
}

export namespace InputHints {
  export const $gtype: GObject.GType<InputHints>;
}

export enum InputHints {
  NONE = 0,
  SPELLCHECK = 1,
  NO_SPELLCHECK = 2,
  WORD_COMPLETION = 4,
  LOWERCASE = 8,
  UPPERCASE_CHARS = 16,
  UPPERCASE_WORDS = 32,
  UPPERCASE_SENTENCES = 64,
  INHIBIT_OSK = 128,
  VERTICAL_WRITING = 256,
  EMOJI = 512,
  NO_EMOJI = 1024,
  PRIVATE = 2048,
}

export namespace PickFlags {
  export const $gtype: GObject.GType<PickFlags>;
}

export enum PickFlags {
  DEFAULT = 0,
  INSENSITIVE = 1,
  NON_TARGETABLE = 2,
}

export namespace PopoverMenuFlags {
  export const $gtype: GObject.GType<PopoverMenuFlags>;
}

export enum PopoverMenuFlags {
  NESTED = 1,
}

export namespace PrintCapabilities {
  export const $gtype: GObject.GType<PrintCapabilities>;
}

export enum PrintCapabilities {
  PAGE_SET = 1,
  COPIES = 2,
  COLLATE = 4,
  REVERSE = 8,
  SCALE = 16,
  GENERATE_PDF = 32,
  GENERATE_PS = 64,
  PREVIEW = 128,
  NUMBER_UP = 256,
  NUMBER_UP_LAYOUT = 512,
}

export namespace ShortcutActionFlags {
  export const $gtype: GObject.GType<ShortcutActionFlags>;
}

export enum ShortcutActionFlags {
  EXCLUSIVE = 1,
}

export namespace StateFlags {
  export const $gtype: GObject.GType<StateFlags>;
}

export enum StateFlags {
  NORMAL = 0,
  ACTIVE = 1,
  PRELIGHT = 2,
  SELECTED = 4,
  INSENSITIVE = 8,
  INCONSISTENT = 16,
  FOCUSED = 32,
  BACKDROP = 64,
  DIR_LTR = 128,
  DIR_RTL = 256,
  LINK = 512,
  VISITED = 1024,
  CHECKED = 2048,
  DROP_ACTIVE = 4096,
  FOCUS_VISIBLE = 8192,
  FOCUS_WITHIN = 16384,
}

export namespace StyleContextPrintFlags {
  export const $gtype: GObject.GType<StyleContextPrintFlags>;
}

export enum StyleContextPrintFlags {
  NONE = 0,
  RECURSE = 1,
  SHOW_STYLE = 2,
  SHOW_CHANGE = 4,
}

export namespace TextSearchFlags {
  export const $gtype: GObject.GType<TextSearchFlags>;
}

export enum TextSearchFlags {
  VISIBLE_ONLY = 1,
  TEXT_ONLY = 2,
  CASE_INSENSITIVE = 4,
}

export namespace TreeModelFlags {
  export const $gtype: GObject.GType<TreeModelFlags>;
}

export enum TreeModelFlags {
  ITERS_PERSIST = 1,
  LIST_ONLY = 2,
}
export module ATContext {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    accessible: Accessible;
    accessible_role: AccessibleRole;
    display: Gdk.Display;
  }
}
export abstract class ATContext extends GObject.Object {
  static $gtype: GObject.GType<ATContext>;

  constructor(
    properties?: Partial<ATContext.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ATContext.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accessible(): Accessible;
  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get display(): Gdk.Display;
  set display(val: Gdk.Display);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "state-change", callback: (_source: this) => void): number;
  connect_after(
    signal: "state-change",
    callback: (_source: this) => void
  ): number;
  emit(signal: "state-change"): void;

  // Constructors

  static create(
    accessible_role: AccessibleRole,
    accessible: Accessible,
    display: Gdk.Display
  ): ATContext;

  // Members

  get_accessible(): Accessible;
  get_accessible_role(): AccessibleRole;
}
export module AboutDialog {
  export interface ConstructorProperties extends Window.ConstructorProperties {
    [key: string]: any;
    artists: string[];
    authors: string[];
    comments: string;
    copyright: string;
    documenters: string[];
    license: string;
    license_type: License;
    logo: Gdk.Paintable;
    logo_icon_name: string;
    program_name: string;
    system_information: string;
    translator_credits: string;
    version: string;
    website: string;
    website_label: string;
    wrap_license: boolean;
  }
}
export class AboutDialog
  extends Window
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<AboutDialog>;

  constructor(
    properties?: Partial<AboutDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AboutDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get artists(): string[];
  set artists(val: string[]);
  get authors(): string[];
  set authors(val: string[]);
  get comments(): string;
  set comments(val: string);
  get copyright(): string;
  set copyright(val: string);
  get documenters(): string[];
  set documenters(val: string[]);
  get license(): string;
  set license(val: string);
  get license_type(): License;
  set license_type(val: License);
  get logo(): Gdk.Paintable;
  set logo(val: Gdk.Paintable);
  get logo_icon_name(): string;
  set logo_icon_name(val: string);
  get program_name(): string;
  set program_name(val: string);
  get system_information(): string;
  set system_information(val: string);
  get translator_credits(): string;
  set translator_credits(val: string);
  get version(): string;
  set version(val: string);
  get website(): string;
  set website(val: string);
  get website_label(): string;
  set website_label(val: string);
  get wrap_license(): boolean;
  set wrap_license(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-link",
    callback: (_source: this, uri: string) => boolean
  ): number;
  connect_after(
    signal: "activate-link",
    callback: (_source: this, uri: string) => boolean
  ): number;
  emit(signal: "activate-link", uri: string): void;

  // Constructors

  static ["new"](): AboutDialog;

  // Members

  add_credit_section(section_name: string, people: string[]): void;
  get_artists(): string[];
  get_authors(): string[];
  get_comments(): string | null;
  get_copyright(): string | null;
  get_documenters(): string[];
  get_license(): string | null;
  get_license_type(): License;
  get_logo(): Gdk.Paintable | null;
  get_logo_icon_name(): string | null;
  get_program_name(): string | null;
  get_system_information(): string | null;
  get_translator_credits(): string | null;
  get_version(): string | null;
  get_website(): string | null;
  get_website_label(): string | null;
  get_wrap_license(): boolean;
  set_artists(artists: string[]): void;
  set_authors(authors: string[]): void;
  set_comments(comments?: string | null): void;
  set_copyright(copyright?: string | null): void;
  set_documenters(documenters: string[]): void;
  set_license(license?: string | null): void;
  set_license_type(license_type: License): void;
  set_logo(logo?: Gdk.Paintable | null): void;
  set_logo_icon_name(icon_name?: string | null): void;
  set_program_name(name?: string | null): void;
  set_system_information(system_information?: string | null): void;
  set_translator_credits(translator_credits?: string | null): void;
  set_version(version?: string | null): void;
  set_website(website?: string | null): void;
  set_website_label(website_label: string): void;
  set_wrap_license(wrap_license: boolean): void;

  // Implemented Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module ActionBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    revealed: boolean;
  }
}
export class ActionBar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ActionBar>;

  constructor(
    properties?: Partial<ActionBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ActionBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get revealed(): boolean;
  set revealed(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): ActionBar;

  // Members

  get_center_widget(): Widget | null;
  get_revealed(): boolean;
  pack_end(child: Widget): void;
  pack_start(child: Widget): void;
  remove(child: Widget): void;
  set_center_widget(center_widget?: Widget | null): void;
  set_revealed(revealed: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ActivateAction {
  export interface ConstructorProperties
    extends ShortcutAction.ConstructorProperties {
    [key: string]: any;
  }
}
export class ActivateAction extends ShortcutAction {
  static $gtype: GObject.GType<ActivateAction>;

  constructor(
    properties?: Partial<ActivateAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ActivateAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  static get(): ActivateAction;
}
export module Adjustment {
  export interface ConstructorProperties
    extends GObject.InitiallyUnowned.ConstructorProperties {
    [key: string]: any;
    lower: number;
    page_increment: number;
    page_size: number;
    step_increment: number;
    upper: number;
    value: number;
  }
}
export class Adjustment extends GObject.InitiallyUnowned {
  static $gtype: GObject.GType<Adjustment>;

  constructor(
    properties?: Partial<Adjustment.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Adjustment.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get lower(): number;
  set lower(val: number);
  get page_increment(): number;
  set page_increment(val: number);
  get page_size(): number;
  set page_size(val: number);
  get step_increment(): number;
  set step_increment(val: number);
  get upper(): number;
  set upper(val: number);
  get value(): number;
  set value(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;
  connect(signal: "value-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "value-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "value-changed"): void;

  // Constructors

  static ["new"](
    value: number,
    lower: number,
    upper: number,
    step_increment: number,
    page_increment: number,
    page_size: number
  ): Adjustment;

  // Members

  clamp_page(lower: number, upper: number): void;
  configure(
    value: number,
    lower: number,
    upper: number,
    step_increment: number,
    page_increment: number,
    page_size: number
  ): void;
  get_lower(): number;
  get_minimum_increment(): number;
  get_page_increment(): number;
  get_page_size(): number;
  get_step_increment(): number;
  get_upper(): number;
  get_value(): number;
  set_lower(lower: number): void;
  set_page_increment(page_increment: number): void;
  set_page_size(page_size: number): void;
  set_step_increment(step_increment: number): void;
  set_upper(upper: number): void;
  set_value(value: number): void;
  vfunc_changed(): void;
  vfunc_value_changed(): void;
}
export module AlertDialog {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    buttons: string[];
    cancel_button: number;
    default_button: number;
    detail: string;
    message: string;
    modal: boolean;
  }
}
export class AlertDialog extends GObject.Object {
  static $gtype: GObject.GType<AlertDialog>;

  constructor(
    properties?: Partial<AlertDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AlertDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get buttons(): string[];
  set buttons(val: string[]);
  get cancel_button(): number;
  set cancel_button(val: number);
  get default_button(): number;
  set default_button(val: number);
  get detail(): string;
  set detail(val: string);
  get message(): string;
  set message(val: string);
  get modal(): boolean;
  set modal(val: boolean);

  // Members

  choose(parent?: Window | null, cancellable?: Gio.Cancellable | null): void;
  choose_finish(result: Gio.AsyncResult): number;
  get_buttons(): string[] | null;
  get_cancel_button(): number;
  get_default_button(): number;
  get_detail(): string;
  get_message(): string;
  get_modal(): boolean;
  set_buttons(labels: string[]): void;
  set_cancel_button(button: number): void;
  set_default_button(button: number): void;
  set_detail(detail: string): void;
  set_message(message: string): void;
  set_modal(modal: boolean): void;
  show(parent?: Window | null): void;
}
export module AlternativeTrigger {
  export interface ConstructorProperties
    extends ShortcutTrigger.ConstructorProperties {
    [key: string]: any;
    first: ShortcutTrigger;
    second: ShortcutTrigger;
  }
}
export class AlternativeTrigger extends ShortcutTrigger {
  static $gtype: GObject.GType<AlternativeTrigger>;

  constructor(
    properties?: Partial<AlternativeTrigger.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AlternativeTrigger.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get first(): ShortcutTrigger;
  get second(): ShortcutTrigger;

  // Constructors

  static ["new"](
    first: ShortcutTrigger,
    second: ShortcutTrigger
  ): AlternativeTrigger;

  // Members

  get_first(): ShortcutTrigger;
  get_second(): ShortcutTrigger;
}
export module AnyFilter {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends MultiFilter.ConstructorProperties<A> {
    [key: string]: any;
  }
}
export class AnyFilter<A extends GObject.Object = GObject.Object>
  extends MultiFilter<A>
  implements Gio.ListModel<A>, Buildable
{
  static $gtype: GObject.GType<AnyFilter>;

  constructor(
    properties?: Partial<AnyFilter.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AnyFilter.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): AnyFilter;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module AppChooserButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    heading: string;
    modal: boolean;
    show_default_item: boolean;
    show_dialog_item: boolean;
  }
}
export class AppChooserButton
  extends Widget
  implements Accessible, AppChooser, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<AppChooserButton>;

  constructor(
    properties?: Partial<AppChooserButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AppChooserButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get heading(): string;
  set heading(val: string);
  get modal(): boolean;
  set modal(val: boolean);
  get show_default_item(): boolean;
  set show_default_item(val: boolean);
  get show_dialog_item(): boolean;
  set show_dialog_item(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;
  connect(
    signal: "custom-item-activated",
    callback: (_source: this, item_name: string) => void
  ): number;
  connect_after(
    signal: "custom-item-activated",
    callback: (_source: this, item_name: string) => void
  ): number;
  emit(signal: "custom-item-activated", item_name: string): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get content_type(): string;

  // Constructors

  static ["new"](content_type: string): AppChooserButton;

  // Members

  append_custom_item(name: string, label: string, icon: Gio.Icon): void;
  append_separator(): void;
  get_heading(): string | null;
  get_modal(): boolean;
  get_show_default_item(): boolean;
  get_show_dialog_item(): boolean;
  set_active_custom_item(name: string): void;
  set_heading(heading: string): void;
  set_modal(modal: boolean): void;
  set_show_default_item(setting: boolean): void;
  set_show_dialog_item(setting: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_app_info(): Gio.AppInfo | null;
  get_content_type(): string;
  refresh(): void;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module AppChooserDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
    gfile: Gio.File;
    heading: string;
  }
}
export class AppChooserDialog
  extends Dialog
  implements
    Accessible,
    AppChooser,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<AppChooserDialog>;

  constructor(
    properties?: Partial<AppChooserDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AppChooserDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get gfile(): Gio.File;
  get heading(): string;
  set heading(val: string);

  // Implemented Properties

  get content_type(): string;

  // Constructors

  static ["new"](
    parent: Window | null,
    flags: DialogFlags,
    file: Gio.File
  ): AppChooserDialog;
  // Conflicted with Gtk.Dialog.new
  static ["new"](...args: never[]): any;
  static new_for_content_type(
    parent: Window | null,
    flags: DialogFlags,
    content_type: string
  ): AppChooserDialog;

  // Members

  get_heading(): string | null;
  get_widget(): Widget;
  set_heading(heading: string): void;

  // Implemented Members

  get_app_info(): Gio.AppInfo | null;
  get_content_type(): string;
  refresh(): void;
}
export module AppChooserWidget {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    default_text: string;
    show_default: boolean;
    show_fallback: boolean;
    show_other: boolean;
    show_recommended: boolean;
  }
}
export class AppChooserWidget
  extends Widget
  implements Accessible, AppChooser, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<AppChooserWidget>;

  constructor(
    properties?: Partial<AppChooserWidget.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AppChooserWidget.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get default_text(): string;
  set default_text(val: string);
  get show_default(): boolean;
  set show_default(val: boolean);
  get show_fallback(): boolean;
  set show_fallback(val: boolean);
  get show_other(): boolean;
  set show_other(val: boolean);
  get show_recommended(): boolean;
  set show_recommended(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "application-activated",
    callback: (_source: this, application: Gio.AppInfo) => void
  ): number;
  connect_after(
    signal: "application-activated",
    callback: (_source: this, application: Gio.AppInfo) => void
  ): number;
  emit(signal: "application-activated", application: Gio.AppInfo): void;
  connect(
    signal: "application-selected",
    callback: (_source: this, application: Gio.AppInfo) => void
  ): number;
  connect_after(
    signal: "application-selected",
    callback: (_source: this, application: Gio.AppInfo) => void
  ): number;
  emit(signal: "application-selected", application: Gio.AppInfo): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get content_type(): string;

  // Constructors

  static ["new"](content_type: string): AppChooserWidget;

  // Members

  get_default_text(): string | null;
  get_show_all(): boolean;
  get_show_default(): boolean;
  get_show_fallback(): boolean;
  get_show_other(): boolean;
  get_show_recommended(): boolean;
  set_default_text(text: string): void;
  set_show_all(setting: boolean): void;
  set_show_default(setting: boolean): void;
  set_show_fallback(setting: boolean): void;
  set_show_other(setting: boolean): void;
  set_show_recommended(setting: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_app_info(): Gio.AppInfo | null;
  get_content_type(): string;
  refresh(): void;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Application {
  export interface ConstructorProperties
    extends Gio.Application.ConstructorProperties {
    [key: string]: any;
    active_window: Window;
    menubar: Gio.MenuModel;
    register_session: boolean;
    screensaver_active: boolean;
  }
}
export class Application
  extends Gio.Application
  implements Gio.ActionGroup, Gio.ActionMap
{
  static $gtype: GObject.GType<Application>;

  constructor(
    properties?: Partial<Application.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Application.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active_window(): Window;
  get menubar(): Gio.MenuModel;
  set menubar(val: Gio.MenuModel);
  get register_session(): boolean;
  set register_session(val: boolean);
  get screensaver_active(): boolean;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "query-end", callback: (_source: this) => void): number;
  connect_after(signal: "query-end", callback: (_source: this) => void): number;
  emit(signal: "query-end"): void;
  connect(
    signal: "window-added",
    callback: (_source: this, window: Window) => void
  ): number;
  connect_after(
    signal: "window-added",
    callback: (_source: this, window: Window) => void
  ): number;
  emit(signal: "window-added", window: Window): void;
  connect(
    signal: "window-removed",
    callback: (_source: this, window: Window) => void
  ): number;
  connect_after(
    signal: "window-removed",
    callback: (_source: this, window: Window) => void
  ): number;
  emit(signal: "window-removed", window: Window): void;

  // Constructors

  static ["new"](
    application_id: string | null,
    flags: Gio.ApplicationFlags
  ): Application;

  // Members

  add_window(window: Window): void;
  get_accels_for_action(detailed_action_name: string): string[];
  get_actions_for_accel(accel: string): string[];
  get_active_window(): Window | null;
  get_menu_by_id(id: string): Gio.Menu | null;
  get_menubar(): Gio.MenuModel | null;
  get_window_by_id(id: number): Window | null;
  get_windows(): Window[];
  inhibit(
    window: Window | null,
    flags: ApplicationInhibitFlags,
    reason?: string | null
  ): number;
  list_action_descriptions(): string[];
  remove_window(window: Window): void;
  set_accels_for_action(detailed_action_name: string, accels: string[]): void;
  set_menubar(menubar?: Gio.MenuModel | null): void;
  uninhibit(cookie: number): void;
  vfunc_window_added(window: Window): void;
  vfunc_window_removed(window: Window): void;

  // Implemented Members

  action_added(action_name: string): void;
  action_enabled_changed(action_name: string, enabled: boolean): void;
  action_removed(action_name: string): void;
  action_state_changed(action_name: string, state: GLib.Variant): void;
  activate_action(action_name: string, parameter?: GLib.Variant | null): void;
  change_action_state(action_name: string, value: GLib.Variant): void;
  get_action_enabled(action_name: string): boolean;
  get_action_parameter_type(action_name: string): GLib.VariantType | null;
  get_action_state(action_name: string): GLib.Variant | null;
  get_action_state_hint(action_name: string): GLib.Variant | null;
  get_action_state_type(action_name: string): GLib.VariantType | null;
  has_action(action_name: string): boolean;
  list_actions(): string[];
  query_action(
    action_name: string
  ): [
    boolean,
    boolean,
    GLib.VariantType | null,
    GLib.VariantType | null,
    GLib.Variant | null,
    GLib.Variant | null
  ];
  vfunc_action_added(action_name: string): void;
  vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
  vfunc_action_removed(action_name: string): void;
  vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
  vfunc_activate_action(
    action_name: string,
    parameter?: GLib.Variant | null
  ): void;
  vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
  vfunc_get_action_enabled(action_name: string): boolean;
  vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
  vfunc_get_action_state(action_name: string): GLib.Variant | null;
  vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
  vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
  vfunc_has_action(action_name: string): boolean;
  vfunc_list_actions(): string[];
  vfunc_query_action(
    action_name: string
  ): [
    boolean,
    boolean,
    GLib.VariantType | null,
    GLib.VariantType | null,
    GLib.Variant | null,
    GLib.Variant | null
  ];
  add_action(action: Gio.Action): void;
  add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;
  lookup_action(action_name: string): Gio.Action | null;
  remove_action(action_name: string): void;
  vfunc_add_action(action: Gio.Action): void;
  vfunc_lookup_action(action_name: string): Gio.Action | null;
  vfunc_remove_action(action_name: string): void;
}
export module ApplicationWindow {
  export interface ConstructorProperties extends Window.ConstructorProperties {
    [key: string]: any;
    show_menubar: boolean;
  }
}
export class ApplicationWindow
  extends Window
  implements
    Gio.ActionGroup,
    Gio.ActionMap,
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<ApplicationWindow>;

  constructor(
    properties?: Partial<ApplicationWindow.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ApplicationWindow.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get show_menubar(): boolean;
  set show_menubar(val: boolean);

  // Constructors

  static ["new"](application: Application): ApplicationWindow;
  // Conflicted with Gtk.Window.new
  static ["new"](...args: never[]): any;

  // Members

  get_help_overlay(): ShortcutsWindow | null;
  get_id(): number;
  get_show_menubar(): boolean;
  set_help_overlay(help_overlay?: ShortcutsWindow | null): void;
  set_show_menubar(show_menubar: boolean): void;

  // Implemented Members

  action_added(action_name: string): void;
  action_enabled_changed(action_name: string, enabled: boolean): void;
  action_removed(action_name: string): void;
  action_state_changed(action_name: string, state: GLib.Variant): void;
  activate_action(action_name: string, parameter?: GLib.Variant | null): void;
  // Conflicted with Gtk.Widget.activate_action
  activate_action(...args: never[]): any;
  change_action_state(action_name: string, value: GLib.Variant): void;
  get_action_enabled(action_name: string): boolean;
  get_action_parameter_type(action_name: string): GLib.VariantType | null;
  get_action_state(action_name: string): GLib.Variant | null;
  get_action_state_hint(action_name: string): GLib.Variant | null;
  get_action_state_type(action_name: string): GLib.VariantType | null;
  has_action(action_name: string): boolean;
  list_actions(): string[];
  query_action(
    action_name: string
  ): [
    boolean,
    boolean,
    GLib.VariantType | null,
    GLib.VariantType | null,
    GLib.Variant | null,
    GLib.Variant | null
  ];
  vfunc_action_added(action_name: string): void;
  vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
  vfunc_action_removed(action_name: string): void;
  vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
  vfunc_activate_action(
    action_name: string,
    parameter?: GLib.Variant | null
  ): void;
  vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
  vfunc_get_action_enabled(action_name: string): boolean;
  vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
  vfunc_get_action_state(action_name: string): GLib.Variant | null;
  vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
  vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
  vfunc_has_action(action_name: string): boolean;
  vfunc_list_actions(): string[];
  vfunc_query_action(
    action_name: string
  ): [
    boolean,
    boolean,
    GLib.VariantType | null,
    GLib.VariantType | null,
    GLib.Variant | null,
    GLib.Variant | null
  ];
  add_action(action: Gio.Action): void;
  add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;
  lookup_action(action_name: string): Gio.Action | null;
  remove_action(action_name: string): void;
  vfunc_add_action(action: Gio.Action): void;
  vfunc_lookup_action(action_name: string): Gio.Action | null;
  vfunc_remove_action(action_name: string): void;
  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module AspectFrame {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    obey_child: boolean;
    ratio: number;
    xalign: number;
    yalign: number;
  }
}
export class AspectFrame
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<AspectFrame>;

  constructor(
    properties?: Partial<AspectFrame.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AspectFrame.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get obey_child(): boolean;
  set obey_child(val: boolean);
  get ratio(): number;
  set ratio(val: number);
  get xalign(): number;
  set xalign(val: number);
  get yalign(): number;
  set yalign(val: number);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](
    xalign: number,
    yalign: number,
    ratio: number,
    obey_child: boolean
  ): AspectFrame;

  // Members

  get_child(): Widget | null;
  get_obey_child(): boolean;
  get_ratio(): number;
  get_xalign(): number;
  get_yalign(): number;
  set_child(child?: Widget | null): void;
  set_obey_child(obey_child: boolean): void;
  set_ratio(ratio: number): void;
  set_xalign(xalign: number): void;
  set_yalign(yalign: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Assistant {
  export interface ConstructorProperties extends Window.ConstructorProperties {
    [key: string]: any;
    pages: Gio.ListModel;
    use_header_bar: number;
  }
}
export class Assistant
  extends Window
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<Assistant>;

  constructor(
    properties?: Partial<Assistant.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Assistant.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get pages(): Gio.ListModel;
  get use_header_bar(): number;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "apply", callback: (_source: this) => void): number;
  connect_after(signal: "apply", callback: (_source: this) => void): number;
  emit(signal: "apply"): void;
  connect(signal: "cancel", callback: (_source: this) => void): number;
  connect_after(signal: "cancel", callback: (_source: this) => void): number;
  emit(signal: "cancel"): void;
  connect(signal: "close", callback: (_source: this) => void): number;
  connect_after(signal: "close", callback: (_source: this) => void): number;
  emit(signal: "close"): void;
  connect(signal: "escape", callback: (_source: this) => void): number;
  connect_after(signal: "escape", callback: (_source: this) => void): number;
  emit(signal: "escape"): void;
  connect(
    signal: "prepare",
    callback: (_source: this, page: Widget) => void
  ): number;
  connect_after(
    signal: "prepare",
    callback: (_source: this, page: Widget) => void
  ): number;
  emit(signal: "prepare", page: Widget): void;

  // Constructors

  static ["new"](): Assistant;

  // Members

  add_action_widget(child: Widget): void;
  append_page(page: Widget): number;
  commit(): void;
  get_current_page(): number;
  get_n_pages(): number;
  get_nth_page(page_num: number): Widget | null;
  get_page(child: Widget): AssistantPage;
  get_page_complete(page: Widget): boolean;
  get_page_title(page: Widget): string;
  get_page_type(page: Widget): AssistantPageType;
  get_pages(): Gio.ListModel;
  insert_page(page: Widget, position: number): number;
  next_page(): void;
  prepend_page(page: Widget): number;
  previous_page(): void;
  remove_action_widget(child: Widget): void;
  remove_page(page_num: number): void;
  set_current_page(page_num: number): void;
  set_forward_page_func(page_func?: AssistantPageFunc | null): void;
  set_page_complete(page: Widget, complete: boolean): void;
  set_page_title(page: Widget, title: string): void;
  set_page_type(page: Widget, type: AssistantPageType): void;
  update_buttons_state(): void;

  // Implemented Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module AssistantPage {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    complete: boolean;
    page_type: AssistantPageType;
    title: string;
  }
}
export class AssistantPage extends GObject.Object {
  static $gtype: GObject.GType<AssistantPage>;

  constructor(
    properties?: Partial<AssistantPage.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<AssistantPage.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  get complete(): boolean;
  set complete(val: boolean);
  get page_type(): AssistantPageType;
  set page_type(val: AssistantPageType);
  get title(): string;
  set title(val: string);

  // Members

  get_child(): Widget;
}
export module BinLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
  }
}
export class BinLayout extends LayoutManager {
  static $gtype: GObject.GType<BinLayout>;

  constructor(
    properties?: Partial<BinLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<BinLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): BinLayout;
}
export module BookmarkList {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    attributes: string;
    filename: string;
    io_priority: number;
    item_type: GObject.GType;
    loading: boolean;
    n_items: number;
  }
}
export class BookmarkList<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<BookmarkList>;

  constructor(
    properties?: Partial<BookmarkList.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<BookmarkList.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get attributes(): string;
  set attributes(val: string);
  get filename(): string;
  get io_priority(): number;
  set io_priority(val: number);
  get item_type(): GObject.GType;
  get loading(): boolean;
  get n_items(): number;

  // Constructors

  static ["new"](
    filename?: string | null,
    attributes?: string | null
  ): BookmarkList;

  // Members

  get_attributes(): string | null;
  get_filename(): string;
  get_io_priority(): number;
  is_loading(): boolean;
  set_attributes(attributes?: string | null): void;
  set_io_priority(io_priority: number): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module BoolFilter {
  export interface ConstructorProperties extends Filter.ConstructorProperties {
    [key: string]: any;
    expression: Expression;
    invert: boolean;
  }
}
export class BoolFilter extends Filter {
  static $gtype: GObject.GType<BoolFilter>;

  constructor(
    properties?: Partial<BoolFilter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<BoolFilter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get expression(): Expression;
  set expression(val: Expression);
  get invert(): boolean;
  set invert(val: boolean);

  // Constructors

  static ["new"](expression?: Expression | null): BoolFilter;

  // Members

  get_expression(): Expression | null;
  get_invert(): boolean;
  set_expression(expression?: Expression | null): void;
  set_invert(invert: boolean): void;
}
export module Box {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    baseline_position: BaselinePosition;
    homogeneous: boolean;
    spacing: number;
  }
}
export class Box
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<Box>;

  constructor(properties?: Partial<Box.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Box.ConstructorProperties>, ...args: any[]): void;

  // Properties
  get baseline_position(): BaselinePosition;
  set baseline_position(val: BaselinePosition);
  get homogeneous(): boolean;
  set homogeneous(val: boolean);
  get spacing(): number;
  set spacing(val: number);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](orientation: Orientation, spacing: number): Box;

  // Members

  append(child: Widget): void;
  get_baseline_position(): BaselinePosition;
  get_homogeneous(): boolean;
  get_spacing(): number;
  insert_child_after(child: Widget, sibling?: Widget | null): void;
  prepend(child: Widget): void;
  remove(child: Widget): void;
  reorder_child_after(child: Widget, sibling?: Widget | null): void;
  set_baseline_position(position: BaselinePosition): void;
  set_homogeneous(homogeneous: boolean): void;
  set_spacing(spacing: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module BoxLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
    baseline_position: BaselinePosition;
    homogeneous: boolean;
    spacing: number;
  }
}
export class BoxLayout extends LayoutManager implements Orientable {
  static $gtype: GObject.GType<BoxLayout>;

  constructor(
    properties?: Partial<BoxLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<BoxLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get baseline_position(): BaselinePosition;
  set baseline_position(val: BaselinePosition);
  get homogeneous(): boolean;
  set homogeneous(val: boolean);
  get spacing(): number;
  set spacing(val: number);

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](orientation: Orientation): BoxLayout;

  // Members

  get_baseline_position(): BaselinePosition;
  get_homogeneous(): boolean;
  get_spacing(): number;
  set_baseline_position(position: BaselinePosition): void;
  set_homogeneous(homogeneous: boolean): void;
  set_spacing(spacing: number): void;

  // Implemented Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module Builder {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    current_object: GObject.Object;
    scope: BuilderScope;
    translation_domain: string;
  }
}
export class Builder extends GObject.Object {
  static $gtype: GObject.GType<Builder>;

  constructor(
    properties?: Partial<Builder.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Builder.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get current_object(): GObject.Object;
  set current_object(val: GObject.Object);
  get scope(): BuilderScope;
  set scope(val: BuilderScope);
  get translation_domain(): string;
  set translation_domain(val: string);

  // Constructors

  static ["new"](): Builder;
  static new_from_file(filename: string): Builder;
  static new_from_resource(resource_path: string): Builder;
  static new_from_string(string: string, length: number): Builder;

  // Members

  add_from_file(filename: string): boolean;
  add_from_resource(resource_path: string): boolean;
  add_from_string(buffer: string, length: number): boolean;
  add_objects_from_file(filename: string, object_ids: string[]): boolean;
  add_objects_from_resource(
    resource_path: string,
    object_ids: string[]
  ): boolean;
  add_objects_from_string(
    buffer: string,
    length: number,
    object_ids: string[]
  ): boolean;
  create_closure(
    function_name: string,
    flags: BuilderClosureFlags,
    object?: GObject.Object | null
  ): GObject.Closure | null;
  expose_object(name: string, object: GObject.Object): void;
  extend_with_template(
    object: GObject.Object,
    template_type: GObject.GType,
    buffer: string,
    length: number
  ): boolean;
  get_current_object<T = GObject.Object>(): T;
  get_object<T = GObject.Object>(name: string): T;
  get_objects(): GObject.Object[];
  get_scope(): BuilderScope;
  get_translation_domain(): string | null;
  get_type_from_name(type_name: string): GObject.GType;
  set_current_object(current_object?: GObject.Object | null): void;
  set_scope(scope?: BuilderScope | null): void;
  set_translation_domain(domain?: string | null): void;
  value_from_string(
    pspec: GObject.ParamSpec,
    string: string
  ): [boolean, unknown];
  value_from_string_type(
    type: GObject.GType,
    string: string
  ): [boolean, unknown];
}
export module BuilderCScope {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class BuilderCScope extends GObject.Object implements BuilderScope {
  static $gtype: GObject.GType<BuilderCScope>;

  constructor(
    properties?: Partial<BuilderCScope.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<BuilderCScope.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): BuilderCScope;

  // Members

  add_callback_symbol(
    callback_name: string,
    callback_symbol: GObject.Callback
  ): void;

  // Implemented Members

  vfunc_create_closure(
    builder: Builder,
    function_name: string,
    flags: BuilderClosureFlags,
    object: GObject.Object
  ): GObject.Closure;
  vfunc_get_type_from_function(
    builder: Builder,
    function_name: string
  ): GObject.GType;
  vfunc_get_type_from_name(builder: Builder, type_name: string): GObject.GType;
}
export module BuilderListItemFactory {
  export interface ConstructorProperties
    extends ListItemFactory.ConstructorProperties {
    [key: string]: any;
    bytes: GLib.Bytes;
    resource: string;
    scope: BuilderScope;
  }
}
export class BuilderListItemFactory extends ListItemFactory {
  static $gtype: GObject.GType<BuilderListItemFactory>;

  constructor(
    properties?: Partial<BuilderListItemFactory.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<BuilderListItemFactory.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get bytes(): GLib.Bytes;
  get resource(): string;
  get scope(): BuilderScope;

  // Constructors

  static new_from_bytes(
    scope: BuilderScope | null,
    bytes: GLib.Bytes | Uint8Array
  ): BuilderListItemFactory;
  static new_from_resource(
    scope: BuilderScope | null,
    resource_path: string
  ): BuilderListItemFactory;

  // Members

  get_bytes(): GLib.Bytes;
  get_resource(): string | null;
  get_scope(): BuilderScope | null;
}
export module Button {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    has_frame: boolean;
    icon_name: string;
    label: string;
    use_underline: boolean;
  }
}
export class Button
  extends Widget
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Button>;

  constructor(
    properties?: Partial<Button.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Button.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get has_frame(): boolean;
  set has_frame(val: boolean);
  get icon_name(): string;
  set icon_name(val: string);
  get label(): string;
  set label(val: string);
  get use_underline(): boolean;
  set use_underline(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "clicked", callback: (_source: this) => void): number;
  connect_after(signal: "clicked", callback: (_source: this) => void): number;
  emit(signal: "clicked"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](): Button;
  static new_from_icon_name(icon_name: string): Button;
  static new_with_label(label: string): Button;
  static new_with_mnemonic(label: string): Button;

  // Members

  get_child(): Widget | null;
  get_has_frame(): boolean;
  get_icon_name(): string | null;
  get_label(): string | null;
  get_use_underline(): boolean;
  set_child(child?: Widget | null): void;
  set_has_frame(has_frame: boolean): void;
  set_icon_name(icon_name: string): void;
  set_label(label: string): void;
  set_use_underline(use_underline: boolean): void;
  vfunc_activate(): void;
  vfunc_clicked(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module CClosureExpression {
  export interface ConstructorProperties
    extends Expression.ConstructorProperties {
    [key: string]: any;
  }
}
export class CClosureExpression extends Expression {
  static $gtype: GObject.GType<CClosureExpression>;

  constructor(
    properties?: Partial<CClosureExpression.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CClosureExpression.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](
    value_type: GObject.GType,
    marshal: GObject.ClosureMarshal | null,
    params: Expression[],
    callback_func: GObject.Callback,
    user_destroy?: GObject.ClosureNotify | null
  ): CClosureExpression;
}
export module Calendar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    day: number;
    month: number;
    show_day_names: boolean;
    show_heading: boolean;
    show_week_numbers: boolean;
    year: number;
  }
}
export class Calendar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Calendar>;

  constructor(
    properties?: Partial<Calendar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Calendar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get day(): number;
  set day(val: number);
  get month(): number;
  set month(val: number);
  get show_day_names(): boolean;
  set show_day_names(val: boolean);
  get show_heading(): boolean;
  set show_heading(val: boolean);
  get show_week_numbers(): boolean;
  set show_week_numbers(val: boolean);
  get year(): number;
  set year(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "day-selected", callback: (_source: this) => void): number;
  connect_after(
    signal: "day-selected",
    callback: (_source: this) => void
  ): number;
  emit(signal: "day-selected"): void;
  connect(signal: "next-month", callback: (_source: this) => void): number;
  connect_after(
    signal: "next-month",
    callback: (_source: this) => void
  ): number;
  emit(signal: "next-month"): void;
  connect(signal: "next-year", callback: (_source: this) => void): number;
  connect_after(signal: "next-year", callback: (_source: this) => void): number;
  emit(signal: "next-year"): void;
  connect(signal: "prev-month", callback: (_source: this) => void): number;
  connect_after(
    signal: "prev-month",
    callback: (_source: this) => void
  ): number;
  emit(signal: "prev-month"): void;
  connect(signal: "prev-year", callback: (_source: this) => void): number;
  connect_after(signal: "prev-year", callback: (_source: this) => void): number;
  emit(signal: "prev-year"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Calendar;

  // Members

  clear_marks(): void;
  get_date(): GLib.DateTime;
  get_day_is_marked(day: number): boolean;
  get_show_day_names(): boolean;
  get_show_heading(): boolean;
  get_show_week_numbers(): boolean;
  mark_day(day: number): void;
  select_day(date: GLib.DateTime): void;
  set_show_day_names(value: boolean): void;
  set_show_heading(value: boolean): void;
  set_show_week_numbers(value: boolean): void;
  unmark_day(day: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module CallbackAction {
  export interface ConstructorProperties
    extends ShortcutAction.ConstructorProperties {
    [key: string]: any;
  }
}
export class CallbackAction extends ShortcutAction {
  static $gtype: GObject.GType<CallbackAction>;

  constructor(
    properties?: Partial<CallbackAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CallbackAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): CallbackAction;
}
export module CellArea {
  export interface ConstructorProperties
    extends GObject.InitiallyUnowned.ConstructorProperties {
    [key: string]: any;
    edit_widget: CellEditable;
    edited_cell: CellRenderer;
    focus_cell: CellRenderer;
  }
}
export abstract class CellArea
  extends GObject.InitiallyUnowned
  implements Buildable, CellLayout
{
  static $gtype: GObject.GType<CellArea>;

  constructor(
    properties?: Partial<CellArea.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellArea.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get edit_widget(): CellEditable;
  get edited_cell(): CellRenderer;
  get focus_cell(): CellRenderer;
  set focus_cell(val: CellRenderer);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "add-editable",
    callback: (
      _source: this,
      renderer: CellRenderer,
      editable: CellEditable,
      cell_area: Gdk.Rectangle,
      path: string
    ) => void
  ): number;
  connect_after(
    signal: "add-editable",
    callback: (
      _source: this,
      renderer: CellRenderer,
      editable: CellEditable,
      cell_area: Gdk.Rectangle,
      path: string
    ) => void
  ): number;
  emit(
    signal: "add-editable",
    renderer: CellRenderer,
    editable: CellEditable,
    cell_area: Gdk.Rectangle,
    path: string
  ): void;
  connect(
    signal: "apply-attributes",
    callback: (
      _source: this,
      model: TreeModel,
      iter: TreeIter,
      is_expander: boolean,
      is_expanded: boolean
    ) => void
  ): number;
  connect_after(
    signal: "apply-attributes",
    callback: (
      _source: this,
      model: TreeModel,
      iter: TreeIter,
      is_expander: boolean,
      is_expanded: boolean
    ) => void
  ): number;
  emit(
    signal: "apply-attributes",
    model: TreeModel,
    iter: TreeIter,
    is_expander: boolean,
    is_expanded: boolean
  ): void;
  connect(
    signal: "focus-changed",
    callback: (_source: this, renderer: CellRenderer, path: string) => void
  ): number;
  connect_after(
    signal: "focus-changed",
    callback: (_source: this, renderer: CellRenderer, path: string) => void
  ): number;
  emit(signal: "focus-changed", renderer: CellRenderer, path: string): void;
  connect(
    signal: "remove-editable",
    callback: (
      _source: this,
      renderer: CellRenderer,
      editable: CellEditable
    ) => void
  ): number;
  connect_after(
    signal: "remove-editable",
    callback: (
      _source: this,
      renderer: CellRenderer,
      editable: CellEditable
    ) => void
  ): number;
  emit(
    signal: "remove-editable",
    renderer: CellRenderer,
    editable: CellEditable
  ): void;

  // Members

  activate(
    context: CellAreaContext,
    widget: Widget,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState,
    edit_only: boolean
  ): boolean;
  activate_cell(
    widget: Widget,
    renderer: CellRenderer,
    event: Gdk.Event,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): boolean;
  add(renderer: CellRenderer): void;
  add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
  apply_attributes(
    tree_model: TreeModel,
    iter: TreeIter,
    is_expander: boolean,
    is_expanded: boolean
  ): void;
  attribute_connect(
    renderer: CellRenderer,
    attribute: string,
    column: number
  ): void;
  attribute_disconnect(renderer: CellRenderer, attribute: string): void;
  attribute_get_column(renderer: CellRenderer, attribute: string): number;
  cell_get_property(
    renderer: CellRenderer,
    property_name: string,
    value: GObject.Value | any
  ): void;
  cell_set_property(
    renderer: CellRenderer,
    property_name: string,
    value: GObject.Value | any
  ): void;
  copy_context(context: CellAreaContext): CellAreaContext;
  create_context(): CellAreaContext;
  event(
    context: CellAreaContext,
    widget: Widget,
    event: Gdk.Event,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): number;
  focus(direction: DirectionType): boolean;
  foreach(callback: CellCallback): void;
  foreach_alloc(
    context: CellAreaContext,
    widget: Widget,
    cell_area: Gdk.Rectangle,
    background_area: Gdk.Rectangle,
    callback: CellAllocCallback
  ): void;
  get_cell_allocation(
    context: CellAreaContext,
    widget: Widget,
    renderer: CellRenderer,
    cell_area: Gdk.Rectangle
  ): Gdk.Rectangle;
  get_cell_at_position(
    context: CellAreaContext,
    widget: Widget,
    cell_area: Gdk.Rectangle,
    x: number,
    y: number
  ): [CellRenderer, Gdk.Rectangle | null];
  get_current_path_string(): string;
  get_edit_widget(): CellEditable | null;
  get_edited_cell(): CellRenderer | null;
  get_focus_cell(): CellRenderer | null;
  get_focus_from_sibling(renderer: CellRenderer): CellRenderer | null;
  get_focus_siblings(renderer: CellRenderer): CellRenderer[];
  get_preferred_height(
    context: CellAreaContext,
    widget: Widget
  ): [number, number];
  get_preferred_height_for_width(
    context: CellAreaContext,
    widget: Widget,
    width: number
  ): [number, number];
  get_preferred_width(
    context: CellAreaContext,
    widget: Widget
  ): [number, number];
  get_preferred_width_for_height(
    context: CellAreaContext,
    widget: Widget,
    height: number
  ): [number, number];
  get_request_mode(): SizeRequestMode;
  has_renderer(renderer: CellRenderer): boolean;
  inner_cell_area(widget: Widget, cell_area: Gdk.Rectangle): Gdk.Rectangle;
  is_activatable(): boolean;
  is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): boolean;
  remove(renderer: CellRenderer): void;
  remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
  request_renderer(
    renderer: CellRenderer,
    orientation: Orientation,
    widget: Widget,
    for_size: number
  ): [number, number];
  set_focus_cell(renderer?: CellRenderer | null): void;
  snapshot(
    context: CellAreaContext,
    widget: Widget,
    snapshot: Snapshot,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState,
    paint_focus: boolean
  ): void;
  stop_editing(canceled: boolean): void;
  vfunc_activate(
    context: CellAreaContext,
    widget: Widget,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState,
    edit_only: boolean
  ): boolean;
  vfunc_add(renderer: CellRenderer): void;
  vfunc_apply_attributes(
    tree_model: TreeModel,
    iter: TreeIter,
    is_expander: boolean,
    is_expanded: boolean
  ): void;
  vfunc_copy_context(context: CellAreaContext): CellAreaContext;
  vfunc_create_context(): CellAreaContext;
  vfunc_event(
    context: CellAreaContext,
    widget: Widget,
    event: Gdk.Event,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): number;
  vfunc_focus(direction: DirectionType): boolean;
  vfunc_foreach(callback: CellCallback): void;
  vfunc_foreach_alloc(
    context: CellAreaContext,
    widget: Widget,
    cell_area: Gdk.Rectangle,
    background_area: Gdk.Rectangle,
    callback: CellAllocCallback
  ): void;
  vfunc_get_cell_property(
    renderer: CellRenderer,
    property_id: number,
    value: GObject.Value | any,
    pspec: GObject.ParamSpec
  ): void;
  vfunc_get_preferred_height(
    context: CellAreaContext,
    widget: Widget
  ): [number, number];
  vfunc_get_preferred_height_for_width(
    context: CellAreaContext,
    widget: Widget,
    width: number
  ): [number, number];
  vfunc_get_preferred_width(
    context: CellAreaContext,
    widget: Widget
  ): [number, number];
  vfunc_get_preferred_width_for_height(
    context: CellAreaContext,
    widget: Widget,
    height: number
  ): [number, number];
  vfunc_get_request_mode(): SizeRequestMode;
  vfunc_is_activatable(): boolean;
  vfunc_remove(renderer: CellRenderer): void;
  vfunc_set_cell_property(
    renderer: CellRenderer,
    property_id: number,
    value: GObject.Value | any,
    pspec: GObject.ParamSpec
  ): void;
  vfunc_snapshot(
    context: CellAreaContext,
    widget: Widget,
    snapshot: Snapshot,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState,
    paint_focus: boolean
  ): void;
  static find_cell_property(property_name: string): GObject.ParamSpec;
  static install_cell_property(
    property_id: number,
    pspec: GObject.ParamSpec
  ): void;
  static list_cell_properties(): GObject.ParamSpec[];

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
}
export module CellAreaBox {
  export interface ConstructorProperties
    extends CellArea.ConstructorProperties {
    [key: string]: any;
    spacing: number;
  }
}
export class CellAreaBox
  extends CellArea
  implements Buildable, CellLayout, Orientable
{
  static $gtype: GObject.GType<CellAreaBox>;

  constructor(
    properties?: Partial<CellAreaBox.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellAreaBox.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get spacing(): number;
  set spacing(val: number);

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): CellAreaBox;

  // Members

  get_spacing(): number;
  pack_end(
    renderer: CellRenderer,
    expand: boolean,
    align: boolean,
    fixed: boolean
  ): void;
  // Conflicted with Gtk.CellLayout.pack_end
  pack_end(...args: never[]): any;
  pack_start(
    renderer: CellRenderer,
    expand: boolean,
    align: boolean,
    fixed: boolean
  ): void;
  // Conflicted with Gtk.CellLayout.pack_start
  pack_start(...args: never[]): any;
  set_spacing(spacing: number): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module CellAreaContext {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    area: CellArea;
    minimum_height: number;
    minimum_width: number;
    natural_height: number;
    natural_width: number;
  }
}
export class CellAreaContext extends GObject.Object {
  static $gtype: GObject.GType<CellAreaContext>;

  constructor(
    properties?: Partial<CellAreaContext.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellAreaContext.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get area(): CellArea;
  get minimum_height(): number;
  get minimum_width(): number;
  get natural_height(): number;
  get natural_width(): number;

  // Members

  allocate(width: number, height: number): void;
  get_allocation(): [number, number];
  get_area(): CellArea;
  get_preferred_height(): [number, number];
  get_preferred_height_for_width(width: number): [number, number];
  get_preferred_width(): [number, number];
  get_preferred_width_for_height(height: number): [number, number];
  push_preferred_height(minimum_height: number, natural_height: number): void;
  push_preferred_width(minimum_width: number, natural_width: number): void;
  reset(): void;
  vfunc_allocate(width: number, height: number): void;
  vfunc_get_preferred_height_for_width(width: number): [number, number];
  vfunc_get_preferred_width_for_height(height: number): [number, number];
  vfunc_reset(): void;
}
export module CellRenderer {
  export interface ConstructorProperties
    extends GObject.InitiallyUnowned.ConstructorProperties {
    [key: string]: any;
    cell_background: string;
    cell_background_rgba: Gdk.RGBA;
    cell_background_set: boolean;
    editing: boolean;
    height: number;
    is_expanded: boolean;
    is_expander: boolean;
    mode: CellRendererMode;
    sensitive: boolean;
    visible: boolean;
    width: number;
    xalign: number;
    xpad: number;
    yalign: number;
    ypad: number;
  }
}
export abstract class CellRenderer extends GObject.InitiallyUnowned {
  static $gtype: GObject.GType<CellRenderer>;

  constructor(
    properties?: Partial<CellRenderer.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRenderer.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  set cell_background(val: string);
  get cell_background_rgba(): Gdk.RGBA;
  set cell_background_rgba(val: Gdk.RGBA);
  get cell_background_set(): boolean;
  set cell_background_set(val: boolean);
  get editing(): boolean;
  get height(): number;
  set height(val: number);
  get is_expanded(): boolean;
  set is_expanded(val: boolean);
  get is_expander(): boolean;
  set is_expander(val: boolean);
  get mode(): CellRendererMode;
  set mode(val: CellRendererMode);
  get sensitive(): boolean;
  set sensitive(val: boolean);
  get visible(): boolean;
  set visible(val: boolean);
  get width(): number;
  set width(val: number);
  get xalign(): number;
  set xalign(val: number);
  get xpad(): number;
  set xpad(val: number);
  get yalign(): number;
  set yalign(val: number);
  get ypad(): number;
  set ypad(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "editing-canceled",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "editing-canceled",
    callback: (_source: this) => void
  ): number;
  emit(signal: "editing-canceled"): void;
  connect(
    signal: "editing-started",
    callback: (_source: this, editable: CellEditable, path: string) => void
  ): number;
  connect_after(
    signal: "editing-started",
    callback: (_source: this, editable: CellEditable, path: string) => void
  ): number;
  emit(signal: "editing-started", editable: CellEditable, path: string): void;

  // Members

  activate(
    event: Gdk.Event,
    widget: Widget,
    path: string,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): boolean;
  get_aligned_area(
    widget: Widget,
    flags: CellRendererState,
    cell_area: Gdk.Rectangle
  ): Gdk.Rectangle;
  get_alignment(): [number, number];
  get_fixed_size(): [number, number];
  get_is_expanded(): boolean;
  get_is_expander(): boolean;
  get_padding(): [number, number];
  get_preferred_height(widget: Widget): [number, number];
  get_preferred_height_for_width(
    widget: Widget,
    width: number
  ): [number, number];
  get_preferred_size(widget: Widget): [Requisition | null, Requisition | null];
  get_preferred_width(widget: Widget): [number, number];
  get_preferred_width_for_height(
    widget: Widget,
    height: number
  ): [number, number];
  get_request_mode(): SizeRequestMode;
  get_sensitive(): boolean;
  get_state(widget: Widget | null, cell_state: CellRendererState): StateFlags;
  get_visible(): boolean;
  is_activatable(): boolean;
  set_alignment(xalign: number, yalign: number): void;
  set_fixed_size(width: number, height: number): void;
  set_is_expanded(is_expanded: boolean): void;
  set_is_expander(is_expander: boolean): void;
  set_padding(xpad: number, ypad: number): void;
  set_sensitive(sensitive: boolean): void;
  set_visible(visible: boolean): void;
  snapshot(
    snapshot: Snapshot,
    widget: Widget,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): void;
  start_editing(
    event: Gdk.Event | null,
    widget: Widget,
    path: string,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): CellEditable | null;
  stop_editing(canceled: boolean): void;
  vfunc_activate(
    event: Gdk.Event,
    widget: Widget,
    path: string,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): boolean;
  vfunc_editing_canceled(): void;
  vfunc_editing_started(editable: CellEditable, path: string): void;
  vfunc_get_aligned_area(
    widget: Widget,
    flags: CellRendererState,
    cell_area: Gdk.Rectangle
  ): Gdk.Rectangle;
  vfunc_get_preferred_height(widget: Widget): [number, number];
  vfunc_get_preferred_height_for_width(
    widget: Widget,
    width: number
  ): [number, number];
  vfunc_get_preferred_width(widget: Widget): [number, number];
  vfunc_get_preferred_width_for_height(
    widget: Widget,
    height: number
  ): [number, number];
  vfunc_get_request_mode(): SizeRequestMode;
  vfunc_snapshot(
    snapshot: Snapshot,
    widget: Widget,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): void;
  vfunc_start_editing(
    event: Gdk.Event | null,
    widget: Widget,
    path: string,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    flags: CellRendererState
  ): CellEditable | null;
}
export module CellRendererAccel {
  export interface ConstructorProperties
    extends CellRendererText.ConstructorProperties {
    [key: string]: any;
    accel_key: number;
    accel_mode: CellRendererAccelMode;
    accel_mods: Gdk.ModifierType;
    keycode: number;
  }
}
export class CellRendererAccel extends CellRendererText {
  static $gtype: GObject.GType<CellRendererAccel>;

  constructor(
    properties?: Partial<CellRendererAccel.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererAccel.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accel_key(): number;
  set accel_key(val: number);
  get accel_mode(): CellRendererAccelMode;
  set accel_mode(val: CellRendererAccelMode);
  get accel_mods(): Gdk.ModifierType;
  set accel_mods(val: Gdk.ModifierType);
  get keycode(): number;
  set keycode(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "accel-cleared",
    callback: (_source: this, path_string: string) => void
  ): number;
  connect_after(
    signal: "accel-cleared",
    callback: (_source: this, path_string: string) => void
  ): number;
  emit(signal: "accel-cleared", path_string: string): void;
  connect(
    signal: "accel-edited",
    callback: (
      _source: this,
      path_string: string,
      accel_key: number,
      accel_mods: Gdk.ModifierType,
      hardware_keycode: number
    ) => void
  ): number;
  connect_after(
    signal: "accel-edited",
    callback: (
      _source: this,
      path_string: string,
      accel_key: number,
      accel_mods: Gdk.ModifierType,
      hardware_keycode: number
    ) => void
  ): number;
  emit(
    signal: "accel-edited",
    path_string: string,
    accel_key: number,
    accel_mods: Gdk.ModifierType,
    hardware_keycode: number
  ): void;

  // Constructors

  static ["new"](): CellRendererAccel;
}
export module CellRendererCombo {
  export interface ConstructorProperties
    extends CellRendererText.ConstructorProperties {
    [key: string]: any;
    has_entry: boolean;
    model: TreeModel;
    text_column: number;
  }
}
export class CellRendererCombo extends CellRendererText {
  static $gtype: GObject.GType<CellRendererCombo>;

  constructor(
    properties?: Partial<CellRendererCombo.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererCombo.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get has_entry(): boolean;
  set has_entry(val: boolean);
  get model(): TreeModel;
  set model(val: TreeModel);
  get text_column(): number;
  set text_column(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "changed",
    callback: (_source: this, path_string: string, new_iter: TreeIter) => void
  ): number;
  connect_after(
    signal: "changed",
    callback: (_source: this, path_string: string, new_iter: TreeIter) => void
  ): number;
  emit(signal: "changed", path_string: string, new_iter: TreeIter): void;

  // Constructors

  static ["new"](): CellRendererCombo;
}
export module CellRendererPixbuf {
  export interface ConstructorProperties
    extends CellRenderer.ConstructorProperties {
    [key: string]: any;
    gicon: Gio.Icon;
    icon_name: string;
    icon_size: IconSize;
    pixbuf: GdkPixbuf.Pixbuf;
    pixbuf_expander_closed: GdkPixbuf.Pixbuf;
    pixbuf_expander_open: GdkPixbuf.Pixbuf;
    texture: Gdk.Texture;
  }
}
export class CellRendererPixbuf extends CellRenderer {
  static $gtype: GObject.GType<CellRendererPixbuf>;

  constructor(
    properties?: Partial<CellRendererPixbuf.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererPixbuf.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get gicon(): Gio.Icon;
  set gicon(val: Gio.Icon);
  get icon_name(): string;
  set icon_name(val: string);
  get icon_size(): IconSize;
  set icon_size(val: IconSize);
  set pixbuf(val: GdkPixbuf.Pixbuf);
  get pixbuf_expander_closed(): GdkPixbuf.Pixbuf;
  set pixbuf_expander_closed(val: GdkPixbuf.Pixbuf);
  get pixbuf_expander_open(): GdkPixbuf.Pixbuf;
  set pixbuf_expander_open(val: GdkPixbuf.Pixbuf);
  get texture(): Gdk.Texture;
  set texture(val: Gdk.Texture);

  // Constructors

  static ["new"](): CellRendererPixbuf;
}
export module CellRendererProgress {
  export interface ConstructorProperties
    extends CellRenderer.ConstructorProperties {
    [key: string]: any;
    inverted: boolean;
    pulse: number;
    text: string;
    text_xalign: number;
    text_yalign: number;
    value: number;
  }
}
export class CellRendererProgress extends CellRenderer implements Orientable {
  static $gtype: GObject.GType<CellRendererProgress>;

  constructor(
    properties?: Partial<CellRendererProgress.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererProgress.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get inverted(): boolean;
  set inverted(val: boolean);
  get pulse(): number;
  set pulse(val: number);
  get text(): string;
  set text(val: string);
  get text_xalign(): number;
  set text_xalign(val: number);
  get text_yalign(): number;
  set text_yalign(val: number);
  get value(): number;
  set value(val: number);

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): CellRendererProgress;

  // Implemented Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module CellRendererSpin {
  export interface ConstructorProperties
    extends CellRendererText.ConstructorProperties {
    [key: string]: any;
    adjustment: Adjustment;
    climb_rate: number;
    digits: number;
  }
}
export class CellRendererSpin extends CellRendererText {
  static $gtype: GObject.GType<CellRendererSpin>;

  constructor(
    properties?: Partial<CellRendererSpin.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererSpin.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get adjustment(): Adjustment;
  set adjustment(val: Adjustment);
  get climb_rate(): number;
  set climb_rate(val: number);
  get digits(): number;
  set digits(val: number);

  // Constructors

  static ["new"](): CellRendererSpin;
}
export module CellRendererSpinner {
  export interface ConstructorProperties
    extends CellRenderer.ConstructorProperties {
    [key: string]: any;
    active: boolean;
    pulse: number;
    size: IconSize;
  }
}
export class CellRendererSpinner extends CellRenderer {
  static $gtype: GObject.GType<CellRendererSpinner>;

  constructor(
    properties?: Partial<CellRendererSpinner.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererSpinner.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): boolean;
  set active(val: boolean);
  get pulse(): number;
  set pulse(val: number);
  get size(): IconSize;
  set size(val: IconSize);

  // Constructors

  static ["new"](): CellRendererSpinner;
}
export module CellRendererText {
  export interface ConstructorProperties
    extends CellRenderer.ConstructorProperties {
    [key: string]: any;
    align_set: boolean;
    alignment: Pango.Alignment;
    attributes: Pango.AttrList;
    background: string;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    editable: boolean;
    editable_set: boolean;
    ellipsize: Pango.EllipsizeMode;
    ellipsize_set: boolean;
    family: string;
    family_set: boolean;
    font: string;
    font_desc: Pango.FontDescription;
    foreground: string;
    foreground_rgba: Gdk.RGBA;
    foreground_set: boolean;
    language: string;
    language_set: boolean;
    markup: string;
    max_width_chars: number;
    placeholder_text: string;
    rise: number;
    rise_set: boolean;
    scale: number;
    scale_set: boolean;
    single_paragraph_mode: boolean;
    size: number;
    size_points: number;
    size_set: boolean;
    stretch: Pango.Stretch;
    stretch_set: boolean;
    strikethrough: boolean;
    strikethrough_set: boolean;
    style: Pango.Style;
    style_set: boolean;
    text: string;
    underline: Pango.Underline;
    underline_set: boolean;
    variant: Pango.Variant;
    variant_set: boolean;
    weight: number;
    weight_set: boolean;
    width_chars: number;
    wrap_mode: Pango.WrapMode;
    wrap_width: number;
  }
}
export class CellRendererText extends CellRenderer {
  static $gtype: GObject.GType<CellRendererText>;

  constructor(
    properties?: Partial<CellRendererText.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererText.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get align_set(): boolean;
  set align_set(val: boolean);
  get alignment(): Pango.Alignment;
  set alignment(val: Pango.Alignment);
  get attributes(): Pango.AttrList;
  set attributes(val: Pango.AttrList);
  set background(val: string);
  get background_rgba(): Gdk.RGBA;
  set background_rgba(val: Gdk.RGBA);
  get background_set(): boolean;
  set background_set(val: boolean);
  get editable(): boolean;
  set editable(val: boolean);
  get editable_set(): boolean;
  set editable_set(val: boolean);
  get ellipsize(): Pango.EllipsizeMode;
  set ellipsize(val: Pango.EllipsizeMode);
  get ellipsize_set(): boolean;
  set ellipsize_set(val: boolean);
  get family(): string;
  set family(val: string);
  get family_set(): boolean;
  set family_set(val: boolean);
  get font(): string;
  set font(val: string);
  get font_desc(): Pango.FontDescription;
  set font_desc(val: Pango.FontDescription);
  set foreground(val: string);
  get foreground_rgba(): Gdk.RGBA;
  set foreground_rgba(val: Gdk.RGBA);
  get foreground_set(): boolean;
  set foreground_set(val: boolean);
  get language(): string;
  set language(val: string);
  get language_set(): boolean;
  set language_set(val: boolean);
  set markup(val: string);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get placeholder_text(): string;
  set placeholder_text(val: string);
  get rise(): number;
  set rise(val: number);
  get rise_set(): boolean;
  set rise_set(val: boolean);
  get scale(): number;
  set scale(val: number);
  get scale_set(): boolean;
  set scale_set(val: boolean);
  get single_paragraph_mode(): boolean;
  set single_paragraph_mode(val: boolean);
  get size(): number;
  set size(val: number);
  get size_points(): number;
  set size_points(val: number);
  get size_set(): boolean;
  set size_set(val: boolean);
  get stretch(): Pango.Stretch;
  set stretch(val: Pango.Stretch);
  get stretch_set(): boolean;
  set stretch_set(val: boolean);
  get strikethrough(): boolean;
  set strikethrough(val: boolean);
  get strikethrough_set(): boolean;
  set strikethrough_set(val: boolean);
  get style(): Pango.Style;
  set style(val: Pango.Style);
  get style_set(): boolean;
  set style_set(val: boolean);
  get text(): string;
  set text(val: string);
  get underline(): Pango.Underline;
  set underline(val: Pango.Underline);
  get underline_set(): boolean;
  set underline_set(val: boolean);
  get variant(): Pango.Variant;
  set variant(val: Pango.Variant);
  get variant_set(): boolean;
  set variant_set(val: boolean);
  get weight(): number;
  set weight(val: number);
  get weight_set(): boolean;
  set weight_set(val: boolean);
  get width_chars(): number;
  set width_chars(val: number);
  get wrap_mode(): Pango.WrapMode;
  set wrap_mode(val: Pango.WrapMode);
  get wrap_width(): number;
  set wrap_width(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "edited",
    callback: (_source: this, path: string, new_text: string) => void
  ): number;
  connect_after(
    signal: "edited",
    callback: (_source: this, path: string, new_text: string) => void
  ): number;
  emit(signal: "edited", path: string, new_text: string): void;

  // Constructors

  static ["new"](): CellRendererText;

  // Members

  set_fixed_height_from_font(number_of_rows: number): void;
  vfunc_edited(path: string, new_text: string): void;
}
export module CellRendererToggle {
  export interface ConstructorProperties
    extends CellRenderer.ConstructorProperties {
    [key: string]: any;
    activatable: boolean;
    active: boolean;
    inconsistent: boolean;
    radio: boolean;
  }
}
export class CellRendererToggle extends CellRenderer {
  static $gtype: GObject.GType<CellRendererToggle>;

  constructor(
    properties?: Partial<CellRendererToggle.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellRendererToggle.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activatable(): boolean;
  set activatable(val: boolean);
  get active(): boolean;
  set active(val: boolean);
  get inconsistent(): boolean;
  set inconsistent(val: boolean);
  get radio(): boolean;
  set radio(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "toggled",
    callback: (_source: this, path: string) => void
  ): number;
  connect_after(
    signal: "toggled",
    callback: (_source: this, path: string) => void
  ): number;
  emit(signal: "toggled", path: string): void;

  // Constructors

  static ["new"](): CellRendererToggle;

  // Members

  get_activatable(): boolean;
  get_active(): boolean;
  get_radio(): boolean;
  set_activatable(setting: boolean): void;
  set_active(setting: boolean): void;
  set_radio(radio: boolean): void;
}
export module CellView {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    cell_area: CellArea;
    cell_area_context: CellAreaContext;
    draw_sensitive: boolean;
    fit_model: boolean;
    model: TreeModel;
  }
}
export class CellView
  extends Widget
  implements Accessible, Buildable, CellLayout, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<CellView>;

  constructor(
    properties?: Partial<CellView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CellView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get cell_area(): CellArea;
  get cell_area_context(): CellAreaContext;
  get draw_sensitive(): boolean;
  set draw_sensitive(val: boolean);
  get fit_model(): boolean;
  set fit_model(val: boolean);
  get model(): TreeModel;
  set model(val: TreeModel);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): CellView;
  static new_with_context(area: CellArea, context: CellAreaContext): CellView;
  static new_with_markup(markup: string): CellView;
  static new_with_text(text: string): CellView;
  static new_with_texture(texture: Gdk.Texture): CellView;

  // Members

  get_displayed_row(): TreePath | null;
  get_draw_sensitive(): boolean;
  get_fit_model(): boolean;
  get_model(): TreeModel | null;
  set_displayed_row(path?: TreePath | null): void;
  set_draw_sensitive(draw_sensitive: boolean): void;
  set_fit_model(fit_model: boolean): void;
  set_model(model?: TreeModel | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module CenterBox {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    baseline_position: BaselinePosition;
    center_widget: Widget;
    end_widget: Widget;
    start_widget: Widget;
  }
}
export class CenterBox
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<CenterBox>;

  constructor(
    properties?: Partial<CenterBox.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CenterBox.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get baseline_position(): BaselinePosition;
  set baseline_position(val: BaselinePosition);
  get center_widget(): Widget;
  set center_widget(val: Widget);
  get end_widget(): Widget;
  set end_widget(val: Widget);
  get start_widget(): Widget;
  set start_widget(val: Widget);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): CenterBox;

  // Members

  get_baseline_position(): BaselinePosition;
  get_center_widget(): Widget | null;
  get_end_widget(): Widget | null;
  get_start_widget(): Widget | null;
  set_baseline_position(position: BaselinePosition): void;
  set_center_widget(child?: Widget | null): void;
  set_end_widget(child?: Widget | null): void;
  set_start_widget(child?: Widget | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module CenterLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
  }
}
export class CenterLayout extends LayoutManager {
  static $gtype: GObject.GType<CenterLayout>;

  constructor(
    properties?: Partial<CenterLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CenterLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): CenterLayout;

  // Members

  get_baseline_position(): BaselinePosition;
  get_center_widget(): Widget | null;
  get_end_widget(): Widget | null;
  get_orientation(): Orientation;
  get_start_widget(): Widget | null;
  set_baseline_position(baseline_position: BaselinePosition): void;
  set_center_widget(widget?: Widget | null): void;
  set_end_widget(widget?: Widget | null): void;
  set_orientation(orientation: Orientation): void;
  set_start_widget(widget?: Widget | null): void;
}
export module CheckButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    active: boolean;
    child: Widget;
    group: CheckButton;
    inconsistent: boolean;
    label: string;
    use_underline: boolean;
  }
}
export class CheckButton
  extends Widget
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<CheckButton>;

  constructor(
    properties?: Partial<CheckButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CheckButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): boolean;
  set active(val: boolean);
  get child(): Widget;
  set child(val: Widget);
  set group(val: CheckButton);
  get inconsistent(): boolean;
  set inconsistent(val: boolean);
  get label(): string;
  set label(val: string);
  get use_underline(): boolean;
  set use_underline(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "toggled", callback: (_source: this) => void): number;
  connect_after(signal: "toggled", callback: (_source: this) => void): number;
  emit(signal: "toggled"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](): CheckButton;
  static new_with_label(label?: string | null): CheckButton;
  static new_with_mnemonic(label?: string | null): CheckButton;

  // Members

  get_active(): boolean;
  get_child(): Widget | null;
  get_inconsistent(): boolean;
  get_label(): string | null;
  get_use_underline(): boolean;
  set_active(setting: boolean): void;
  set_child(child?: Widget | null): void;
  set_group(group?: CheckButton | null): void;
  set_inconsistent(inconsistent: boolean): void;
  set_label(label?: string | null): void;
  set_use_underline(setting: boolean): void;
  vfunc_activate(): void;
  vfunc_toggled(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ClosureExpression {
  export interface ConstructorProperties
    extends Expression.ConstructorProperties {
    [key: string]: any;
  }
}
export class ClosureExpression extends Expression {
  static $gtype: GObject.GType<ClosureExpression>;

  constructor(
    properties?: Partial<ClosureExpression.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ClosureExpression.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](
    value_type: GObject.GType,
    closure: GObject.Closure,
    params?: Expression[] | null
  ): ClosureExpression;
}
export module ColorButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    modal: boolean;
    show_editor: boolean;
    title: string;
  }
}
export class ColorButton
  extends Widget
  implements Accessible, Buildable, ColorChooser, ConstraintTarget
{
  static $gtype: GObject.GType<ColorButton>;

  constructor(
    properties?: Partial<ColorButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColorButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get modal(): boolean;
  set modal(val: boolean);
  get show_editor(): boolean;
  set show_editor(val: boolean);
  get title(): string;
  set title(val: string);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "color-set", callback: (_source: this) => void): number;
  connect_after(signal: "color-set", callback: (_source: this) => void): number;
  emit(signal: "color-set"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get rgba(): Gdk.RGBA;
  set rgba(val: Gdk.RGBA);
  get use_alpha(): boolean;
  set use_alpha(val: boolean);

  // Constructors

  static ["new"](): ColorButton;
  static new_with_rgba(rgba: Gdk.RGBA): ColorButton;

  // Members

  get_modal(): boolean;
  get_title(): string;
  set_modal(modal: boolean): void;
  set_title(title: string): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  get_rgba(): Gdk.RGBA;
  get_use_alpha(): boolean;
  set_rgba(color: Gdk.RGBA): void;
  set_use_alpha(use_alpha: boolean): void;
  vfunc_add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  vfunc_color_activated(color: Gdk.RGBA): void;
  vfunc_get_rgba(): Gdk.RGBA;
  vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorChooserDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
    show_editor: boolean;
  }
}
export class ColorChooserDialog
  extends Dialog
  implements
    Accessible,
    Buildable,
    ColorChooser,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<ColorChooserDialog>;

  constructor(
    properties?: Partial<ColorChooserDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColorChooserDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get show_editor(): boolean;
  set show_editor(val: boolean);

  // Implemented Properties

  get rgba(): Gdk.RGBA;
  set rgba(val: Gdk.RGBA);
  get use_alpha(): boolean;
  set use_alpha(val: boolean);

  // Constructors

  static ["new"](
    title?: string | null,
    parent?: Window | null
  ): ColorChooserDialog;
  // Conflicted with Gtk.Dialog.new
  static ["new"](...args: never[]): any;

  // Implemented Members

  add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  get_rgba(): Gdk.RGBA;
  get_use_alpha(): boolean;
  set_rgba(color: Gdk.RGBA): void;
  set_use_alpha(use_alpha: boolean): void;
  vfunc_add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  vfunc_color_activated(color: Gdk.RGBA): void;
  vfunc_get_rgba(): Gdk.RGBA;
  vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorChooserWidget {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    show_editor: boolean;
  }
}
export class ColorChooserWidget
  extends Widget
  implements Accessible, Buildable, ColorChooser, ConstraintTarget
{
  static $gtype: GObject.GType<ColorChooserWidget>;

  constructor(
    properties?: Partial<ColorChooserWidget.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColorChooserWidget.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get show_editor(): boolean;
  set show_editor(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get rgba(): Gdk.RGBA;
  set rgba(val: Gdk.RGBA);
  get use_alpha(): boolean;
  set use_alpha(val: boolean);

  // Constructors

  static ["new"](): ColorChooserWidget;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  get_rgba(): Gdk.RGBA;
  get_use_alpha(): boolean;
  set_rgba(color: Gdk.RGBA): void;
  set_use_alpha(use_alpha: boolean): void;
  vfunc_add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  vfunc_color_activated(color: Gdk.RGBA): void;
  vfunc_get_rgba(): Gdk.RGBA;
  vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorDialog {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    modal: boolean;
    title: string;
    with_alpha: boolean;
  }
}
export class ColorDialog extends GObject.Object {
  static $gtype: GObject.GType<ColorDialog>;

  constructor(
    properties?: Partial<ColorDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColorDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get modal(): boolean;
  set modal(val: boolean);
  get title(): string;
  set title(val: string);
  get with_alpha(): boolean;
  set with_alpha(val: boolean);

  // Constructors

  static ["new"](): ColorDialog;

  // Members

  choose_rgba(
    parent?: Window | null,
    initial_color?: Gdk.RGBA | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  choose_rgba_finish(result: Gio.AsyncResult): Gdk.RGBA | null;
  get_modal(): boolean;
  get_title(): string;
  get_with_alpha(): boolean;
  set_modal(modal: boolean): void;
  set_title(title: string): void;
  set_with_alpha(with_alpha: boolean): void;
}
export module ColorDialogButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    dialog: ColorDialog;
    rgba: Gdk.RGBA;
  }
}
export class ColorDialogButton
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ColorDialogButton>;

  constructor(
    properties?: Partial<ColorDialogButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColorDialogButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get dialog(): ColorDialog;
  set dialog(val: ColorDialog);
  get rgba(): Gdk.RGBA;
  set rgba(val: Gdk.RGBA);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](dialog?: ColorDialog | null): ColorDialogButton;

  // Members

  get_dialog(): ColorDialog | null;
  get_rgba(): Gdk.RGBA;
  set_dialog(dialog: ColorDialog): void;
  set_rgba(color: Gdk.RGBA): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ColumnView {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    columns: Gio.ListModel;
    enable_rubberband: boolean;
    model: SelectionModel;
    reorderable: boolean;
    show_column_separators: boolean;
    show_row_separators: boolean;
    single_click_activate: boolean;
    sorter: Sorter;
  }
}
export class ColumnView
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Scrollable
{
  static $gtype: GObject.GType<ColumnView>;

  constructor(
    properties?: Partial<ColumnView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColumnView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get columns(): Gio.ListModel;
  get enable_rubberband(): boolean;
  set enable_rubberband(val: boolean);
  get model(): SelectionModel;
  set model(val: SelectionModel);
  get reorderable(): boolean;
  set reorderable(val: boolean);
  get show_column_separators(): boolean;
  set show_column_separators(val: boolean);
  get show_row_separators(): boolean;
  set show_row_separators(val: boolean);
  get single_click_activate(): boolean;
  set single_click_activate(val: boolean);
  get sorter(): Sorter;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate",
    callback: (_source: this, position: number) => void
  ): number;
  connect_after(
    signal: "activate",
    callback: (_source: this, position: number) => void
  ): number;
  emit(signal: "activate", position: number): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](model?: SelectionModel | null): ColumnView;

  // Members

  append_column(column: ColumnViewColumn): void;
  get_columns(): Gio.ListModel;
  get_enable_rubberband(): boolean;
  get_model(): SelectionModel | null;
  get_reorderable(): boolean;
  get_show_column_separators(): boolean;
  get_show_row_separators(): boolean;
  get_single_click_activate(): boolean;
  get_sorter(): Sorter | null;
  insert_column(position: number, column: ColumnViewColumn): void;
  remove_column(column: ColumnViewColumn): void;
  set_enable_rubberband(enable_rubberband: boolean): void;
  set_model(model?: SelectionModel | null): void;
  set_reorderable(reorderable: boolean): void;
  set_show_column_separators(show_column_separators: boolean): void;
  set_show_row_separators(show_row_separators: boolean): void;
  set_single_click_activate(single_click_activate: boolean): void;
  sort_by_column(column: ColumnViewColumn | null, direction: SortType): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module ColumnViewColumn {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    column_view: ColumnView;
    expand: boolean;
    factory: ListItemFactory;
    fixed_width: number;
    header_menu: Gio.MenuModel;
    id: string;
    resizable: boolean;
    sorter: Sorter;
    title: string;
    visible: boolean;
  }
}
export class ColumnViewColumn extends GObject.Object {
  static $gtype: GObject.GType<ColumnViewColumn>;

  constructor(
    properties?: Partial<ColumnViewColumn.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColumnViewColumn.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get column_view(): ColumnView;
  get expand(): boolean;
  set expand(val: boolean);
  get factory(): ListItemFactory;
  set factory(val: ListItemFactory);
  get fixed_width(): number;
  set fixed_width(val: number);
  get header_menu(): Gio.MenuModel;
  set header_menu(val: Gio.MenuModel);
  get id(): string;
  set id(val: string);
  get resizable(): boolean;
  set resizable(val: boolean);
  get sorter(): Sorter;
  set sorter(val: Sorter);
  get title(): string;
  set title(val: string);
  get visible(): boolean;
  set visible(val: boolean);

  // Constructors

  static ["new"](
    title?: string | null,
    factory?: ListItemFactory | null
  ): ColumnViewColumn;

  // Members

  get_column_view(): ColumnView | null;
  get_expand(): boolean;
  get_factory(): ListItemFactory | null;
  get_fixed_width(): number;
  get_header_menu(): Gio.MenuModel | null;
  get_id(): string | null;
  get_resizable(): boolean;
  get_sorter(): Sorter | null;
  get_title(): string | null;
  get_visible(): boolean;
  set_expand(expand: boolean): void;
  set_factory(factory?: ListItemFactory | null): void;
  set_fixed_width(fixed_width: number): void;
  set_header_menu(menu?: Gio.MenuModel | null): void;
  set_id(id?: string | null): void;
  set_resizable(resizable: boolean): void;
  set_sorter(sorter?: Sorter | null): void;
  set_title(title?: string | null): void;
  set_visible(visible: boolean): void;
}
export module ColumnViewSorter {
  export interface ConstructorProperties extends Sorter.ConstructorProperties {
    [key: string]: any;
    primary_sort_column: ColumnViewColumn;
    primary_sort_order: SortType;
  }
}
export class ColumnViewSorter extends Sorter {
  static $gtype: GObject.GType<ColumnViewSorter>;

  constructor(
    properties?: Partial<ColumnViewSorter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ColumnViewSorter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get primary_sort_column(): ColumnViewColumn;
  get primary_sort_order(): SortType;

  // Members

  get_n_sort_columns(): number;
  get_nth_sort_column(position: number): [ColumnViewColumn | null, SortType];
  get_primary_sort_column(): ColumnViewColumn | null;
  get_primary_sort_order(): SortType;
}
export module ComboBox {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    active: number;
    active_id: string;
    button_sensitivity: SensitivityType;
    child: Widget;
    entry_text_column: number;
    has_entry: boolean;
    has_frame: boolean;
    id_column: number;
    model: TreeModel;
    popup_fixed_width: boolean;
    popup_shown: boolean;
  }
}
export class ComboBox
  extends Widget
  implements Accessible, Buildable, CellEditable, CellLayout, ConstraintTarget
{
  static $gtype: GObject.GType<ComboBox>;

  constructor(
    properties?: Partial<ComboBox.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ComboBox.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): number;
  set active(val: number);
  get active_id(): string;
  set active_id(val: string);
  get button_sensitivity(): SensitivityType;
  set button_sensitivity(val: SensitivityType);
  get child(): Widget;
  set child(val: Widget);
  get entry_text_column(): number;
  set entry_text_column(val: number);
  get has_entry(): boolean;
  get has_frame(): boolean;
  set has_frame(val: boolean);
  get id_column(): number;
  set id_column(val: number);
  get model(): TreeModel;
  set model(val: TreeModel);
  get popup_fixed_width(): boolean;
  set popup_fixed_width(val: boolean);
  get popup_shown(): boolean;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;
  connect(
    signal: "format-entry-text",
    callback: (_source: this, path: string) => string
  ): number;
  connect_after(
    signal: "format-entry-text",
    callback: (_source: this, path: string) => string
  ): number;
  emit(signal: "format-entry-text", path: string): void;
  connect(
    signal: "move-active",
    callback: (_source: this, scroll_type: ScrollType) => void
  ): number;
  connect_after(
    signal: "move-active",
    callback: (_source: this, scroll_type: ScrollType) => void
  ): number;
  emit(signal: "move-active", scroll_type: ScrollType): void;
  connect(signal: "popdown", callback: (_source: this) => boolean): number;
  connect_after(
    signal: "popdown",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "popdown"): void;
  connect(signal: "popup", callback: (_source: this) => void): number;
  connect_after(signal: "popup", callback: (_source: this) => void): number;
  emit(signal: "popup"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get editing_canceled(): boolean;
  set editing_canceled(val: boolean);

  // Constructors

  static ["new"](): ComboBox;
  static new_with_entry(): ComboBox;
  static new_with_model(model: TreeModel): ComboBox;
  static new_with_model_and_entry(model: TreeModel): ComboBox;

  // Members

  get_active(): number;
  get_active_id(): string | null;
  get_active_iter(): [boolean, TreeIter];
  get_button_sensitivity(): SensitivityType;
  get_child(): Widget | null;
  get_entry_text_column(): number;
  get_has_entry(): boolean;
  get_id_column(): number;
  get_model(): TreeModel | null;
  get_popup_fixed_width(): boolean;
  popdown(): void;
  popup(): void;
  popup_for_device(device: Gdk.Device): void;
  set_active(index_: number): void;
  set_active_id(active_id?: string | null): boolean;
  set_active_iter(iter?: TreeIter | null): void;
  set_button_sensitivity(sensitivity: SensitivityType): void;
  set_child(child?: Widget | null): void;
  set_entry_text_column(text_column: number): void;
  set_id_column(id_column: number): void;
  set_model(model?: TreeModel | null): void;
  set_popup_fixed_width(fixed: boolean): void;
  set_row_separator_func(
    func?: TreeViewRowSeparatorFunc | null,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_activate(): void;
  vfunc_changed(): void;
  vfunc_format_entry_text(path: string): string;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  editing_done(): void;
  remove_widget(): void;
  start_editing(event?: Gdk.Event | null): void;
  vfunc_editing_done(): void;
  vfunc_remove_widget(): void;
  vfunc_start_editing(event?: Gdk.Event | null): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
}
export module ComboBoxText {
  export interface ConstructorProperties
    extends ComboBox.ConstructorProperties {
    [key: string]: any;
  }
}
export class ComboBoxText
  extends ComboBox
  implements Accessible, Buildable, CellEditable, CellLayout, ConstraintTarget
{
  static $gtype: GObject.GType<ComboBoxText>;

  constructor(
    properties?: Partial<ComboBoxText.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ComboBoxText.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Implemented Properties

  get editing_canceled(): boolean;
  set editing_canceled(val: boolean);

  // Constructors

  static ["new"](): ComboBoxText;
  static new_with_entry(): ComboBoxText;

  // Members

  append(id: string | null, text: string): void;
  append_text(text: string): void;
  get_active_text(): string | null;
  insert(position: number, id: string | null, text: string): void;
  insert_text(position: number, text: string): void;
  prepend(id: string | null, text: string): void;
  prepend_text(text: string): void;
  remove(position: number): void;
  remove_all(): void;

  // Implemented Members

  editing_done(): void;
  remove_widget(): void;
  start_editing(event?: Gdk.Event | null): void;
  vfunc_editing_done(): void;
  vfunc_remove_widget(): void;
  vfunc_start_editing(event?: Gdk.Event | null): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
}
export module ConstantExpression {
  export interface ConstructorProperties
    extends Expression.ConstructorProperties {
    [key: string]: any;
  }
}
export class ConstantExpression extends Expression {
  static $gtype: GObject.GType<ConstantExpression>;

  constructor(
    properties?: Partial<ConstantExpression.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ConstantExpression.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static new_for_value(value: GObject.Value | any): ConstantExpression;

  // Members

  get_value(): unknown;
}
export module Constraint {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    constant: number;
    multiplier: number;
    relation: ConstraintRelation;
    source: ConstraintTarget;
    source_attribute: ConstraintAttribute;
    strength: number;
    target: ConstraintTarget;
    target_attribute: ConstraintAttribute;
  }
}
export class Constraint extends GObject.Object {
  static $gtype: GObject.GType<Constraint>;

  constructor(
    properties?: Partial<Constraint.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Constraint.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get constant(): number;
  get multiplier(): number;
  get relation(): ConstraintRelation;
  get source(): ConstraintTarget;
  get source_attribute(): ConstraintAttribute;
  get strength(): number;
  get target(): ConstraintTarget;
  get target_attribute(): ConstraintAttribute;

  // Constructors

  static ["new"](
    target: ConstraintTarget | null,
    target_attribute: ConstraintAttribute,
    relation: ConstraintRelation,
    source: ConstraintTarget | null,
    source_attribute: ConstraintAttribute,
    multiplier: number,
    constant: number,
    strength: number
  ): Constraint;
  static new_constant(
    target: ConstraintTarget | null,
    target_attribute: ConstraintAttribute,
    relation: ConstraintRelation,
    constant: number,
    strength: number
  ): Constraint;

  // Members

  get_constant(): number;
  get_multiplier(): number;
  get_relation(): ConstraintRelation;
  get_source(): ConstraintTarget | null;
  get_source_attribute(): ConstraintAttribute;
  get_strength(): number;
  get_target(): ConstraintTarget | null;
  get_target_attribute(): ConstraintAttribute;
  is_attached(): boolean;
  is_constant(): boolean;
  is_required(): boolean;
}
export module ConstraintGuide {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    max_height: number;
    max_width: number;
    min_height: number;
    min_width: number;
    name: string;
    nat_height: number;
    nat_width: number;
    strength: ConstraintStrength;
  }
}
export class ConstraintGuide
  extends GObject.Object
  implements ConstraintTarget
{
  static $gtype: GObject.GType<ConstraintGuide>;

  constructor(
    properties?: Partial<ConstraintGuide.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ConstraintGuide.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get max_height(): number;
  set max_height(val: number);
  get max_width(): number;
  set max_width(val: number);
  get min_height(): number;
  set min_height(val: number);
  get min_width(): number;
  set min_width(val: number);
  get name(): string;
  set name(val: string);
  get nat_height(): number;
  set nat_height(val: number);
  get nat_width(): number;
  set nat_width(val: number);
  get strength(): ConstraintStrength;
  set strength(val: ConstraintStrength);

  // Constructors

  static ["new"](): ConstraintGuide;

  // Members

  get_max_size(): [number, number];
  get_min_size(): [number, number];
  get_name(): string | null;
  get_nat_size(): [number, number];
  get_strength(): ConstraintStrength;
  set_max_size(width: number, height: number): void;
  set_min_size(width: number, height: number): void;
  set_name(name?: string | null): void;
  set_nat_size(width: number, height: number): void;
  set_strength(strength: ConstraintStrength): void;
}
export module ConstraintLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
  }
}
export class ConstraintLayout extends LayoutManager implements Buildable {
  static $gtype: GObject.GType<ConstraintLayout>;

  constructor(
    properties?: Partial<ConstraintLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ConstraintLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): ConstraintLayout;

  // Members

  add_constraint(constraint: Constraint): void;
  add_constraints_from_description(
    lines: string[],
    hspacing: number,
    vspacing: number,
    views: { [key: string]: any } | GLib.HashTable<string, ConstraintTarget>
  ): Constraint[];
  add_guide(guide: ConstraintGuide): void;
  observe_constraints(): Gio.ListModel;
  observe_guides(): Gio.ListModel;
  remove_all_constraints(): void;
  remove_constraint(constraint: Constraint): void;
  remove_guide(guide: ConstraintGuide): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ConstraintLayoutChild {
  export interface ConstructorProperties
    extends LayoutChild.ConstructorProperties {
    [key: string]: any;
  }
}
export class ConstraintLayoutChild extends LayoutChild {
  static $gtype: GObject.GType<ConstraintLayoutChild>;

  constructor(
    properties?: Partial<ConstraintLayoutChild.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ConstraintLayoutChild.ConstructorProperties>,
    ...args: any[]
  ): void;
}
export module CssProvider {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class CssProvider extends GObject.Object implements StyleProvider {
  static $gtype: GObject.GType<CssProvider>;

  constructor(
    properties?: Partial<CssProvider.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CssProvider.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "parsing-error",
    callback: (_source: this, section: CssSection, error: GLib.Error) => void
  ): number;
  connect_after(
    signal: "parsing-error",
    callback: (_source: this, section: CssSection, error: GLib.Error) => void
  ): number;
  emit(signal: "parsing-error", section: CssSection, error: GLib.Error): void;

  // Constructors

  static ["new"](): CssProvider;

  // Members

  load_from_data(data: string, length: number): void;
  load_from_file(file: Gio.File): void;
  load_from_path(path: string): void;
  load_from_resource(resource_path: string): void;
  load_named(name: string, variant?: string | null): void;
  to_string(): string;
}
export module CustomFilter {
  export interface ConstructorProperties extends Filter.ConstructorProperties {
    [key: string]: any;
  }
}
export class CustomFilter extends Filter {
  static $gtype: GObject.GType<CustomFilter>;

  constructor(
    properties?: Partial<CustomFilter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CustomFilter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](match_func?: CustomFilterFunc | null): CustomFilter;

  // Members

  set_filter_func(match_func?: CustomFilterFunc | null): void;
}
export module CustomLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
  }
}
export class CustomLayout extends LayoutManager {
  static $gtype: GObject.GType<CustomLayout>;

  constructor(
    properties?: Partial<CustomLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CustomLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](
    request_mode: CustomRequestModeFunc | null,
    measure: CustomMeasureFunc,
    allocate: CustomAllocateFunc
  ): CustomLayout;
}
export module CustomSorter {
  export interface ConstructorProperties extends Sorter.ConstructorProperties {
    [key: string]: any;
  }
}
export class CustomSorter extends Sorter {
  static $gtype: GObject.GType<CustomSorter>;

  constructor(
    properties?: Partial<CustomSorter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<CustomSorter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](
    sort_func?: GLib.CompareDataFunc | null,
    user_destroy?: GLib.DestroyNotify | null
  ): CustomSorter;

  // Members

  set_sort_func(sort_func?: GLib.CompareDataFunc | null): void;
}
export module Dialog {
  export interface ConstructorProperties extends Window.ConstructorProperties {
    [key: string]: any;
    use_header_bar: number;
  }
}
export class Dialog
  extends Window
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<Dialog>;

  constructor(
    properties?: Partial<Dialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Dialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get use_header_bar(): number;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "close", callback: (_source: this) => void): number;
  connect_after(signal: "close", callback: (_source: this) => void): number;
  emit(signal: "close"): void;
  connect(
    signal: "response",
    callback: (_source: this, response_id: number) => void
  ): number;
  connect_after(
    signal: "response",
    callback: (_source: this, response_id: number) => void
  ): number;
  emit(signal: "response", response_id: number): void;

  // Constructors

  static ["new"](): Dialog;

  // Members

  add_action_widget(child: Widget, response_id: number): void;
  add_button(button_text: string, response_id: number): Widget;
  get_content_area(): Box;
  get_header_bar(): HeaderBar;
  get_response_for_widget(widget: Widget): number;
  get_widget_for_response(response_id: number): Widget | null;
  response(response_id: number): void;
  set_default_response(response_id: number): void;
  set_response_sensitive(response_id: number, setting: boolean): void;
  vfunc_close(): void;
  vfunc_response(response_id: number): void;

  // Implemented Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module DirectoryList {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    attributes: string;
    error: GLib.Error;
    file: Gio.File;
    io_priority: number;
    item_type: GObject.GType;
    loading: boolean;
    monitored: boolean;
    n_items: number;
  }
}
export class DirectoryList<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<DirectoryList>;

  constructor(
    properties?: Partial<DirectoryList.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DirectoryList.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get attributes(): string;
  set attributes(val: string);
  get error(): GLib.Error;
  get file(): Gio.File;
  set file(val: Gio.File);
  get io_priority(): number;
  set io_priority(val: number);
  get item_type(): GObject.GType;
  get loading(): boolean;
  get monitored(): boolean;
  set monitored(val: boolean);
  get n_items(): number;

  // Constructors

  static ["new"](
    attributes?: string | null,
    file?: Gio.File | null
  ): DirectoryList;

  // Members

  get_attributes(): string | null;
  get_error(): GLib.Error | null;
  get_file(): Gio.File | null;
  get_io_priority(): number;
  get_monitored(): boolean;
  is_loading(): boolean;
  set_attributes(attributes?: string | null): void;
  set_file(file?: Gio.File | null): void;
  set_io_priority(io_priority: number): void;
  set_monitored(monitored: boolean): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module DragIcon {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
  }
}
export class DragIcon
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Native, Root
{
  static $gtype: GObject.GType<DragIcon>;

  constructor(
    properties?: Partial<DragIcon.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DragIcon.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Members

  get_child(): Widget | null;
  set_child(child?: Widget | null): void;
  static create_widget_for_value(value: GObject.Value | any): Widget | null;
  static get_for_drag(drag: Gdk.Drag): Widget;
  static set_from_paintable(
    drag: Gdk.Drag,
    paintable: Gdk.Paintable,
    hot_x: number,
    hot_y: number
  ): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
}
export module DragSource {
  export interface ConstructorProperties
    extends GestureSingle.ConstructorProperties {
    [key: string]: any;
    actions: Gdk.DragAction;
    content: Gdk.ContentProvider;
  }
}
export class DragSource extends GestureSingle {
  static $gtype: GObject.GType<DragSource>;

  constructor(
    properties?: Partial<DragSource.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DragSource.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get actions(): Gdk.DragAction;
  set actions(val: Gdk.DragAction);
  get content(): Gdk.ContentProvider;
  set content(val: Gdk.ContentProvider);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "drag-begin",
    callback: (_source: this, drag: Gdk.Drag) => void
  ): number;
  connect_after(
    signal: "drag-begin",
    callback: (_source: this, drag: Gdk.Drag) => void
  ): number;
  emit(signal: "drag-begin", drag: Gdk.Drag): void;
  connect(
    signal: "drag-cancel",
    callback: (
      _source: this,
      drag: Gdk.Drag,
      reason: Gdk.DragCancelReason
    ) => boolean
  ): number;
  connect_after(
    signal: "drag-cancel",
    callback: (
      _source: this,
      drag: Gdk.Drag,
      reason: Gdk.DragCancelReason
    ) => boolean
  ): number;
  emit(
    signal: "drag-cancel",
    drag: Gdk.Drag,
    reason: Gdk.DragCancelReason
  ): void;
  connect(
    signal: "drag-end",
    callback: (_source: this, drag: Gdk.Drag, delete_data: boolean) => void
  ): number;
  connect_after(
    signal: "drag-end",
    callback: (_source: this, drag: Gdk.Drag, delete_data: boolean) => void
  ): number;
  emit(signal: "drag-end", drag: Gdk.Drag, delete_data: boolean): void;
  connect(
    signal: "prepare",
    callback: (
      _source: this,
      x: number,
      y: number
    ) => Gdk.ContentProvider | null
  ): number;
  connect_after(
    signal: "prepare",
    callback: (
      _source: this,
      x: number,
      y: number
    ) => Gdk.ContentProvider | null
  ): number;
  emit(signal: "prepare", x: number, y: number): void;

  // Constructors

  static ["new"](): DragSource;

  // Members

  drag_cancel(): void;
  get_actions(): Gdk.DragAction;
  get_content(): Gdk.ContentProvider | null;
  get_drag(): Gdk.Drag | null;
  set_actions(actions: Gdk.DragAction): void;
  set_content(content?: Gdk.ContentProvider | null): void;
  set_icon(paintable: Gdk.Paintable | null, hot_x: number, hot_y: number): void;
}
export module DrawingArea {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    content_height: number;
    content_width: number;
  }
}
export class DrawingArea
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<DrawingArea>;

  constructor(
    properties?: Partial<DrawingArea.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DrawingArea.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get content_height(): number;
  set content_height(val: number);
  get content_width(): number;
  set content_width(val: number);

  // Fields
  widget: Widget;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "resize",
    callback: (_source: this, width: number, height: number) => void
  ): number;
  connect_after(
    signal: "resize",
    callback: (_source: this, width: number, height: number) => void
  ): number;
  emit(signal: "resize", width: number, height: number): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): DrawingArea;

  // Members

  get_content_height(): number;
  get_content_width(): number;
  set_content_height(height: number): void;
  set_content_width(width: number): void;
  set_draw_func(draw_func?: DrawingAreaDrawFunc | null): void;
  vfunc_resize(width: number, height: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module DropControllerMotion {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    contains_pointer: boolean;
    drop: Gdk.Drop;
    is_pointer: boolean;
  }
}
export class DropControllerMotion extends EventController {
  static $gtype: GObject.GType<DropControllerMotion>;

  constructor(
    properties?: Partial<DropControllerMotion.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DropControllerMotion.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get contains_pointer(): boolean;
  get drop(): Gdk.Drop;
  get is_pointer(): boolean;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "enter",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "enter",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "enter", x: number, y: number): void;
  connect(signal: "leave", callback: (_source: this) => void): number;
  connect_after(signal: "leave", callback: (_source: this) => void): number;
  emit(signal: "leave"): void;
  connect(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "motion", x: number, y: number): void;

  // Constructors

  static ["new"](): DropControllerMotion;

  // Members

  get_drop(): Gdk.Drop | null;
}
export module DropDown {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    enable_search: boolean;
    expression: Expression;
    factory: ListItemFactory;
    list_factory: ListItemFactory;
    model: Gio.ListModel;
    selected: number;
    selected_item: GObject.Object;
    show_arrow: boolean;
  }
}
export class DropDown
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<DropDown>;

  constructor(
    properties?: Partial<DropDown.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DropDown.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get enable_search(): boolean;
  set enable_search(val: boolean);
  get expression(): Expression;
  set expression(val: Expression);
  get factory(): ListItemFactory;
  set factory(val: ListItemFactory);
  get list_factory(): ListItemFactory;
  set list_factory(val: ListItemFactory);
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get selected(): number;
  set selected(val: number);
  get selected_item(): GObject.Object;
  get show_arrow(): boolean;
  set show_arrow(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](
    model?: Gio.ListModel | null,
    expression?: Expression | null
  ): DropDown;
  static new_from_strings(strings: string[]): DropDown;

  // Members

  get_enable_search(): boolean;
  get_expression(): Expression | null;
  get_factory(): ListItemFactory | null;
  get_list_factory(): ListItemFactory | null;
  get_model(): Gio.ListModel | null;
  get_selected(): number;
  get_selected_item<T = GObject.Object>(): T;
  get_show_arrow(): boolean;
  set_enable_search(enable_search: boolean): void;
  set_expression(expression?: Expression | null): void;
  set_factory(factory?: ListItemFactory | null): void;
  set_list_factory(factory?: ListItemFactory | null): void;
  set_model(model?: Gio.ListModel | null): void;
  set_selected(position: number): void;
  set_show_arrow(show_arrow: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module DropTarget {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    actions: Gdk.DragAction;
    current_drop: Gdk.Drop;
    formats: Gdk.ContentFormats;
    preload: boolean;
    value: GObject.Value;
  }
}
export class DropTarget extends EventController {
  static $gtype: GObject.GType<DropTarget>;

  constructor(
    properties?: Partial<DropTarget.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DropTarget.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get actions(): Gdk.DragAction;
  set actions(val: Gdk.DragAction);
  get current_drop(): Gdk.Drop;
  get formats(): Gdk.ContentFormats;
  get preload(): boolean;
  set preload(val: boolean);
  get value(): GObject.Value;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "accept",
    callback: (_source: this, drop: Gdk.Drop) => boolean
  ): number;
  connect_after(
    signal: "accept",
    callback: (_source: this, drop: Gdk.Drop) => boolean
  ): number;
  emit(signal: "accept", drop: Gdk.Drop): void;
  connect(
    signal: "drop",
    callback: (
      _source: this,
      value: GObject.Value,
      x: number,
      y: number
    ) => boolean
  ): number;
  connect_after(
    signal: "drop",
    callback: (
      _source: this,
      value: GObject.Value,
      x: number,
      y: number
    ) => boolean
  ): number;
  emit(signal: "drop", value: GObject.Value | any, x: number, y: number): void;
  connect(
    signal: "enter",
    callback: (_source: this, x: number, y: number) => Gdk.DragAction
  ): number;
  connect_after(
    signal: "enter",
    callback: (_source: this, x: number, y: number) => Gdk.DragAction
  ): number;
  emit(signal: "enter", x: number, y: number): void;
  connect(signal: "leave", callback: (_source: this) => void): number;
  connect_after(signal: "leave", callback: (_source: this) => void): number;
  emit(signal: "leave"): void;
  connect(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => Gdk.DragAction
  ): number;
  connect_after(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => Gdk.DragAction
  ): number;
  emit(signal: "motion", x: number, y: number): void;

  // Constructors

  static ["new"](type: GObject.GType, actions: Gdk.DragAction): DropTarget;

  // Members

  get_actions(): Gdk.DragAction;
  get_current_drop(): Gdk.Drop | null;
  get_drop(): Gdk.Drop | null;
  get_formats(): Gdk.ContentFormats | null;
  get_gtypes(): GObject.GType[] | null;
  get_preload(): boolean;
  get_value(): GObject.Value | null;
  reject(): void;
  set_actions(actions: Gdk.DragAction): void;
  set_gtypes(types?: GObject.GType[] | null): void;
  set_preload(preload: boolean): void;
}
export module DropTargetAsync {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    actions: Gdk.DragAction;
    formats: Gdk.ContentFormats;
  }
}
export class DropTargetAsync extends EventController {
  static $gtype: GObject.GType<DropTargetAsync>;

  constructor(
    properties?: Partial<DropTargetAsync.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<DropTargetAsync.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get actions(): Gdk.DragAction;
  set actions(val: Gdk.DragAction);
  get formats(): Gdk.ContentFormats;
  set formats(val: Gdk.ContentFormats);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "accept",
    callback: (_source: this, drop: Gdk.Drop) => boolean
  ): number;
  connect_after(
    signal: "accept",
    callback: (_source: this, drop: Gdk.Drop) => boolean
  ): number;
  emit(signal: "accept", drop: Gdk.Drop): void;
  connect(
    signal: "drag-enter",
    callback: (
      _source: this,
      drop: Gdk.Drop,
      x: number,
      y: number
    ) => Gdk.DragAction
  ): number;
  connect_after(
    signal: "drag-enter",
    callback: (
      _source: this,
      drop: Gdk.Drop,
      x: number,
      y: number
    ) => Gdk.DragAction
  ): number;
  emit(signal: "drag-enter", drop: Gdk.Drop, x: number, y: number): void;
  connect(
    signal: "drag-leave",
    callback: (_source: this, drop: Gdk.Drop) => void
  ): number;
  connect_after(
    signal: "drag-leave",
    callback: (_source: this, drop: Gdk.Drop) => void
  ): number;
  emit(signal: "drag-leave", drop: Gdk.Drop): void;
  connect(
    signal: "drag-motion",
    callback: (
      _source: this,
      drop: Gdk.Drop,
      x: number,
      y: number
    ) => Gdk.DragAction
  ): number;
  connect_after(
    signal: "drag-motion",
    callback: (
      _source: this,
      drop: Gdk.Drop,
      x: number,
      y: number
    ) => Gdk.DragAction
  ): number;
  emit(signal: "drag-motion", drop: Gdk.Drop, x: number, y: number): void;
  connect(
    signal: "drop",
    callback: (_source: this, drop: Gdk.Drop, x: number, y: number) => boolean
  ): number;
  connect_after(
    signal: "drop",
    callback: (_source: this, drop: Gdk.Drop, x: number, y: number) => boolean
  ): number;
  emit(signal: "drop", drop: Gdk.Drop, x: number, y: number): void;

  // Constructors

  static ["new"](
    formats: Gdk.ContentFormats | null,
    actions: Gdk.DragAction
  ): DropTargetAsync;

  // Members

  get_actions(): Gdk.DragAction;
  get_formats(): Gdk.ContentFormats | null;
  reject_drop(drop: Gdk.Drop): void;
  set_actions(actions: Gdk.DragAction): void;
  set_formats(formats?: Gdk.ContentFormats | null): void;
}
export module EditableLabel {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    editing: boolean;
  }
}
export class EditableLabel
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Editable
{
  static $gtype: GObject.GType<EditableLabel>;

  constructor(
    properties?: Partial<EditableLabel.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EditableLabel.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get editing(): boolean;
  set editing(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get cursor_position(): number;
  get editable(): boolean;
  set editable(val: boolean);
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get selection_bound(): number;
  get text(): string;
  set text(val: string);
  get width_chars(): number;
  set width_chars(val: number);
  get xalign(): number;
  set xalign(val: number);

  // Constructors

  static ["new"](str: string): EditableLabel;

  // Members

  get_editing(): boolean;
  start_editing(): void;
  stop_editing(commit: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_alignment(): number;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_alignment(xalign: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module EmojiChooser {
  export interface ConstructorProperties extends Popover.ConstructorProperties {
    [key: string]: any;
  }
}
export class EmojiChooser
  extends Popover
  implements Accessible, Buildable, ConstraintTarget, Native, ShortcutManager
{
  static $gtype: GObject.GType<EmojiChooser>;

  constructor(
    properties?: Partial<EmojiChooser.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EmojiChooser.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "emoji-picked",
    callback: (_source: this, text: string) => void
  ): number;
  connect_after(
    signal: "emoji-picked",
    callback: (_source: this, text: string) => void
  ): number;
  emit(signal: "emoji-picked", text: string): void;

  // Constructors

  static ["new"](): EmojiChooser;

  // Implemented Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module Entry {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activates_default: boolean;
    attributes: Pango.AttrList;
    buffer: EntryBuffer;
    completion: EntryCompletion;
    enable_emoji_completion: boolean;
    extra_menu: Gio.MenuModel;
    has_frame: boolean;
    im_module: string;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    invisible_char: number;
    invisible_char_set: boolean;
    max_length: number;
    overwrite_mode: boolean;
    placeholder_text: string;
    primary_icon_activatable: boolean;
    primary_icon_gicon: Gio.Icon;
    primary_icon_name: string;
    primary_icon_paintable: Gdk.Paintable;
    primary_icon_sensitive: boolean;
    primary_icon_storage_type: ImageType;
    primary_icon_tooltip_markup: string;
    primary_icon_tooltip_text: string;
    progress_fraction: number;
    progress_pulse_step: number;
    scroll_offset: number;
    secondary_icon_activatable: boolean;
    secondary_icon_gicon: Gio.Icon;
    secondary_icon_name: string;
    secondary_icon_paintable: Gdk.Paintable;
    secondary_icon_sensitive: boolean;
    secondary_icon_storage_type: ImageType;
    secondary_icon_tooltip_markup: string;
    secondary_icon_tooltip_text: string;
    show_emoji_icon: boolean;
    tabs: Pango.TabArray;
    text_length: number;
    truncate_multiline: boolean;
    visibility: boolean;
  }
}
export class Entry
  extends Widget
  implements Accessible, Buildable, CellEditable, ConstraintTarget, Editable
{
  static $gtype: GObject.GType<Entry>;

  constructor(
    properties?: Partial<Entry.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Entry.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activates_default(): boolean;
  set activates_default(val: boolean);
  get attributes(): Pango.AttrList;
  set attributes(val: Pango.AttrList);
  get buffer(): EntryBuffer;
  set buffer(val: EntryBuffer);
  get completion(): EntryCompletion;
  set completion(val: EntryCompletion);
  get enable_emoji_completion(): boolean;
  set enable_emoji_completion(val: boolean);
  get extra_menu(): Gio.MenuModel;
  set extra_menu(val: Gio.MenuModel);
  get has_frame(): boolean;
  set has_frame(val: boolean);
  get im_module(): string;
  set im_module(val: string);
  get input_hints(): InputHints;
  set input_hints(val: InputHints);
  get input_purpose(): InputPurpose;
  set input_purpose(val: InputPurpose);
  get invisible_char(): number;
  set invisible_char(val: number);
  get invisible_char_set(): boolean;
  set invisible_char_set(val: boolean);
  get max_length(): number;
  set max_length(val: number);
  get overwrite_mode(): boolean;
  set overwrite_mode(val: boolean);
  get placeholder_text(): string;
  set placeholder_text(val: string);
  get primary_icon_activatable(): boolean;
  set primary_icon_activatable(val: boolean);
  get primary_icon_gicon(): Gio.Icon;
  set primary_icon_gicon(val: Gio.Icon);
  get primary_icon_name(): string;
  set primary_icon_name(val: string);
  get primary_icon_paintable(): Gdk.Paintable;
  set primary_icon_paintable(val: Gdk.Paintable);
  get primary_icon_sensitive(): boolean;
  set primary_icon_sensitive(val: boolean);
  get primary_icon_storage_type(): ImageType;
  get primary_icon_tooltip_markup(): string;
  set primary_icon_tooltip_markup(val: string);
  get primary_icon_tooltip_text(): string;
  set primary_icon_tooltip_text(val: string);
  get progress_fraction(): number;
  set progress_fraction(val: number);
  get progress_pulse_step(): number;
  set progress_pulse_step(val: number);
  get scroll_offset(): number;
  get secondary_icon_activatable(): boolean;
  set secondary_icon_activatable(val: boolean);
  get secondary_icon_gicon(): Gio.Icon;
  set secondary_icon_gicon(val: Gio.Icon);
  get secondary_icon_name(): string;
  set secondary_icon_name(val: string);
  get secondary_icon_paintable(): Gdk.Paintable;
  set secondary_icon_paintable(val: Gdk.Paintable);
  get secondary_icon_sensitive(): boolean;
  set secondary_icon_sensitive(val: boolean);
  get secondary_icon_storage_type(): ImageType;
  get secondary_icon_tooltip_markup(): string;
  set secondary_icon_tooltip_markup(val: string);
  get secondary_icon_tooltip_text(): string;
  set secondary_icon_tooltip_text(val: string);
  get show_emoji_icon(): boolean;
  set show_emoji_icon(val: boolean);
  get tabs(): Pango.TabArray;
  set tabs(val: Pango.TabArray);
  get text_length(): number;
  get truncate_multiline(): boolean;
  set truncate_multiline(val: boolean);
  get visibility(): boolean;
  set visibility(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(
    signal: "icon-press",
    callback: (_source: this, icon_pos: EntryIconPosition) => void
  ): number;
  connect_after(
    signal: "icon-press",
    callback: (_source: this, icon_pos: EntryIconPosition) => void
  ): number;
  emit(signal: "icon-press", icon_pos: EntryIconPosition): void;
  connect(
    signal: "icon-release",
    callback: (_source: this, icon_pos: EntryIconPosition) => void
  ): number;
  connect_after(
    signal: "icon-release",
    callback: (_source: this, icon_pos: EntryIconPosition) => void
  ): number;
  emit(signal: "icon-release", icon_pos: EntryIconPosition): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get editing_canceled(): boolean;
  set editing_canceled(val: boolean);
  get cursor_position(): number;
  get editable(): boolean;
  set editable(val: boolean);
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get selection_bound(): number;
  get text(): string;
  set text(val: string);
  get width_chars(): number;
  set width_chars(val: number);
  get xalign(): number;
  set xalign(val: number);

  // Constructors

  static ["new"](): Entry;
  static new_with_buffer(buffer: EntryBuffer): Entry;

  // Members

  get_activates_default(): boolean;
  get_alignment(): number;
  get_attributes(): Pango.AttrList | null;
  get_buffer(): EntryBuffer;
  get_completion(): EntryCompletion | null;
  get_current_icon_drag_source(): number;
  get_extra_menu(): Gio.MenuModel | null;
  get_has_frame(): boolean;
  get_icon_activatable(icon_pos: EntryIconPosition): boolean;
  get_icon_area(icon_pos: EntryIconPosition): Gdk.Rectangle;
  get_icon_at_pos(x: number, y: number): number;
  get_icon_gicon(icon_pos: EntryIconPosition): Gio.Icon | null;
  get_icon_name(icon_pos: EntryIconPosition): string | null;
  get_icon_paintable(icon_pos: EntryIconPosition): Gdk.Paintable | null;
  get_icon_sensitive(icon_pos: EntryIconPosition): boolean;
  get_icon_storage_type(icon_pos: EntryIconPosition): ImageType;
  get_icon_tooltip_markup(icon_pos: EntryIconPosition): string | null;
  get_icon_tooltip_text(icon_pos: EntryIconPosition): string | null;
  get_input_hints(): InputHints;
  get_input_purpose(): InputPurpose;
  get_invisible_char(): number;
  get_max_length(): number;
  get_overwrite_mode(): boolean;
  get_placeholder_text(): string | null;
  get_progress_fraction(): number;
  get_progress_pulse_step(): number;
  get_tabs(): Pango.TabArray | null;
  get_text_length(): number;
  get_visibility(): boolean;
  grab_focus_without_selecting(): boolean;
  progress_pulse(): void;
  reset_im_context(): void;
  set_activates_default(setting: boolean): void;
  set_alignment(xalign: number): void;
  set_attributes(attrs: Pango.AttrList): void;
  set_buffer(buffer: EntryBuffer): void;
  set_completion(completion?: EntryCompletion | null): void;
  set_extra_menu(model?: Gio.MenuModel | null): void;
  set_has_frame(setting: boolean): void;
  set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean): void;
  set_icon_drag_source(
    icon_pos: EntryIconPosition,
    provider: Gdk.ContentProvider,
    actions: Gdk.DragAction
  ): void;
  set_icon_from_gicon(
    icon_pos: EntryIconPosition,
    icon?: Gio.Icon | null
  ): void;
  set_icon_from_icon_name(
    icon_pos: EntryIconPosition,
    icon_name?: string | null
  ): void;
  set_icon_from_paintable(
    icon_pos: EntryIconPosition,
    paintable?: Gdk.Paintable | null
  ): void;
  set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean): void;
  set_icon_tooltip_markup(
    icon_pos: EntryIconPosition,
    tooltip?: string | null
  ): void;
  set_icon_tooltip_text(
    icon_pos: EntryIconPosition,
    tooltip?: string | null
  ): void;
  set_input_hints(hints: InputHints): void;
  set_input_purpose(purpose: InputPurpose): void;
  set_invisible_char(ch: number): void;
  set_max_length(max: number): void;
  set_overwrite_mode(overwrite: boolean): void;
  set_placeholder_text(text?: string | null): void;
  set_progress_fraction(fraction: number): void;
  set_progress_pulse_step(fraction: number): void;
  set_tabs(tabs?: Pango.TabArray | null): void;
  set_visibility(visible: boolean): void;
  unset_invisible_char(): void;
  vfunc_activate(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  editing_done(): void;
  remove_widget(): void;
  start_editing(event?: Gdk.Event | null): void;
  vfunc_editing_done(): void;
  vfunc_remove_widget(): void;
  vfunc_start_editing(event?: Gdk.Event | null): void;
  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module EntryBuffer {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    length: number;
    max_length: number;
    text: string;
  }
}
export class EntryBuffer extends GObject.Object {
  static $gtype: GObject.GType<EntryBuffer>;

  constructor(
    properties?: Partial<EntryBuffer.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EntryBuffer.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get length(): number;
  get max_length(): number;
  set max_length(val: number);
  get text(): string;
  set text(val: string);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "deleted-text",
    callback: (_source: this, position: number, n_chars: number) => void
  ): number;
  connect_after(
    signal: "deleted-text",
    callback: (_source: this, position: number, n_chars: number) => void
  ): number;
  emit(signal: "deleted-text", position: number, n_chars: number): void;
  connect(
    signal: "inserted-text",
    callback: (
      _source: this,
      position: number,
      chars: string,
      n_chars: number
    ) => void
  ): number;
  connect_after(
    signal: "inserted-text",
    callback: (
      _source: this,
      position: number,
      chars: string,
      n_chars: number
    ) => void
  ): number;
  emit(
    signal: "inserted-text",
    position: number,
    chars: string,
    n_chars: number
  ): void;

  // Constructors

  static ["new"](
    initial_chars: string | null,
    n_initial_chars: number
  ): EntryBuffer;

  // Members

  delete_text(position: number, n_chars: number): number;
  emit_deleted_text(position: number, n_chars: number): void;
  emit_inserted_text(position: number, chars: string, n_chars: number): void;
  get_bytes(): number;
  get_length(): number;
  get_max_length(): number;
  get_text(): string;
  insert_text(position: number, chars: string, n_chars: number): number;
  set_max_length(max_length: number): void;
  set_text(chars: string, n_chars: number): void;
  vfunc_delete_text(position: number, n_chars: number): number;
  vfunc_deleted_text(position: number, n_chars: number): void;
  vfunc_get_length(): number;
  vfunc_get_text(n_bytes: number): string;
  vfunc_insert_text(position: number, chars: string, n_chars: number): number;
  vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
}
export module EntryCompletion {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    cell_area: CellArea;
    inline_completion: boolean;
    inline_selection: boolean;
    minimum_key_length: number;
    model: TreeModel;
    popup_completion: boolean;
    popup_set_width: boolean;
    popup_single_match: boolean;
    text_column: number;
  }
}
export class EntryCompletion
  extends GObject.Object
  implements Buildable, CellLayout
{
  static $gtype: GObject.GType<EntryCompletion>;

  constructor(
    properties?: Partial<EntryCompletion.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EntryCompletion.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get cell_area(): CellArea;
  get inline_completion(): boolean;
  set inline_completion(val: boolean);
  get inline_selection(): boolean;
  set inline_selection(val: boolean);
  get minimum_key_length(): number;
  set minimum_key_length(val: number);
  get model(): TreeModel;
  set model(val: TreeModel);
  get popup_completion(): boolean;
  set popup_completion(val: boolean);
  get popup_set_width(): boolean;
  set popup_set_width(val: boolean);
  get popup_single_match(): boolean;
  set popup_single_match(val: boolean);
  get text_column(): number;
  set text_column(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "cursor-on-match",
    callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean
  ): number;
  connect_after(
    signal: "cursor-on-match",
    callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean
  ): number;
  emit(signal: "cursor-on-match", model: TreeModel, iter: TreeIter): void;
  connect(
    signal: "insert-prefix",
    callback: (_source: this, prefix: string) => boolean
  ): number;
  connect_after(
    signal: "insert-prefix",
    callback: (_source: this, prefix: string) => boolean
  ): number;
  emit(signal: "insert-prefix", prefix: string): void;
  connect(
    signal: "match-selected",
    callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean
  ): number;
  connect_after(
    signal: "match-selected",
    callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean
  ): number;
  emit(signal: "match-selected", model: TreeModel, iter: TreeIter): void;
  connect(signal: "no-matches", callback: (_source: this) => void): number;
  connect_after(
    signal: "no-matches",
    callback: (_source: this) => void
  ): number;
  emit(signal: "no-matches"): void;

  // Constructors

  static ["new"](): EntryCompletion;
  static new_with_area(area: CellArea): EntryCompletion;

  // Members

  complete(): void;
  compute_prefix(key: string): string | null;
  get_completion_prefix(): string | null;
  get_entry(): Widget;
  get_inline_completion(): boolean;
  get_inline_selection(): boolean;
  get_minimum_key_length(): number;
  get_model(): TreeModel | null;
  get_popup_completion(): boolean;
  get_popup_set_width(): boolean;
  get_popup_single_match(): boolean;
  get_text_column(): number;
  insert_prefix(): void;
  set_inline_completion(inline_completion: boolean): void;
  set_inline_selection(inline_selection: boolean): void;
  set_match_func(func: EntryCompletionMatchFunc): void;
  set_minimum_key_length(length: number): void;
  set_model(model?: TreeModel | null): void;
  set_popup_completion(popup_completion: boolean): void;
  set_popup_set_width(popup_set_width: boolean): void;
  set_popup_single_match(popup_single_match: boolean): void;
  set_text_column(column: number): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
}
export module EventController {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    name: string;
    propagation_limit: PropagationLimit;
    propagation_phase: PropagationPhase;
    widget: Widget;
  }
}
export abstract class EventController extends GObject.Object {
  static $gtype: GObject.GType<EventController>;

  constructor(
    properties?: Partial<EventController.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EventController.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get name(): string;
  set name(val: string);
  get propagation_limit(): PropagationLimit;
  set propagation_limit(val: PropagationLimit);
  get propagation_phase(): PropagationPhase;
  set propagation_phase(val: PropagationPhase);
  get widget(): Widget;

  // Members

  get_current_event(): Gdk.Event | null;
  get_current_event_device(): Gdk.Device | null;
  get_current_event_state(): Gdk.ModifierType;
  get_current_event_time(): number;
  get_name(): string | null;
  get_propagation_limit(): PropagationLimit;
  get_propagation_phase(): PropagationPhase;
  get_widget(): Widget;
  reset(): void;
  set_name(name?: string | null): void;
  set_propagation_limit(limit: PropagationLimit): void;
  set_propagation_phase(phase: PropagationPhase): void;
  set_static_name(name?: string | null): void;
}
export module EventControllerFocus {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    contains_focus: boolean;
    is_focus: boolean;
  }
}
export class EventControllerFocus extends EventController {
  static $gtype: GObject.GType<EventControllerFocus>;

  constructor(
    properties?: Partial<EventControllerFocus.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EventControllerFocus.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get contains_focus(): boolean;
  get is_focus(): boolean;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "enter", callback: (_source: this) => void): number;
  connect_after(signal: "enter", callback: (_source: this) => void): number;
  emit(signal: "enter"): void;
  connect(signal: "leave", callback: (_source: this) => void): number;
  connect_after(signal: "leave", callback: (_source: this) => void): number;
  emit(signal: "leave"): void;

  // Constructors

  static ["new"](): EventControllerFocus;
}
export module EventControllerKey {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
  }
}
export class EventControllerKey extends EventController {
  static $gtype: GObject.GType<EventControllerKey>;

  constructor(
    properties?: Partial<EventControllerKey.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EventControllerKey.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "im-update", callback: (_source: this) => void): number;
  connect_after(signal: "im-update", callback: (_source: this) => void): number;
  emit(signal: "im-update"): void;
  connect(
    signal: "key-pressed",
    callback: (
      _source: this,
      keyval: number,
      keycode: number,
      state: Gdk.ModifierType
    ) => boolean
  ): number;
  connect_after(
    signal: "key-pressed",
    callback: (
      _source: this,
      keyval: number,
      keycode: number,
      state: Gdk.ModifierType
    ) => boolean
  ): number;
  emit(
    signal: "key-pressed",
    keyval: number,
    keycode: number,
    state: Gdk.ModifierType
  ): void;
  connect(
    signal: "key-released",
    callback: (
      _source: this,
      keyval: number,
      keycode: number,
      state: Gdk.ModifierType
    ) => void
  ): number;
  connect_after(
    signal: "key-released",
    callback: (
      _source: this,
      keyval: number,
      keycode: number,
      state: Gdk.ModifierType
    ) => void
  ): number;
  emit(
    signal: "key-released",
    keyval: number,
    keycode: number,
    state: Gdk.ModifierType
  ): void;
  connect(
    signal: "modifiers",
    callback: (_source: this, keyval: Gdk.ModifierType) => boolean
  ): number;
  connect_after(
    signal: "modifiers",
    callback: (_source: this, keyval: Gdk.ModifierType) => boolean
  ): number;
  emit(signal: "modifiers", keyval: Gdk.ModifierType): void;

  // Constructors

  static ["new"](): EventControllerKey;

  // Members

  forward(widget: Widget): boolean;
  get_group(): number;
  get_im_context(): IMContext | null;
  set_im_context(im_context?: IMContext | null): void;
}
export module EventControllerLegacy {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
  }
}
export class EventControllerLegacy extends EventController {
  static $gtype: GObject.GType<EventControllerLegacy>;

  constructor(
    properties?: Partial<EventControllerLegacy.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EventControllerLegacy.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "event",
    callback: (_source: this, event: Gdk.Event) => boolean
  ): number;
  connect_after(
    signal: "event",
    callback: (_source: this, event: Gdk.Event) => boolean
  ): number;
  emit(signal: "event", event: Gdk.Event): void;

  // Constructors

  static ["new"](): EventControllerLegacy;
}
export module EventControllerMotion {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    contains_pointer: boolean;
    is_pointer: boolean;
  }
}
export class EventControllerMotion extends EventController {
  static $gtype: GObject.GType<EventControllerMotion>;

  constructor(
    properties?: Partial<EventControllerMotion.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EventControllerMotion.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get contains_pointer(): boolean;
  get is_pointer(): boolean;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "enter",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "enter",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "enter", x: number, y: number): void;
  connect(signal: "leave", callback: (_source: this) => void): number;
  connect_after(signal: "leave", callback: (_source: this) => void): number;
  emit(signal: "leave"): void;
  connect(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "motion", x: number, y: number): void;

  // Constructors

  static ["new"](): EventControllerMotion;
}
export module EventControllerScroll {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    flags: EventControllerScrollFlags;
  }
}
export class EventControllerScroll extends EventController {
  static $gtype: GObject.GType<EventControllerScroll>;

  constructor(
    properties?: Partial<EventControllerScroll.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EventControllerScroll.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get flags(): EventControllerScrollFlags;
  set flags(val: EventControllerScrollFlags);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "decelerate",
    callback: (_source: this, vel_x: number, vel_y: number) => void
  ): number;
  connect_after(
    signal: "decelerate",
    callback: (_source: this, vel_x: number, vel_y: number) => void
  ): number;
  emit(signal: "decelerate", vel_x: number, vel_y: number): void;
  connect(
    signal: "scroll",
    callback: (_source: this, dx: number, dy: number) => boolean
  ): number;
  connect_after(
    signal: "scroll",
    callback: (_source: this, dx: number, dy: number) => boolean
  ): number;
  emit(signal: "scroll", dx: number, dy: number): void;
  connect(signal: "scroll-begin", callback: (_source: this) => void): number;
  connect_after(
    signal: "scroll-begin",
    callback: (_source: this) => void
  ): number;
  emit(signal: "scroll-begin"): void;
  connect(signal: "scroll-end", callback: (_source: this) => void): number;
  connect_after(
    signal: "scroll-end",
    callback: (_source: this) => void
  ): number;
  emit(signal: "scroll-end"): void;

  // Constructors

  static ["new"](flags: EventControllerScrollFlags): EventControllerScroll;

  // Members

  get_flags(): EventControllerScrollFlags;
  get_unit(): Gdk.ScrollUnit;
  set_flags(flags: EventControllerScrollFlags): void;
}
export module EveryFilter {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends MultiFilter.ConstructorProperties<A> {
    [key: string]: any;
  }
}
export class EveryFilter<A extends GObject.Object = GObject.Object>
  extends MultiFilter<A>
  implements Gio.ListModel<A>, Buildable
{
  static $gtype: GObject.GType<EveryFilter>;

  constructor(
    properties?: Partial<EveryFilter.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<EveryFilter.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): EveryFilter;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Expander {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    expanded: boolean;
    label: string;
    label_widget: Widget;
    resize_toplevel: boolean;
    use_markup: boolean;
    use_underline: boolean;
  }
}
export class Expander
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Expander>;

  constructor(
    properties?: Partial<Expander.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Expander.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get expanded(): boolean;
  set expanded(val: boolean);
  get label(): string;
  set label(val: string);
  get label_widget(): Widget;
  set label_widget(val: Widget);
  get resize_toplevel(): boolean;
  set resize_toplevel(val: boolean);
  get use_markup(): boolean;
  set use_markup(val: boolean);
  get use_underline(): boolean;
  set use_underline(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](label?: string | null): Expander;
  static new_with_mnemonic(label?: string | null): Expander;

  // Members

  get_child(): Widget | null;
  get_expanded(): boolean;
  get_label(): string | null;
  get_label_widget(): Widget | null;
  get_resize_toplevel(): boolean;
  get_use_markup(): boolean;
  get_use_underline(): boolean;
  set_child(child?: Widget | null): void;
  set_expanded(expanded: boolean): void;
  set_label(label?: string | null): void;
  set_label_widget(label_widget?: Widget | null): void;
  set_resize_toplevel(resize_toplevel: boolean): void;
  set_use_markup(use_markup: boolean): void;
  set_use_underline(use_underline: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Expression {
  export interface ConstructorProperties {
    [key: string]: any;
  }
}
export abstract class Expression {
  static $gtype: GObject.GType<Expression>;

  constructor(
    properties?: Partial<Expression.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Expression.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  bind(
    target: GObject.Object,
    property: string,
    this_?: GObject.Object | null
  ): ExpressionWatch;
  evaluate(this_: GObject.Object | null, value: GObject.Value | any): boolean;
  get_value_type(): GObject.GType;
  is_static(): boolean;
  ref(): Expression;
  unref(): void;
  watch(
    this_: GObject.Object | null,
    notify: ExpressionNotify
  ): ExpressionWatch;
}
export module FileChooserDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
  }
}
export class FileChooserDialog
  extends Dialog
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    FileChooser,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<FileChooserDialog>;

  constructor(
    properties?: Partial<FileChooserDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FileChooserDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Implemented Properties

  get action(): FileChooserAction;
  set action(val: FileChooserAction);
  get create_folders(): boolean;
  set create_folders(val: boolean);
  get filter(): FileFilter;
  set filter(val: FileFilter);
  get filters(): Gio.ListModel;
  get select_multiple(): boolean;
  set select_multiple(val: boolean);
  get shortcut_folders(): Gio.ListModel;

  // Implemented Members

  add_choice(
    id: string,
    label: string,
    options?: string[] | null,
    option_labels?: string[] | null
  ): void;
  add_filter(filter: FileFilter): void;
  add_shortcut_folder(folder: Gio.File): boolean;
  get_action(): FileChooserAction;
  get_choice(id: string): string | null;
  get_create_folders(): boolean;
  get_current_folder(): Gio.File | null;
  get_current_name(): string | null;
  get_file(): Gio.File | null;
  get_files(): Gio.ListModel;
  get_filter(): FileFilter | null;
  get_filters(): Gio.ListModel;
  get_select_multiple(): boolean;
  get_shortcut_folders(): Gio.ListModel;
  remove_choice(id: string): void;
  remove_filter(filter: FileFilter): void;
  remove_shortcut_folder(folder: Gio.File): boolean;
  set_action(action: FileChooserAction): void;
  set_choice(id: string, option: string): void;
  set_create_folders(create_folders: boolean): void;
  set_current_folder(file?: Gio.File | null): boolean;
  set_current_name(name: string): void;
  set_file(file: Gio.File): boolean;
  set_filter(filter: FileFilter): void;
  set_select_multiple(select_multiple: boolean): void;
}
export module FileChooserNative {
  export interface ConstructorProperties
    extends NativeDialog.ConstructorProperties {
    [key: string]: any;
    accept_label: string;
    cancel_label: string;
  }
}
export class FileChooserNative extends NativeDialog implements FileChooser {
  static $gtype: GObject.GType<FileChooserNative>;

  constructor(
    properties?: Partial<FileChooserNative.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FileChooserNative.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accept_label(): string;
  set accept_label(val: string);
  get cancel_label(): string;
  set cancel_label(val: string);

  // Implemented Properties

  get action(): FileChooserAction;
  set action(val: FileChooserAction);
  get create_folders(): boolean;
  set create_folders(val: boolean);
  get filter(): FileFilter;
  set filter(val: FileFilter);
  get filters(): Gio.ListModel;
  get select_multiple(): boolean;
  set select_multiple(val: boolean);
  get shortcut_folders(): Gio.ListModel;

  // Constructors

  static ["new"](
    title: string | null,
    parent: Window | null,
    action: FileChooserAction,
    accept_label?: string | null,
    cancel_label?: string | null
  ): FileChooserNative;

  // Members

  get_accept_label(): string | null;
  get_cancel_label(): string | null;
  set_accept_label(accept_label?: string | null): void;
  set_cancel_label(cancel_label?: string | null): void;

  // Implemented Members

  add_choice(
    id: string,
    label: string,
    options?: string[] | null,
    option_labels?: string[] | null
  ): void;
  add_filter(filter: FileFilter): void;
  add_shortcut_folder(folder: Gio.File): boolean;
  get_action(): FileChooserAction;
  get_choice(id: string): string | null;
  get_create_folders(): boolean;
  get_current_folder(): Gio.File | null;
  get_current_name(): string | null;
  get_file(): Gio.File | null;
  get_files(): Gio.ListModel;
  get_filter(): FileFilter | null;
  get_filters(): Gio.ListModel;
  get_select_multiple(): boolean;
  get_shortcut_folders(): Gio.ListModel;
  remove_choice(id: string): void;
  remove_filter(filter: FileFilter): void;
  remove_shortcut_folder(folder: Gio.File): boolean;
  set_action(action: FileChooserAction): void;
  set_choice(id: string, option: string): void;
  set_create_folders(create_folders: boolean): void;
  set_current_folder(file?: Gio.File | null): boolean;
  set_current_name(name: string): void;
  set_file(file: Gio.File): boolean;
  set_filter(filter: FileFilter): void;
  set_select_multiple(select_multiple: boolean): void;
}
export module FileChooserWidget {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    search_mode: boolean;
    show_time: boolean;
    subtitle: string;
  }
}
export class FileChooserWidget
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, FileChooser
{
  static $gtype: GObject.GType<FileChooserWidget>;

  constructor(
    properties?: Partial<FileChooserWidget.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FileChooserWidget.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get search_mode(): boolean;
  set search_mode(val: boolean);
  get show_time(): boolean;
  get subtitle(): string;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "desktop-folder", callback: (_source: this) => void): number;
  connect_after(
    signal: "desktop-folder",
    callback: (_source: this) => void
  ): number;
  emit(signal: "desktop-folder"): void;
  connect(signal: "down-folder", callback: (_source: this) => void): number;
  connect_after(
    signal: "down-folder",
    callback: (_source: this) => void
  ): number;
  emit(signal: "down-folder"): void;
  connect(signal: "home-folder", callback: (_source: this) => void): number;
  connect_after(
    signal: "home-folder",
    callback: (_source: this) => void
  ): number;
  emit(signal: "home-folder"): void;
  connect(
    signal: "location-popup",
    callback: (_source: this, path: string) => void
  ): number;
  connect_after(
    signal: "location-popup",
    callback: (_source: this, path: string) => void
  ): number;
  emit(signal: "location-popup", path: string): void;
  connect(
    signal: "location-popup-on-paste",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "location-popup-on-paste",
    callback: (_source: this) => void
  ): number;
  emit(signal: "location-popup-on-paste"): void;
  connect(
    signal: "location-toggle-popup",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "location-toggle-popup",
    callback: (_source: this) => void
  ): number;
  emit(signal: "location-toggle-popup"): void;
  connect(signal: "places-shortcut", callback: (_source: this) => void): number;
  connect_after(
    signal: "places-shortcut",
    callback: (_source: this) => void
  ): number;
  emit(signal: "places-shortcut"): void;
  connect(
    signal: "quick-bookmark",
    callback: (_source: this, bookmark_index: number) => void
  ): number;
  connect_after(
    signal: "quick-bookmark",
    callback: (_source: this, bookmark_index: number) => void
  ): number;
  emit(signal: "quick-bookmark", bookmark_index: number): void;
  connect(signal: "recent-shortcut", callback: (_source: this) => void): number;
  connect_after(
    signal: "recent-shortcut",
    callback: (_source: this) => void
  ): number;
  emit(signal: "recent-shortcut"): void;
  connect(signal: "search-shortcut", callback: (_source: this) => void): number;
  connect_after(
    signal: "search-shortcut",
    callback: (_source: this) => void
  ): number;
  emit(signal: "search-shortcut"): void;
  connect(signal: "show-hidden", callback: (_source: this) => void): number;
  connect_after(
    signal: "show-hidden",
    callback: (_source: this) => void
  ): number;
  emit(signal: "show-hidden"): void;
  connect(signal: "up-folder", callback: (_source: this) => void): number;
  connect_after(signal: "up-folder", callback: (_source: this) => void): number;
  emit(signal: "up-folder"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get action(): FileChooserAction;
  set action(val: FileChooserAction);
  get create_folders(): boolean;
  set create_folders(val: boolean);
  get filter(): FileFilter;
  set filter(val: FileFilter);
  get filters(): Gio.ListModel;
  get select_multiple(): boolean;
  set select_multiple(val: boolean);
  get shortcut_folders(): Gio.ListModel;

  // Constructors

  static ["new"](action: FileChooserAction): FileChooserWidget;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_choice(
    id: string,
    label: string,
    options?: string[] | null,
    option_labels?: string[] | null
  ): void;
  add_filter(filter: FileFilter): void;
  add_shortcut_folder(folder: Gio.File): boolean;
  get_action(): FileChooserAction;
  get_choice(id: string): string | null;
  get_create_folders(): boolean;
  get_current_folder(): Gio.File | null;
  get_current_name(): string | null;
  get_file(): Gio.File | null;
  get_files(): Gio.ListModel;
  get_filter(): FileFilter | null;
  get_filters(): Gio.ListModel;
  get_select_multiple(): boolean;
  get_shortcut_folders(): Gio.ListModel;
  remove_choice(id: string): void;
  remove_filter(filter: FileFilter): void;
  remove_shortcut_folder(folder: Gio.File): boolean;
  set_action(action: FileChooserAction): void;
  set_choice(id: string, option: string): void;
  set_create_folders(create_folders: boolean): void;
  set_current_folder(file?: Gio.File | null): boolean;
  set_current_name(name: string): void;
  set_file(file: Gio.File): boolean;
  set_filter(filter: FileFilter): void;
  set_select_multiple(select_multiple: boolean): void;
}
export module FileDialog {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    accept_label: string;
    default_filter: FileFilter;
    filters: Gio.ListModel;
    initial_file: Gio.File;
    initial_folder: Gio.File;
    initial_name: string;
    modal: boolean;
    title: string;
  }
}
export class FileDialog extends GObject.Object {
  static $gtype: GObject.GType<FileDialog>;

  constructor(
    properties?: Partial<FileDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FileDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accept_label(): string;
  set accept_label(val: string);
  get default_filter(): FileFilter;
  set default_filter(val: FileFilter);
  get filters(): Gio.ListModel;
  set filters(val: Gio.ListModel);
  get initial_file(): Gio.File;
  set initial_file(val: Gio.File);
  get initial_folder(): Gio.File;
  set initial_folder(val: Gio.File);
  get initial_name(): string;
  set initial_name(val: string);
  get modal(): boolean;
  set modal(val: boolean);
  get title(): string;
  set title(val: string);

  // Constructors

  static ["new"](): FileDialog;

  // Members

  get_accept_label(): string | null;
  get_default_filter(): FileFilter | null;
  get_filters(): Gio.ListModel | null;
  get_initial_file(): Gio.File | null;
  get_initial_folder(): Gio.File | null;
  get_initial_name(): string | null;
  get_modal(): boolean;
  get_title(): string;
  open(parent?: Window | null, cancellable?: Gio.Cancellable | null): void;
  open_finish(result: Gio.AsyncResult): Gio.File | null;
  open_multiple(
    parent?: Window | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  open_multiple_finish(result: Gio.AsyncResult): Gio.ListModel | null;
  save(parent?: Window | null, cancellable?: Gio.Cancellable | null): void;
  save_finish(result: Gio.AsyncResult): Gio.File | null;
  select_folder(
    parent?: Window | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  select_folder_finish(result: Gio.AsyncResult): Gio.File | null;
  select_multiple_folders(
    parent?: Window | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  select_multiple_folders_finish(result: Gio.AsyncResult): Gio.ListModel | null;
  set_accept_label(accept_label?: string | null): void;
  set_default_filter(filter?: FileFilter | null): void;
  set_filters(filters: Gio.ListModel): void;
  set_initial_file(file?: Gio.File | null): void;
  set_initial_folder(folder?: Gio.File | null): void;
  set_initial_name(name?: string | null): void;
  set_modal(modal: boolean): void;
  set_title(title: string): void;
}
export module FileFilter {
  export interface ConstructorProperties extends Filter.ConstructorProperties {
    [key: string]: any;
    mime_types: string[];
    name: string;
    patterns: string[];
    suffixes: string[];
  }
}
export class FileFilter extends Filter implements Buildable {
  static $gtype: GObject.GType<FileFilter>;

  constructor(
    properties?: Partial<FileFilter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FileFilter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  set mime_types(val: string[]);
  get name(): string;
  set name(val: string);
  set patterns(val: string[]);
  set suffixes(val: string[]);

  // Constructors

  static ["new"](): FileFilter;
  static new_from_gvariant(variant: GLib.Variant): FileFilter;

  // Members

  add_mime_type(mime_type: string): void;
  add_pattern(pattern: string): void;
  add_pixbuf_formats(): void;
  add_suffix(suffix: string): void;
  get_attributes(): string[];
  get_name(): string | null;
  set_name(name?: string | null): void;
  to_gvariant(): GLib.Variant;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module FileLauncher {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    file: Gio.File;
  }
}
export class FileLauncher extends GObject.Object {
  static $gtype: GObject.GType<FileLauncher>;

  constructor(
    properties?: Partial<FileLauncher.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FileLauncher.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get file(): Gio.File;
  set file(val: Gio.File);

  // Constructors

  static ["new"](file?: Gio.File | null): FileLauncher;

  // Members

  get_file(): Gio.File | null;
  launch(parent?: Window | null, cancellable?: Gio.Cancellable | null): void;
  launch_finish(result: Gio.AsyncResult): boolean;
  open_containing_folder(
    parent?: Window | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  open_containing_folder_finish(result: Gio.AsyncResult): boolean;
  set_file(file?: Gio.File | null): void;
}
export module Filter {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Filter extends GObject.Object {
  static $gtype: GObject.GType<Filter>;

  constructor(
    properties?: Partial<Filter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Filter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "changed",
    callback: (_source: this, change: FilterChange) => void
  ): number;
  connect_after(
    signal: "changed",
    callback: (_source: this, change: FilterChange) => void
  ): number;
  emit(signal: "changed", change: FilterChange): void;

  // Members

  changed(change: FilterChange): void;
  get_strictness(): FilterMatch;
  match(item: GObject.Object): boolean;
  vfunc_get_strictness(): FilterMatch;
  vfunc_match(item?: GObject.Object | null): boolean;
}
export module FilterListModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    filter: Filter;
    incremental: boolean;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
    pending: number;
  }
}
export class FilterListModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<FilterListModel>;

  constructor(
    properties?: Partial<FilterListModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FilterListModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get filter(): Filter;
  set filter(val: Filter);
  get incremental(): boolean;
  set incremental(val: boolean);
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;
  get pending(): number;

  // Constructors

  static ["new"](
    model?: Gio.ListModel | null,
    filter?: Filter | null
  ): FilterListModel;

  // Members

  get_filter(): Filter | null;
  get_incremental(): boolean;
  get_model(): Gio.ListModel | null;
  get_pending(): number;
  set_filter(filter?: Filter | null): void;
  set_incremental(incremental: boolean): void;
  set_model(model?: Gio.ListModel | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module Fixed {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
  }
}
export class Fixed
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Fixed>;

  constructor(
    properties?: Partial<Fixed.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Fixed.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Fixed;

  // Members

  get_child_position(widget: Widget): [number, number];
  get_child_transform(widget: Widget): Gsk.Transform | null;
  move(widget: Widget, x: number, y: number): void;
  put(widget: Widget, x: number, y: number): void;
  remove(widget: Widget): void;
  set_child_transform(widget: Widget, transform?: Gsk.Transform | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module FixedLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
  }
}
export class FixedLayout extends LayoutManager {
  static $gtype: GObject.GType<FixedLayout>;

  constructor(
    properties?: Partial<FixedLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FixedLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): FixedLayout;
}
export module FixedLayoutChild {
  export interface ConstructorProperties
    extends LayoutChild.ConstructorProperties {
    [key: string]: any;
    transform: Gsk.Transform;
  }
}
export class FixedLayoutChild extends LayoutChild {
  static $gtype: GObject.GType<FixedLayoutChild>;

  constructor(
    properties?: Partial<FixedLayoutChild.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FixedLayoutChild.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get transform(): Gsk.Transform;
  set transform(val: Gsk.Transform);

  // Members

  get_transform(): Gsk.Transform | null;
  set_transform(transform: Gsk.Transform): void;
}
export module FlattenListModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
  }
}
export class FlattenListModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<FlattenListModel>;

  constructor(
    properties?: Partial<FlattenListModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FlattenListModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;

  // Constructors

  static ["new"](model?: Gio.ListModel | null): FlattenListModel;

  // Members

  get_model(): Gio.ListModel | null;
  get_model_for_item(position: number): Gio.ListModel | null;
  set_model(model?: Gio.ListModel | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module FlowBox {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    accept_unpaired_release: boolean;
    activate_on_single_click: boolean;
    column_spacing: number;
    homogeneous: boolean;
    max_children_per_line: number;
    min_children_per_line: number;
    row_spacing: number;
    selection_mode: SelectionMode;
  }
}
export class FlowBox
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<FlowBox>;

  constructor(
    properties?: Partial<FlowBox.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FlowBox.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accept_unpaired_release(): boolean;
  set accept_unpaired_release(val: boolean);
  get activate_on_single_click(): boolean;
  set activate_on_single_click(val: boolean);
  get column_spacing(): number;
  set column_spacing(val: number);
  get homogeneous(): boolean;
  set homogeneous(val: boolean);
  get max_children_per_line(): number;
  set max_children_per_line(val: number);
  get min_children_per_line(): number;
  set min_children_per_line(val: number);
  get row_spacing(): number;
  set row_spacing(val: number);
  get selection_mode(): SelectionMode;
  set selection_mode(val: SelectionMode);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-cursor-child",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "activate-cursor-child",
    callback: (_source: this) => void
  ): number;
  emit(signal: "activate-cursor-child"): void;
  connect(
    signal: "child-activated",
    callback: (_source: this, child: FlowBoxChild) => void
  ): number;
  connect_after(
    signal: "child-activated",
    callback: (_source: this, child: FlowBoxChild) => void
  ): number;
  emit(signal: "child-activated", child: FlowBoxChild): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend: boolean,
      modify: boolean
    ) => boolean
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend: boolean,
      modify: boolean
    ) => boolean
  ): number;
  emit(
    signal: "move-cursor",
    step: MovementStep,
    count: number,
    extend: boolean,
    modify: boolean
  ): void;
  connect(signal: "select-all", callback: (_source: this) => void): number;
  connect_after(
    signal: "select-all",
    callback: (_source: this) => void
  ): number;
  emit(signal: "select-all"): void;
  connect(
    signal: "selected-children-changed",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "selected-children-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "selected-children-changed"): void;
  connect(
    signal: "toggle-cursor-child",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "toggle-cursor-child",
    callback: (_source: this) => void
  ): number;
  emit(signal: "toggle-cursor-child"): void;
  connect(signal: "unselect-all", callback: (_source: this) => void): number;
  connect_after(
    signal: "unselect-all",
    callback: (_source: this) => void
  ): number;
  emit(signal: "unselect-all"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): FlowBox;

  // Members

  append(child: Widget): void;
  bind_model(
    model: Gio.ListModel | null,
    create_widget_func: FlowBoxCreateWidgetFunc
  ): void;
  get_activate_on_single_click(): boolean;
  get_child_at_index(idx: number): FlowBoxChild | null;
  get_child_at_pos(x: number, y: number): FlowBoxChild | null;
  get_column_spacing(): number;
  get_homogeneous(): boolean;
  get_max_children_per_line(): number;
  get_min_children_per_line(): number;
  get_row_spacing(): number;
  get_selected_children(): FlowBoxChild[];
  get_selection_mode(): SelectionMode;
  insert(widget: Widget, position: number): void;
  invalidate_filter(): void;
  invalidate_sort(): void;
  prepend(child: Widget): void;
  remove(widget: Widget): void;
  select_all(): void;
  select_child(child: FlowBoxChild): void;
  selected_foreach(func: FlowBoxForeachFunc): void;
  set_activate_on_single_click(single: boolean): void;
  set_column_spacing(spacing: number): void;
  set_filter_func(filter_func?: FlowBoxFilterFunc | null): void;
  set_hadjustment(adjustment: Adjustment): void;
  set_homogeneous(homogeneous: boolean): void;
  set_max_children_per_line(n_children: number): void;
  set_min_children_per_line(n_children: number): void;
  set_row_spacing(spacing: number): void;
  set_selection_mode(mode: SelectionMode): void;
  set_sort_func(sort_func?: FlowBoxSortFunc | null): void;
  set_vadjustment(adjustment: Adjustment): void;
  unselect_all(): void;
  unselect_child(child: FlowBoxChild): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module FlowBoxChild {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
  }
}
export class FlowBoxChild
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<FlowBoxChild>;

  constructor(
    properties?: Partial<FlowBoxChild.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FlowBoxChild.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): FlowBoxChild;

  // Members

  changed(): void;
  get_child(): Widget | null;
  get_index(): number;
  is_selected(): boolean;
  set_child(child?: Widget | null): void;
  vfunc_activate(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module FontButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    modal: boolean;
    title: string;
    use_font: boolean;
    use_size: boolean;
  }
}
export class FontButton
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, FontChooser
{
  static $gtype: GObject.GType<FontButton>;

  constructor(
    properties?: Partial<FontButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FontButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get modal(): boolean;
  set modal(val: boolean);
  get title(): string;
  set title(val: string);
  get use_font(): boolean;
  set use_font(val: boolean);
  get use_size(): boolean;
  set use_size(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "font-set", callback: (_source: this) => void): number;
  connect_after(signal: "font-set", callback: (_source: this) => void): number;
  emit(signal: "font-set"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get font(): string;
  set font(val: string);
  get font_desc(): Pango.FontDescription;
  set font_desc(val: Pango.FontDescription);
  get font_features(): string;
  get language(): string;
  set language(val: string);
  get level(): FontChooserLevel;
  set level(val: FontChooserLevel);
  get preview_text(): string;
  set preview_text(val: string);
  get show_preview_entry(): boolean;
  set show_preview_entry(val: boolean);

  // Constructors

  static ["new"](): FontButton;
  static new_with_font(fontname: string): FontButton;

  // Members

  get_modal(): boolean;
  get_title(): string;
  get_use_font(): boolean;
  get_use_size(): boolean;
  set_modal(modal: boolean): void;
  set_title(title: string): void;
  set_use_font(use_font: boolean): void;
  set_use_size(use_size: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_font(): string | null;
  get_font_desc(): Pango.FontDescription | null;
  get_font_face(): Pango.FontFace | null;
  get_font_family(): Pango.FontFamily | null;
  get_font_features(): string;
  get_font_map(): Pango.FontMap | null;
  get_font_size(): number;
  get_language(): string;
  get_level(): FontChooserLevel;
  get_preview_text(): string;
  get_show_preview_entry(): boolean;
  set_filter_func(filter?: FontFilterFunc | null): void;
  set_font(fontname: string): void;
  set_font_desc(font_desc: Pango.FontDescription): void;
  set_font_map(fontmap?: Pango.FontMap | null): void;
  set_language(language: string): void;
  set_level(level: FontChooserLevel): void;
  set_preview_text(text: string): void;
  set_show_preview_entry(show_preview_entry: boolean): void;
  vfunc_font_activated(fontname: string): void;
  vfunc_get_font_face(): Pango.FontFace | null;
  vfunc_get_font_family(): Pango.FontFamily | null;
  vfunc_get_font_map(): Pango.FontMap | null;
  vfunc_get_font_size(): number;
  vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
  vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}
export module FontChooserDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
  }
}
export class FontChooserDialog
  extends Dialog
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    FontChooser,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<FontChooserDialog>;

  constructor(
    properties?: Partial<FontChooserDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FontChooserDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Implemented Properties

  get font(): string;
  set font(val: string);
  get font_desc(): Pango.FontDescription;
  set font_desc(val: Pango.FontDescription);
  get font_features(): string;
  get language(): string;
  set language(val: string);
  get level(): FontChooserLevel;
  set level(val: FontChooserLevel);
  get preview_text(): string;
  set preview_text(val: string);
  get show_preview_entry(): boolean;
  set show_preview_entry(val: boolean);

  // Constructors

  static ["new"](
    title?: string | null,
    parent?: Window | null
  ): FontChooserDialog;
  // Conflicted with Gtk.Dialog.new
  static ["new"](...args: never[]): any;

  // Implemented Members

  get_font(): string | null;
  get_font_desc(): Pango.FontDescription | null;
  get_font_face(): Pango.FontFace | null;
  get_font_family(): Pango.FontFamily | null;
  get_font_features(): string;
  get_font_map(): Pango.FontMap | null;
  get_font_size(): number;
  get_language(): string;
  get_level(): FontChooserLevel;
  get_preview_text(): string;
  get_show_preview_entry(): boolean;
  set_filter_func(filter?: FontFilterFunc | null): void;
  set_font(fontname: string): void;
  set_font_desc(font_desc: Pango.FontDescription): void;
  set_font_map(fontmap?: Pango.FontMap | null): void;
  set_language(language: string): void;
  set_level(level: FontChooserLevel): void;
  set_preview_text(text: string): void;
  set_show_preview_entry(show_preview_entry: boolean): void;
  vfunc_font_activated(fontname: string): void;
  vfunc_get_font_face(): Pango.FontFace | null;
  vfunc_get_font_family(): Pango.FontFamily | null;
  vfunc_get_font_map(): Pango.FontMap | null;
  vfunc_get_font_size(): number;
  vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
  vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}
export module FontChooserWidget {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    tweak_action: Gio.Action;
  }
}
export class FontChooserWidget
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, FontChooser
{
  static $gtype: GObject.GType<FontChooserWidget>;

  constructor(
    properties?: Partial<FontChooserWidget.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FontChooserWidget.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get tweak_action(): Gio.Action;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get font(): string;
  set font(val: string);
  get font_desc(): Pango.FontDescription;
  set font_desc(val: Pango.FontDescription);
  get font_features(): string;
  get language(): string;
  set language(val: string);
  get level(): FontChooserLevel;
  set level(val: FontChooserLevel);
  get preview_text(): string;
  set preview_text(val: string);
  get show_preview_entry(): boolean;
  set show_preview_entry(val: boolean);

  // Constructors

  static ["new"](): FontChooserWidget;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_font(): string | null;
  get_font_desc(): Pango.FontDescription | null;
  get_font_face(): Pango.FontFace | null;
  get_font_family(): Pango.FontFamily | null;
  get_font_features(): string;
  get_font_map(): Pango.FontMap | null;
  get_font_size(): number;
  get_language(): string;
  get_level(): FontChooserLevel;
  get_preview_text(): string;
  get_show_preview_entry(): boolean;
  set_filter_func(filter?: FontFilterFunc | null): void;
  set_font(fontname: string): void;
  set_font_desc(font_desc: Pango.FontDescription): void;
  set_font_map(fontmap?: Pango.FontMap | null): void;
  set_language(language: string): void;
  set_level(level: FontChooserLevel): void;
  set_preview_text(text: string): void;
  set_show_preview_entry(show_preview_entry: boolean): void;
  vfunc_font_activated(fontname: string): void;
  vfunc_get_font_face(): Pango.FontFace | null;
  vfunc_get_font_family(): Pango.FontFamily | null;
  vfunc_get_font_map(): Pango.FontMap | null;
  vfunc_get_font_size(): number;
  vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
  vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}
export module FontDialog {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    filter: Filter;
    font_map: Pango.FontMap;
    language: Pango.Language;
    modal: boolean;
    title: string;
  }
}
export class FontDialog extends GObject.Object {
  static $gtype: GObject.GType<FontDialog>;

  constructor(
    properties?: Partial<FontDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FontDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get filter(): Filter;
  set filter(val: Filter);
  get font_map(): Pango.FontMap;
  set font_map(val: Pango.FontMap);
  get language(): Pango.Language;
  set language(val: Pango.Language);
  get modal(): boolean;
  set modal(val: boolean);
  get title(): string;
  set title(val: string);

  // Constructors

  static ["new"](): FontDialog;

  // Members

  choose_face(
    parent?: Window | null,
    initial_value?: Pango.FontFace | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  choose_face_finish(result: Gio.AsyncResult): Pango.FontFace | null;
  choose_family(
    parent?: Window | null,
    initial_value?: Pango.FontFamily | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  choose_family_finish(result: Gio.AsyncResult): Pango.FontFamily | null;
  choose_font(
    parent?: Window | null,
    initial_value?: Pango.FontDescription | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  choose_font_and_features(
    parent?: Window | null,
    initial_value?: Pango.FontDescription | null,
    cancellable?: Gio.Cancellable | null
  ): void;
  choose_font_and_features_finish(
    result: Gio.AsyncResult
  ): [boolean, Pango.FontDescription, string, Pango.Language];
  choose_font_finish(result: Gio.AsyncResult): Pango.FontDescription | null;
  get_filter(): Filter | null;
  get_font_map(): Pango.FontMap | null;
  get_language(): Pango.Language | null;
  get_modal(): boolean;
  get_title(): string;
  set_filter(filter?: Filter | null): void;
  set_font_map(fontmap?: Pango.FontMap | null): void;
  set_language(language: Pango.Language): void;
  set_modal(modal: boolean): void;
  set_title(title: string): void;
}
export module FontDialogButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    dialog: FontDialog;
    font_desc: Pango.FontDescription;
    font_features: string;
    language: Pango.Language;
    level: FontLevel;
    use_font: boolean;
    use_size: boolean;
  }
}
export class FontDialogButton
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<FontDialogButton>;

  constructor(
    properties?: Partial<FontDialogButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<FontDialogButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get dialog(): FontDialog;
  set dialog(val: FontDialog);
  get font_desc(): Pango.FontDescription;
  set font_desc(val: Pango.FontDescription);
  get font_features(): string;
  set font_features(val: string);
  get language(): Pango.Language;
  set language(val: Pango.Language);
  get level(): FontLevel;
  set level(val: FontLevel);
  get use_font(): boolean;
  set use_font(val: boolean);
  get use_size(): boolean;
  set use_size(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](dialog?: FontDialog | null): FontDialogButton;

  // Members

  get_dialog(): FontDialog | null;
  get_font_desc(): Pango.FontDescription | null;
  get_font_features(): string | null;
  get_language(): Pango.Language | null;
  get_level(): FontLevel;
  get_use_font(): boolean;
  get_use_size(): boolean;
  set_dialog(dialog: FontDialog): void;
  set_font_desc(font_desc: Pango.FontDescription): void;
  set_font_features(font_features?: string | null): void;
  set_language(language?: Pango.Language | null): void;
  set_level(level: FontLevel): void;
  set_use_font(use_font: boolean): void;
  set_use_size(use_size: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Frame {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    label: string;
    label_widget: Widget;
    label_xalign: number;
  }
}
export class Frame
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Frame>;

  constructor(
    properties?: Partial<Frame.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Frame.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get label(): string;
  set label(val: string);
  get label_widget(): Widget;
  set label_widget(val: Widget);
  get label_xalign(): number;
  set label_xalign(val: number);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](label?: string | null): Frame;

  // Members

  get_child(): Widget | null;
  get_label(): string | null;
  get_label_align(): number;
  get_label_widget(): Widget | null;
  set_child(child?: Widget | null): void;
  set_label(label?: string | null): void;
  set_label_align(xalign: number): void;
  set_label_widget(label_widget?: Widget | null): void;
  vfunc_compute_child_allocation(allocation: Allocation): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module GLArea {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    auto_render: boolean;
    context: Gdk.GLContext;
    has_depth_buffer: boolean;
    has_stencil_buffer: boolean;
    use_es: boolean;
  }
}
export class GLArea
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<GLArea>;

  constructor(
    properties?: Partial<GLArea.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GLArea.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get auto_render(): boolean;
  set auto_render(val: boolean);
  get context(): Gdk.GLContext;
  get has_depth_buffer(): boolean;
  set has_depth_buffer(val: boolean);
  get has_stencil_buffer(): boolean;
  set has_stencil_buffer(val: boolean);
  get use_es(): boolean;
  set use_es(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "create-context",
    callback: (_source: this) => Gdk.GLContext
  ): number;
  connect_after(
    signal: "create-context",
    callback: (_source: this) => Gdk.GLContext
  ): number;
  emit(signal: "create-context"): void;
  connect(
    signal: "render",
    callback: (_source: this, context: Gdk.GLContext) => boolean
  ): number;
  connect_after(
    signal: "render",
    callback: (_source: this, context: Gdk.GLContext) => boolean
  ): number;
  emit(signal: "render", context: Gdk.GLContext): void;
  connect(
    signal: "resize",
    callback: (_source: this, width: number, height: number) => void
  ): number;
  connect_after(
    signal: "resize",
    callback: (_source: this, width: number, height: number) => void
  ): number;
  emit(signal: "resize", width: number, height: number): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): GLArea;

  // Members

  attach_buffers(): void;
  get_auto_render(): boolean;
  get_context(): Gdk.GLContext | null;
  get_error(): GLib.Error | null;
  get_has_depth_buffer(): boolean;
  get_has_stencil_buffer(): boolean;
  get_required_version(): [number, number];
  get_use_es(): boolean;
  make_current(): void;
  queue_render(): void;
  set_auto_render(auto_render: boolean): void;
  set_error(error?: GLib.Error | null): void;
  set_has_depth_buffer(has_depth_buffer: boolean): void;
  set_has_stencil_buffer(has_stencil_buffer: boolean): void;
  set_required_version(major: number, minor: number): void;
  set_use_es(use_es: boolean): void;
  vfunc_render(context: Gdk.GLContext): boolean;
  vfunc_resize(width: number, height: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Gesture {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    n_points: number;
  }
}
export abstract class Gesture extends EventController {
  static $gtype: GObject.GType<Gesture>;

  constructor(
    properties?: Partial<Gesture.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Gesture.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get n_points(): number;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "begin",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  connect_after(
    signal: "begin",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  emit(signal: "begin", sequence: Gdk.EventSequence | null): void;
  connect(
    signal: "cancel",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  connect_after(
    signal: "cancel",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  emit(signal: "cancel", sequence: Gdk.EventSequence | null): void;
  connect(
    signal: "end",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  connect_after(
    signal: "end",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  emit(signal: "end", sequence: Gdk.EventSequence | null): void;
  connect(
    signal: "sequence-state-changed",
    callback: (
      _source: this,
      sequence: Gdk.EventSequence | null,
      state: EventSequenceState
    ) => void
  ): number;
  connect_after(
    signal: "sequence-state-changed",
    callback: (
      _source: this,
      sequence: Gdk.EventSequence | null,
      state: EventSequenceState
    ) => void
  ): number;
  emit(
    signal: "sequence-state-changed",
    sequence: Gdk.EventSequence | null,
    state: EventSequenceState
  ): void;
  connect(
    signal: "update",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  connect_after(
    signal: "update",
    callback: (_source: this, sequence: Gdk.EventSequence | null) => void
  ): number;
  emit(signal: "update", sequence: Gdk.EventSequence | null): void;

  // Members

  get_bounding_box(): [boolean, Gdk.Rectangle];
  get_bounding_box_center(): [boolean, number, number];
  get_device(): Gdk.Device | null;
  get_group(): Gesture[];
  get_last_event(sequence?: Gdk.EventSequence | null): Gdk.Event | null;
  get_last_updated_sequence(): Gdk.EventSequence | null;
  get_point(sequence: Gdk.EventSequence | null): [boolean, number, number];
  get_sequence_state(sequence: Gdk.EventSequence): EventSequenceState;
  get_sequences(): Gdk.EventSequence[];
  group(gesture: Gesture): void;
  handles_sequence(sequence?: Gdk.EventSequence | null): boolean;
  is_active(): boolean;
  is_grouped_with(other: Gesture): boolean;
  is_recognized(): boolean;
  set_sequence_state(
    sequence: Gdk.EventSequence,
    state: EventSequenceState
  ): boolean;
  set_state(state: EventSequenceState): boolean;
  ungroup(): void;
}
export module GestureClick {
  export interface ConstructorProperties
    extends GestureSingle.ConstructorProperties {
    [key: string]: any;
  }
}
export class GestureClick extends GestureSingle {
  static $gtype: GObject.GType<GestureClick>;

  constructor(
    properties?: Partial<GestureClick.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureClick.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "pressed",
    callback: (_source: this, n_press: number, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "pressed",
    callback: (_source: this, n_press: number, x: number, y: number) => void
  ): number;
  emit(signal: "pressed", n_press: number, x: number, y: number): void;
  connect(
    signal: "released",
    callback: (_source: this, n_press: number, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "released",
    callback: (_source: this, n_press: number, x: number, y: number) => void
  ): number;
  emit(signal: "released", n_press: number, x: number, y: number): void;
  connect(signal: "stopped", callback: (_source: this) => void): number;
  connect_after(signal: "stopped", callback: (_source: this) => void): number;
  emit(signal: "stopped"): void;
  connect(
    signal: "unpaired-release",
    callback: (
      _source: this,
      x: number,
      y: number,
      button: number,
      sequence: Gdk.EventSequence | null
    ) => void
  ): number;
  connect_after(
    signal: "unpaired-release",
    callback: (
      _source: this,
      x: number,
      y: number,
      button: number,
      sequence: Gdk.EventSequence | null
    ) => void
  ): number;
  emit(
    signal: "unpaired-release",
    x: number,
    y: number,
    button: number,
    sequence: Gdk.EventSequence | null
  ): void;

  // Constructors

  static ["new"](): GestureClick;
}
export module GestureDrag {
  export interface ConstructorProperties
    extends GestureSingle.ConstructorProperties {
    [key: string]: any;
  }
}
export class GestureDrag extends GestureSingle {
  static $gtype: GObject.GType<GestureDrag>;

  constructor(
    properties?: Partial<GestureDrag.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureDrag.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "drag-begin",
    callback: (_source: this, start_x: number, start_y: number) => void
  ): number;
  connect_after(
    signal: "drag-begin",
    callback: (_source: this, start_x: number, start_y: number) => void
  ): number;
  emit(signal: "drag-begin", start_x: number, start_y: number): void;
  connect(
    signal: "drag-end",
    callback: (_source: this, offset_x: number, offset_y: number) => void
  ): number;
  connect_after(
    signal: "drag-end",
    callback: (_source: this, offset_x: number, offset_y: number) => void
  ): number;
  emit(signal: "drag-end", offset_x: number, offset_y: number): void;
  connect(
    signal: "drag-update",
    callback: (_source: this, offset_x: number, offset_y: number) => void
  ): number;
  connect_after(
    signal: "drag-update",
    callback: (_source: this, offset_x: number, offset_y: number) => void
  ): number;
  emit(signal: "drag-update", offset_x: number, offset_y: number): void;

  // Constructors

  static ["new"](): GestureDrag;

  // Members

  get_offset(): [boolean, number, number];
  get_start_point(): [boolean, number, number];
}
export module GestureLongPress {
  export interface ConstructorProperties
    extends GestureSingle.ConstructorProperties {
    [key: string]: any;
    delay_factor: number;
  }
}
export class GestureLongPress extends GestureSingle {
  static $gtype: GObject.GType<GestureLongPress>;

  constructor(
    properties?: Partial<GestureLongPress.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureLongPress.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get delay_factor(): number;
  set delay_factor(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "cancelled", callback: (_source: this) => void): number;
  connect_after(signal: "cancelled", callback: (_source: this) => void): number;
  emit(signal: "cancelled"): void;
  connect(
    signal: "pressed",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "pressed",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "pressed", x: number, y: number): void;

  // Constructors

  static ["new"](): GestureLongPress;

  // Members

  get_delay_factor(): number;
  set_delay_factor(delay_factor: number): void;
}
export module GesturePan {
  export interface ConstructorProperties
    extends GestureDrag.ConstructorProperties {
    [key: string]: any;
    orientation: Orientation;
  }
}
export class GesturePan extends GestureDrag {
  static $gtype: GObject.GType<GesturePan>;

  constructor(
    properties?: Partial<GesturePan.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GesturePan.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "pan",
    callback: (_source: this, direction: PanDirection, offset: number) => void
  ): number;
  connect_after(
    signal: "pan",
    callback: (_source: this, direction: PanDirection, offset: number) => void
  ): number;
  emit(signal: "pan", direction: PanDirection, offset: number): void;

  // Constructors

  static ["new"](orientation: Orientation): GesturePan;
  // Conflicted with Gtk.GestureDrag.new
  static ["new"](...args: never[]): any;

  // Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module GestureRotate {
  export interface ConstructorProperties extends Gesture.ConstructorProperties {
    [key: string]: any;
  }
}
export class GestureRotate extends Gesture {
  static $gtype: GObject.GType<GestureRotate>;

  constructor(
    properties?: Partial<GestureRotate.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureRotate.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "angle-changed",
    callback: (_source: this, angle: number, angle_delta: number) => void
  ): number;
  connect_after(
    signal: "angle-changed",
    callback: (_source: this, angle: number, angle_delta: number) => void
  ): number;
  emit(signal: "angle-changed", angle: number, angle_delta: number): void;

  // Constructors

  static ["new"](): GestureRotate;

  // Members

  get_angle_delta(): number;
}
export module GestureSingle {
  export interface ConstructorProperties extends Gesture.ConstructorProperties {
    [key: string]: any;
    button: number;
    exclusive: boolean;
    touch_only: boolean;
  }
}
export class GestureSingle extends Gesture {
  static $gtype: GObject.GType<GestureSingle>;

  constructor(
    properties?: Partial<GestureSingle.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureSingle.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get button(): number;
  set button(val: number);
  get exclusive(): boolean;
  set exclusive(val: boolean);
  get touch_only(): boolean;
  set touch_only(val: boolean);

  // Members

  get_button(): number;
  get_current_button(): number;
  get_current_sequence(): Gdk.EventSequence | null;
  get_exclusive(): boolean;
  get_touch_only(): boolean;
  set_button(button: number): void;
  set_exclusive(exclusive: boolean): void;
  set_touch_only(touch_only: boolean): void;
}
export module GestureStylus {
  export interface ConstructorProperties
    extends GestureSingle.ConstructorProperties {
    [key: string]: any;
    stylus_only: boolean;
  }
}
export class GestureStylus extends GestureSingle {
  static $gtype: GObject.GType<GestureStylus>;

  constructor(
    properties?: Partial<GestureStylus.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureStylus.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get stylus_only(): boolean;
  set stylus_only(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "down",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "down",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "down", x: number, y: number): void;
  connect(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "motion",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "motion", x: number, y: number): void;
  connect(
    signal: "proximity",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "proximity",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "proximity", x: number, y: number): void;
  connect(
    signal: "up",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  connect_after(
    signal: "up",
    callback: (_source: this, x: number, y: number) => void
  ): number;
  emit(signal: "up", x: number, y: number): void;

  // Constructors

  static ["new"](): GestureStylus;

  // Members

  get_axes(axes: Gdk.AxisUse[]): [boolean, number[]];
  get_axis(axis: Gdk.AxisUse): [boolean, number];
  get_backlog(): [boolean, Gdk.TimeCoord[]];
  get_device_tool(): Gdk.DeviceTool | null;
  get_stylus_only(): boolean;
  set_stylus_only(stylus_only: boolean): void;
}
export module GestureSwipe {
  export interface ConstructorProperties
    extends GestureSingle.ConstructorProperties {
    [key: string]: any;
  }
}
export class GestureSwipe extends GestureSingle {
  static $gtype: GObject.GType<GestureSwipe>;

  constructor(
    properties?: Partial<GestureSwipe.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureSwipe.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "swipe",
    callback: (_source: this, velocity_x: number, velocity_y: number) => void
  ): number;
  connect_after(
    signal: "swipe",
    callback: (_source: this, velocity_x: number, velocity_y: number) => void
  ): number;
  emit(signal: "swipe", velocity_x: number, velocity_y: number): void;

  // Constructors

  static ["new"](): GestureSwipe;

  // Members

  get_velocity(): [boolean, number, number];
}
export module GestureZoom {
  export interface ConstructorProperties extends Gesture.ConstructorProperties {
    [key: string]: any;
  }
}
export class GestureZoom extends Gesture {
  static $gtype: GObject.GType<GestureZoom>;

  constructor(
    properties?: Partial<GestureZoom.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GestureZoom.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "scale-changed",
    callback: (_source: this, scale: number) => void
  ): number;
  connect_after(
    signal: "scale-changed",
    callback: (_source: this, scale: number) => void
  ): number;
  emit(signal: "scale-changed", scale: number): void;

  // Constructors

  static ["new"](): GestureZoom;

  // Members

  get_scale_delta(): number;
}
export module Grid {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    baseline_row: number;
    column_homogeneous: boolean;
    column_spacing: number;
    row_homogeneous: boolean;
    row_spacing: number;
  }
}
export class Grid
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<Grid>;

  constructor(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]): void;

  // Properties
  get baseline_row(): number;
  set baseline_row(val: number);
  get column_homogeneous(): boolean;
  set column_homogeneous(val: boolean);
  get column_spacing(): number;
  set column_spacing(val: number);
  get row_homogeneous(): boolean;
  set row_homogeneous(val: boolean);
  get row_spacing(): number;
  set row_spacing(val: number);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): Grid;

  // Members

  attach(
    child: Widget,
    column: number,
    row: number,
    width: number,
    height: number
  ): void;
  attach_next_to(
    child: Widget,
    sibling: Widget | null,
    side: PositionType,
    width: number,
    height: number
  ): void;
  get_baseline_row(): number;
  get_child_at(column: number, row: number): Widget | null;
  get_column_homogeneous(): boolean;
  get_column_spacing(): number;
  get_row_baseline_position(row: number): BaselinePosition;
  get_row_homogeneous(): boolean;
  get_row_spacing(): number;
  insert_column(position: number): void;
  insert_next_to(sibling: Widget, side: PositionType): void;
  insert_row(position: number): void;
  query_child(child: Widget): [number, number, number, number];
  remove(child: Widget): void;
  remove_column(position: number): void;
  remove_row(position: number): void;
  set_baseline_row(row: number): void;
  set_column_homogeneous(homogeneous: boolean): void;
  set_column_spacing(spacing: number): void;
  set_row_baseline_position(row: number, pos: BaselinePosition): void;
  set_row_homogeneous(homogeneous: boolean): void;
  set_row_spacing(spacing: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module GridLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
    baseline_row: number;
    column_homogeneous: boolean;
    column_spacing: number;
    row_homogeneous: boolean;
    row_spacing: number;
  }
}
export class GridLayout extends LayoutManager {
  static $gtype: GObject.GType<GridLayout>;

  constructor(
    properties?: Partial<GridLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GridLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get baseline_row(): number;
  set baseline_row(val: number);
  get column_homogeneous(): boolean;
  set column_homogeneous(val: boolean);
  get column_spacing(): number;
  set column_spacing(val: number);
  get row_homogeneous(): boolean;
  set row_homogeneous(val: boolean);
  get row_spacing(): number;
  set row_spacing(val: number);

  // Constructors

  static ["new"](): GridLayout;

  // Members

  get_baseline_row(): number;
  get_column_homogeneous(): boolean;
  get_column_spacing(): number;
  get_row_baseline_position(row: number): BaselinePosition;
  get_row_homogeneous(): boolean;
  get_row_spacing(): number;
  set_baseline_row(row: number): void;
  set_column_homogeneous(homogeneous: boolean): void;
  set_column_spacing(spacing: number): void;
  set_row_baseline_position(row: number, pos: BaselinePosition): void;
  set_row_homogeneous(homogeneous: boolean): void;
  set_row_spacing(spacing: number): void;
}
export module GridLayoutChild {
  export interface ConstructorProperties
    extends LayoutChild.ConstructorProperties {
    [key: string]: any;
    column: number;
    column_span: number;
    row: number;
    row_span: number;
  }
}
export class GridLayoutChild extends LayoutChild {
  static $gtype: GObject.GType<GridLayoutChild>;

  constructor(
    properties?: Partial<GridLayoutChild.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GridLayoutChild.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get column(): number;
  set column(val: number);
  get column_span(): number;
  set column_span(val: number);
  get row(): number;
  set row(val: number);
  get row_span(): number;
  set row_span(val: number);

  // Members

  get_column(): number;
  get_column_span(): number;
  get_row(): number;
  get_row_span(): number;
  set_column(column: number): void;
  set_column_span(span: number): void;
  set_row(row: number): void;
  set_row_span(span: number): void;
}
export module GridView {
  export interface ConstructorProperties
    extends ListBase.ConstructorProperties {
    [key: string]: any;
    enable_rubberband: boolean;
    factory: ListItemFactory;
    max_columns: number;
    min_columns: number;
    model: SelectionModel;
    single_click_activate: boolean;
  }
}
export class GridView
  extends ListBase
  implements Accessible, Buildable, ConstraintTarget, Orientable, Scrollable
{
  static $gtype: GObject.GType<GridView>;

  constructor(
    properties?: Partial<GridView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<GridView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get enable_rubberband(): boolean;
  set enable_rubberband(val: boolean);
  get factory(): ListItemFactory;
  set factory(val: ListItemFactory);
  get max_columns(): number;
  set max_columns(val: number);
  get min_columns(): number;
  set min_columns(val: number);
  get model(): SelectionModel;
  set model(val: SelectionModel);
  get single_click_activate(): boolean;
  set single_click_activate(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate",
    callback: (_source: this, position: number) => void
  ): number;
  connect_after(
    signal: "activate",
    callback: (_source: this, position: number) => void
  ): number;
  emit(signal: "activate", position: number): void;

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](
    model?: SelectionModel | null,
    factory?: ListItemFactory | null
  ): GridView;

  // Members

  get_enable_rubberband(): boolean;
  get_factory(): ListItemFactory | null;
  get_max_columns(): number;
  get_min_columns(): number;
  get_model(): SelectionModel | null;
  get_single_click_activate(): boolean;
  set_enable_rubberband(enable_rubberband: boolean): void;
  set_factory(factory?: ListItemFactory | null): void;
  set_max_columns(max_columns: number): void;
  set_min_columns(min_columns: number): void;
  set_model(model?: SelectionModel | null): void;
  set_single_click_activate(single_click_activate: boolean): void;

  // Implemented Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module HeaderBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    decoration_layout: string;
    show_title_buttons: boolean;
    title_widget: Widget;
  }
}
export class HeaderBar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<HeaderBar>;

  constructor(
    properties?: Partial<HeaderBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<HeaderBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get decoration_layout(): string;
  set decoration_layout(val: string);
  get show_title_buttons(): boolean;
  set show_title_buttons(val: boolean);
  get title_widget(): Widget;
  set title_widget(val: Widget);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): HeaderBar;

  // Members

  get_decoration_layout(): string | null;
  get_show_title_buttons(): boolean;
  get_title_widget(): Widget | null;
  pack_end(child: Widget): void;
  pack_start(child: Widget): void;
  remove(child: Widget): void;
  set_decoration_layout(layout?: string | null): void;
  set_show_title_buttons(setting: boolean): void;
  set_title_widget(title_widget?: Widget | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module IMContext {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    input_hints: InputHints;
    input_purpose: InputPurpose;
  }
}
export abstract class IMContext extends GObject.Object {
  static $gtype: GObject.GType<IMContext>;

  constructor(
    properties?: Partial<IMContext.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<IMContext.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get input_hints(): InputHints;
  set input_hints(val: InputHints);
  get input_purpose(): InputPurpose;
  set input_purpose(val: InputPurpose);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "commit",
    callback: (_source: this, str: string) => void
  ): number;
  connect_after(
    signal: "commit",
    callback: (_source: this, str: string) => void
  ): number;
  emit(signal: "commit", str: string): void;
  connect(
    signal: "delete-surrounding",
    callback: (_source: this, offset: number, n_chars: number) => boolean
  ): number;
  connect_after(
    signal: "delete-surrounding",
    callback: (_source: this, offset: number, n_chars: number) => boolean
  ): number;
  emit(signal: "delete-surrounding", offset: number, n_chars: number): void;
  connect(signal: "preedit-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "preedit-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "preedit-changed"): void;
  connect(signal: "preedit-end", callback: (_source: this) => void): number;
  connect_after(
    signal: "preedit-end",
    callback: (_source: this) => void
  ): number;
  emit(signal: "preedit-end"): void;
  connect(signal: "preedit-start", callback: (_source: this) => void): number;
  connect_after(
    signal: "preedit-start",
    callback: (_source: this) => void
  ): number;
  emit(signal: "preedit-start"): void;
  connect(
    signal: "retrieve-surrounding",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "retrieve-surrounding",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "retrieve-surrounding"): void;

  // Members

  delete_surrounding(offset: number, n_chars: number): boolean;
  filter_key(
    press: boolean,
    surface: Gdk.Surface,
    device: Gdk.Device,
    time: number,
    keycode: number,
    state: Gdk.ModifierType,
    group: number
  ): boolean;
  filter_keypress(event: Gdk.Event): boolean;
  focus_in(): void;
  focus_out(): void;
  get_preedit_string(): [string, Pango.AttrList, number];
  get_surrounding(): [boolean, string, number];
  get_surrounding_with_selection(): [boolean, string, number, number];
  reset(): void;
  set_client_widget(widget?: Widget | null): void;
  set_cursor_location(area: Gdk.Rectangle): void;
  set_surrounding(text: string, len: number, cursor_index: number): void;
  set_surrounding_with_selection(
    text: string,
    len: number,
    cursor_index: number,
    anchor_index: number
  ): void;
  set_use_preedit(use_preedit: boolean): void;
  vfunc_activate_osk(): void;
  vfunc_commit(str: string): void;
  vfunc_delete_surrounding(offset: number, n_chars: number): boolean;
  vfunc_filter_keypress(event: Gdk.Event): boolean;
  vfunc_focus_in(): void;
  vfunc_focus_out(): void;
  vfunc_get_preedit_string(): [string, Pango.AttrList, number];
  vfunc_get_surrounding(): [boolean, string, number];
  vfunc_get_surrounding_with_selection(): [boolean, string, number, number];
  vfunc_preedit_changed(): void;
  vfunc_preedit_end(): void;
  vfunc_preedit_start(): void;
  vfunc_reset(): void;
  vfunc_retrieve_surrounding(): boolean;
  vfunc_set_client_widget(widget?: Widget | null): void;
  vfunc_set_cursor_location(area: Gdk.Rectangle): void;
  vfunc_set_surrounding(text: string, len: number, cursor_index: number): void;
  vfunc_set_surrounding_with_selection(
    text: string,
    len: number,
    cursor_index: number,
    anchor_index: number
  ): void;
  vfunc_set_use_preedit(use_preedit: boolean): void;
}
export module IMContextSimple {
  export interface ConstructorProperties
    extends IMContext.ConstructorProperties {
    [key: string]: any;
  }
}
export class IMContextSimple extends IMContext {
  static $gtype: GObject.GType<IMContextSimple>;

  constructor(
    properties?: Partial<IMContextSimple.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<IMContextSimple.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Fields
  object: IMContext;

  // Constructors

  static ["new"](): IMContextSimple;

  // Members

  add_compose_file(compose_file: string): void;
}
export module IMMulticontext {
  export interface ConstructorProperties
    extends IMContext.ConstructorProperties {
    [key: string]: any;
  }
}
export class IMMulticontext extends IMContext {
  static $gtype: GObject.GType<IMMulticontext>;

  constructor(
    properties?: Partial<IMMulticontext.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<IMMulticontext.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Fields
  object: IMContext;

  // Constructors

  static ["new"](): IMMulticontext;

  // Members

  get_context_id(): string;
  set_context_id(context_id?: string | null): void;
}
export module IconPaintable {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    file: Gio.File;
    icon_name: string;
    is_symbolic: boolean;
  }
}
export class IconPaintable
  extends GObject.Object
  implements Gdk.Paintable, SymbolicPaintable
{
  static $gtype: GObject.GType<IconPaintable>;

  constructor(
    properties?: Partial<IconPaintable.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<IconPaintable.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get file(): Gio.File;
  get icon_name(): string;
  get is_symbolic(): boolean;

  // Constructors

  static new_for_file(
    file: Gio.File,
    size: number,
    scale: number
  ): IconPaintable;

  // Members

  get_file(): Gio.File | null;
  get_icon_name(): string | null;

  // Implemented Members

  compute_concrete_size(
    specified_width: number,
    specified_height: number,
    default_width: number,
    default_height: number
  ): [number, number];
  get_current_image(): Gdk.Paintable;
  get_flags(): Gdk.PaintableFlags;
  get_intrinsic_aspect_ratio(): number;
  get_intrinsic_height(): number;
  get_intrinsic_width(): number;
  invalidate_contents(): void;
  invalidate_size(): void;
  snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
  vfunc_get_current_image(): Gdk.Paintable;
  vfunc_get_flags(): Gdk.PaintableFlags;
  vfunc_get_intrinsic_aspect_ratio(): number;
  vfunc_get_intrinsic_height(): number;
  vfunc_get_intrinsic_width(): number;
  vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
  snapshot_symbolic(
    snapshot: Gdk.Snapshot,
    width: number,
    height: number,
    colors: Gdk.RGBA[]
  ): void;
  vfunc_snapshot_symbolic(
    snapshot: Gdk.Snapshot,
    width: number,
    height: number,
    colors: Gdk.RGBA[]
  ): void;
}
export module IconTheme {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    display: Gdk.Display;
    icon_names: string[];
    resource_path: string[];
    search_path: string[];
    theme_name: string;
  }
}
export class IconTheme extends GObject.Object {
  static $gtype: GObject.GType<IconTheme>;

  constructor(
    properties?: Partial<IconTheme.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<IconTheme.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get display(): Gdk.Display;
  set display(val: Gdk.Display);
  get icon_names(): string[];
  get resource_path(): string[];
  set resource_path(val: string[]);
  get search_path(): string[];
  set search_path(val: string[]);
  get theme_name(): string;
  set theme_name(val: string);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;

  // Constructors

  static ["new"](): IconTheme;

  // Members

  add_resource_path(path: string): void;
  add_search_path(path: string): void;
  get_display(): Gdk.Display | null;
  get_icon_names(): string[];
  get_icon_sizes(icon_name: string): number[];
  get_resource_path(): string[] | null;
  get_search_path(): string[] | null;
  get_theme_name(): string;
  has_gicon(gicon: Gio.Icon): boolean;
  has_icon(icon_name: string): boolean;
  lookup_by_gicon(
    icon: Gio.Icon,
    size: number,
    scale: number,
    direction: TextDirection,
    flags: IconLookupFlags
  ): IconPaintable;
  lookup_icon(
    icon_name: string,
    fallbacks: string[] | null,
    size: number,
    scale: number,
    direction: TextDirection,
    flags: IconLookupFlags
  ): IconPaintable;
  set_resource_path(path?: string[] | null): void;
  set_search_path(path?: string[] | null): void;
  set_theme_name(theme_name?: string | null): void;
  static get_for_display(display: Gdk.Display): IconTheme;
}
export module IconView {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activate_on_single_click: boolean;
    cell_area: CellArea;
    column_spacing: number;
    columns: number;
    item_orientation: Orientation;
    item_padding: number;
    item_width: number;
    margin: number;
    markup_column: number;
    model: TreeModel;
    pixbuf_column: number;
    reorderable: boolean;
    row_spacing: number;
    selection_mode: SelectionMode;
    spacing: number;
    text_column: number;
    tooltip_column: number;
  }
}
export class IconView
  extends Widget
  implements Accessible, Buildable, CellLayout, ConstraintTarget, Scrollable
{
  static $gtype: GObject.GType<IconView>;

  constructor(
    properties?: Partial<IconView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<IconView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activate_on_single_click(): boolean;
  set activate_on_single_click(val: boolean);
  get cell_area(): CellArea;
  get column_spacing(): number;
  set column_spacing(val: number);
  get columns(): number;
  set columns(val: number);
  get item_orientation(): Orientation;
  set item_orientation(val: Orientation);
  get item_padding(): number;
  set item_padding(val: number);
  get item_width(): number;
  set item_width(val: number);
  get margin(): number;
  set margin(val: number);
  get markup_column(): number;
  set markup_column(val: number);
  get model(): TreeModel;
  set model(val: TreeModel);
  get pixbuf_column(): number;
  set pixbuf_column(val: number);
  get reorderable(): boolean;
  set reorderable(val: boolean);
  get row_spacing(): number;
  set row_spacing(val: number);
  get selection_mode(): SelectionMode;
  set selection_mode(val: SelectionMode);
  get spacing(): number;
  set spacing(val: number);
  get text_column(): number;
  set text_column(val: number);
  get tooltip_column(): number;
  set tooltip_column(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-cursor-item",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "activate-cursor-item",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "activate-cursor-item"): void;
  connect(
    signal: "item-activated",
    callback: (_source: this, path: TreePath) => void
  ): number;
  connect_after(
    signal: "item-activated",
    callback: (_source: this, path: TreePath) => void
  ): number;
  emit(signal: "item-activated", path: TreePath): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend: boolean,
      modify: boolean
    ) => boolean
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend: boolean,
      modify: boolean
    ) => boolean
  ): number;
  emit(
    signal: "move-cursor",
    step: MovementStep,
    count: number,
    extend: boolean,
    modify: boolean
  ): void;
  connect(signal: "select-all", callback: (_source: this) => void): number;
  connect_after(
    signal: "select-all",
    callback: (_source: this) => void
  ): number;
  emit(signal: "select-all"): void;
  connect(
    signal: "select-cursor-item",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "select-cursor-item",
    callback: (_source: this) => void
  ): number;
  emit(signal: "select-cursor-item"): void;
  connect(
    signal: "selection-changed",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "selection-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "selection-changed"): void;
  connect(
    signal: "toggle-cursor-item",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "toggle-cursor-item",
    callback: (_source: this) => void
  ): number;
  emit(signal: "toggle-cursor-item"): void;
  connect(signal: "unselect-all", callback: (_source: this) => void): number;
  connect_after(
    signal: "unselect-all",
    callback: (_source: this) => void
  ): number;
  emit(signal: "unselect-all"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](): IconView;
  static new_with_area(area: CellArea): IconView;
  static new_with_model(model: TreeModel): IconView;

  // Members

  create_drag_icon(path: TreePath): Gdk.Paintable | null;
  enable_model_drag_dest(
    formats: Gdk.ContentFormats,
    actions: Gdk.DragAction
  ): void;
  enable_model_drag_source(
    start_button_mask: Gdk.ModifierType,
    formats: Gdk.ContentFormats,
    actions: Gdk.DragAction
  ): void;
  get_activate_on_single_click(): boolean;
  get_cell_rect(
    path: TreePath,
    cell: CellRenderer | null
  ): [boolean, Gdk.Rectangle];
  get_column_spacing(): number;
  get_columns(): number;
  get_cursor(): [boolean, TreePath | null, CellRenderer | null];
  // Conflicted with Gtk.Widget.get_cursor
  get_cursor(...args: never[]): any;
  get_dest_item_at_pos(
    drag_x: number,
    drag_y: number
  ): [boolean, TreePath | null, IconViewDropPosition | null];
  get_drag_dest_item(): [TreePath | null, IconViewDropPosition | null];
  get_item_at_pos(
    x: number,
    y: number
  ): [boolean, TreePath | null, CellRenderer | null];
  get_item_column(path: TreePath): number;
  get_item_orientation(): Orientation;
  get_item_padding(): number;
  get_item_row(path: TreePath): number;
  get_item_width(): number;
  get_margin(): number;
  get_markup_column(): number;
  get_model(): TreeModel | null;
  get_path_at_pos(x: number, y: number): TreePath | null;
  get_pixbuf_column(): number;
  get_reorderable(): boolean;
  get_row_spacing(): number;
  get_selected_items(): TreePath[];
  get_selection_mode(): SelectionMode;
  get_spacing(): number;
  get_text_column(): number;
  get_tooltip_column(): number;
  get_tooltip_context(
    x: number,
    y: number,
    keyboard_tip: boolean
  ): [boolean, TreeModel | null, TreePath | null, TreeIter | null];
  get_visible_range(): [boolean, TreePath | null, TreePath | null];
  item_activated(path: TreePath): void;
  path_is_selected(path: TreePath): boolean;
  scroll_to_path(
    path: TreePath,
    use_align: boolean,
    row_align: number,
    col_align: number
  ): void;
  select_all(): void;
  select_path(path: TreePath): void;
  selected_foreach(func: IconViewForeachFunc): void;
  set_activate_on_single_click(single: boolean): void;
  set_column_spacing(column_spacing: number): void;
  set_columns(columns: number): void;
  set_cursor(
    path: TreePath,
    cell: CellRenderer | null,
    start_editing: boolean
  ): void;
  // Conflicted with Gtk.Widget.set_cursor
  set_cursor(...args: never[]): any;
  set_drag_dest_item(path: TreePath | null, pos: IconViewDropPosition): void;
  set_item_orientation(orientation: Orientation): void;
  set_item_padding(item_padding: number): void;
  set_item_width(item_width: number): void;
  set_margin(margin: number): void;
  set_markup_column(column: number): void;
  set_model(model?: TreeModel | null): void;
  set_pixbuf_column(column: number): void;
  set_reorderable(reorderable: boolean): void;
  set_row_spacing(row_spacing: number): void;
  set_selection_mode(mode: SelectionMode): void;
  set_spacing(spacing: number): void;
  set_text_column(column: number): void;
  set_tooltip_cell(
    tooltip: Tooltip,
    path: TreePath,
    cell?: CellRenderer | null
  ): void;
  set_tooltip_column(column: number): void;
  set_tooltip_item(tooltip: Tooltip, path: TreePath): void;
  unselect_all(): void;
  unselect_path(path: TreePath): void;
  unset_model_drag_dest(): void;
  unset_model_drag_source(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module Image {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    file: string;
    gicon: Gio.Icon;
    icon_name: string;
    icon_size: IconSize;
    paintable: Gdk.Paintable;
    pixel_size: number;
    resource: string;
    storage_type: ImageType;
    use_fallback: boolean;
  }
}
export class Image
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Image>;

  constructor(
    properties?: Partial<Image.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Image.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get file(): string;
  set file(val: string);
  get gicon(): Gio.Icon;
  set gicon(val: Gio.Icon);
  get icon_name(): string;
  set icon_name(val: string);
  get icon_size(): IconSize;
  set icon_size(val: IconSize);
  get paintable(): Gdk.Paintable;
  set paintable(val: Gdk.Paintable);
  get pixel_size(): number;
  set pixel_size(val: number);
  get resource(): string;
  set resource(val: string);
  get storage_type(): ImageType;
  get use_fallback(): boolean;
  set use_fallback(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Image;
  static new_from_file(filename: string): Image;
  static new_from_gicon(icon: Gio.Icon): Image;
  static new_from_icon_name(icon_name?: string | null): Image;
  static new_from_paintable(paintable?: Gdk.Paintable | null): Image;
  static new_from_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): Image;
  static new_from_resource(resource_path: string): Image;

  // Members

  clear(): void;
  get_gicon(): Gio.Icon | null;
  get_icon_name(): string | null;
  get_icon_size(): IconSize;
  get_paintable(): Gdk.Paintable | null;
  get_pixel_size(): number;
  get_storage_type(): ImageType;
  set_from_file(filename?: string | null): void;
  set_from_gicon(icon: Gio.Icon): void;
  set_from_icon_name(icon_name?: string | null): void;
  set_from_paintable(paintable?: Gdk.Paintable | null): void;
  set_from_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
  set_from_resource(resource_path?: string | null): void;
  set_icon_size(icon_size: IconSize): void;
  set_pixel_size(pixel_size: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module InfoBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    message_type: MessageType;
    revealed: boolean;
    show_close_button: boolean;
  }
}
export class InfoBar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<InfoBar>;

  constructor(
    properties?: Partial<InfoBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<InfoBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get message_type(): MessageType;
  set message_type(val: MessageType);
  get revealed(): boolean;
  set revealed(val: boolean);
  get show_close_button(): boolean;
  set show_close_button(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "close", callback: (_source: this) => void): number;
  connect_after(signal: "close", callback: (_source: this) => void): number;
  emit(signal: "close"): void;
  connect(
    signal: "response",
    callback: (_source: this, response_id: number) => void
  ): number;
  connect_after(
    signal: "response",
    callback: (_source: this, response_id: number) => void
  ): number;
  emit(signal: "response", response_id: number): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): InfoBar;

  // Members

  add_action_widget(child: Widget, response_id: number): void;
  add_button(button_text: string, response_id: number): Button;
  add_child(widget: Widget): void;
  get_message_type(): MessageType;
  get_revealed(): boolean;
  get_show_close_button(): boolean;
  remove_action_widget(widget: Widget): void;
  remove_child(widget: Widget): void;
  response(response_id: number): void;
  set_default_response(response_id: number): void;
  set_message_type(message_type: MessageType): void;
  set_response_sensitive(response_id: number, setting: boolean): void;
  set_revealed(revealed: boolean): void;
  set_show_close_button(setting: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Inscription {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    attributes: Pango.AttrList;
    markup: string;
    min_chars: number;
    min_lines: number;
    nat_chars: number;
    nat_lines: number;
    text: string;
    text_overflow: InscriptionOverflow;
    wrap_mode: Pango.WrapMode;
    xalign: number;
    yalign: number;
  }
}
export class Inscription
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Inscription>;

  constructor(
    properties?: Partial<Inscription.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Inscription.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get attributes(): Pango.AttrList;
  set attributes(val: Pango.AttrList);
  set markup(val: string);
  get min_chars(): number;
  set min_chars(val: number);
  get min_lines(): number;
  set min_lines(val: number);
  get nat_chars(): number;
  set nat_chars(val: number);
  get nat_lines(): number;
  set nat_lines(val: number);
  get text(): string;
  set text(val: string);
  get text_overflow(): InscriptionOverflow;
  set text_overflow(val: InscriptionOverflow);
  get wrap_mode(): Pango.WrapMode;
  set wrap_mode(val: Pango.WrapMode);
  get xalign(): number;
  set xalign(val: number);
  get yalign(): number;
  set yalign(val: number);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](text?: string | null): Inscription;

  // Members

  get_attributes(): Pango.AttrList | null;
  get_min_chars(): number;
  get_min_lines(): number;
  get_nat_chars(): number;
  get_nat_lines(): number;
  get_text(): string | null;
  get_text_overflow(): InscriptionOverflow;
  get_wrap_mode(): Pango.WrapMode;
  get_xalign(): number;
  get_yalign(): number;
  set_attributes(attrs?: Pango.AttrList | null): void;
  set_markup(markup?: string | null): void;
  set_min_chars(min_chars: number): void;
  set_min_lines(min_lines: number): void;
  set_nat_chars(nat_chars: number): void;
  set_nat_lines(nat_lines: number): void;
  set_text(text?: string | null): void;
  set_text_overflow(overflow: InscriptionOverflow): void;
  set_wrap_mode(wrap_mode: Pango.WrapMode): void;
  set_xalign(xalign: number): void;
  set_yalign(yalign: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module KeyvalTrigger {
  export interface ConstructorProperties
    extends ShortcutTrigger.ConstructorProperties {
    [key: string]: any;
    keyval: number;
    modifiers: Gdk.ModifierType;
  }
}
export class KeyvalTrigger extends ShortcutTrigger {
  static $gtype: GObject.GType<KeyvalTrigger>;

  constructor(
    properties?: Partial<KeyvalTrigger.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<KeyvalTrigger.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get keyval(): number;
  get modifiers(): Gdk.ModifierType;

  // Constructors

  static ["new"](keyval: number, modifiers: Gdk.ModifierType): KeyvalTrigger;

  // Members

  get_keyval(): number;
  get_modifiers(): Gdk.ModifierType;
}
export module Label {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    attributes: Pango.AttrList;
    ellipsize: Pango.EllipsizeMode;
    extra_menu: Gio.MenuModel;
    justify: Justification;
    label: string;
    lines: number;
    max_width_chars: number;
    mnemonic_keyval: number;
    mnemonic_widget: Widget;
    natural_wrap_mode: NaturalWrapMode;
    selectable: boolean;
    single_line_mode: boolean;
    tabs: Pango.TabArray;
    use_markup: boolean;
    use_underline: boolean;
    width_chars: number;
    wrap: boolean;
    wrap_mode: Pango.WrapMode;
    xalign: number;
    yalign: number;
  }
}
export class Label
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Label>;

  constructor(
    properties?: Partial<Label.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Label.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get attributes(): Pango.AttrList;
  set attributes(val: Pango.AttrList);
  get ellipsize(): Pango.EllipsizeMode;
  set ellipsize(val: Pango.EllipsizeMode);
  get extra_menu(): Gio.MenuModel;
  set extra_menu(val: Gio.MenuModel);
  get justify(): Justification;
  set justify(val: Justification);
  get label(): string;
  set label(val: string);
  get lines(): number;
  set lines(val: number);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get mnemonic_keyval(): number;
  get mnemonic_widget(): Widget;
  set mnemonic_widget(val: Widget);
  get natural_wrap_mode(): NaturalWrapMode;
  set natural_wrap_mode(val: NaturalWrapMode);
  get selectable(): boolean;
  set selectable(val: boolean);
  get single_line_mode(): boolean;
  set single_line_mode(val: boolean);
  get tabs(): Pango.TabArray;
  set tabs(val: Pango.TabArray);
  get use_markup(): boolean;
  set use_markup(val: boolean);
  get use_underline(): boolean;
  set use_underline(val: boolean);
  get width_chars(): number;
  set width_chars(val: number);
  get wrap(): boolean;
  set wrap(val: boolean);
  get wrap_mode(): Pango.WrapMode;
  set wrap_mode(val: Pango.WrapMode);
  get xalign(): number;
  set xalign(val: number);
  get yalign(): number;
  set yalign(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-current-link",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "activate-current-link",
    callback: (_source: this) => void
  ): number;
  emit(signal: "activate-current-link"): void;
  connect(
    signal: "activate-link",
    callback: (_source: this, uri: string) => boolean
  ): number;
  connect_after(
    signal: "activate-link",
    callback: (_source: this, uri: string) => boolean
  ): number;
  emit(signal: "activate-link", uri: string): void;
  connect(signal: "copy-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "copy-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "copy-clipboard"): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend_selection: boolean
    ) => void
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend_selection: boolean
    ) => void
  ): number;
  emit(
    signal: "move-cursor",
    step: MovementStep,
    count: number,
    extend_selection: boolean
  ): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](str?: string | null): Label;
  static new_with_mnemonic(str?: string | null): Label;

  // Members

  get_attributes(): Pango.AttrList | null;
  get_current_uri(): string | null;
  get_ellipsize(): Pango.EllipsizeMode;
  get_extra_menu(): Gio.MenuModel | null;
  get_justify(): Justification;
  get_label(): string;
  get_layout(): Pango.Layout;
  get_layout_offsets(): [number, number];
  get_lines(): number;
  get_max_width_chars(): number;
  get_mnemonic_keyval(): number;
  get_mnemonic_widget(): Widget | null;
  get_natural_wrap_mode(): NaturalWrapMode;
  get_selectable(): boolean;
  get_selection_bounds(): [boolean, number, number];
  get_single_line_mode(): boolean;
  get_tabs(): Pango.TabArray | null;
  get_text(): string;
  get_use_markup(): boolean;
  get_use_underline(): boolean;
  get_width_chars(): number;
  get_wrap(): boolean;
  get_wrap_mode(): Pango.WrapMode;
  get_xalign(): number;
  get_yalign(): number;
  select_region(start_offset: number, end_offset: number): void;
  set_attributes(attrs?: Pango.AttrList | null): void;
  set_ellipsize(mode: Pango.EllipsizeMode): void;
  set_extra_menu(model?: Gio.MenuModel | null): void;
  set_justify(jtype: Justification): void;
  set_label(str: string): void;
  set_lines(lines: number): void;
  set_markup(str: string): void;
  set_markup_with_mnemonic(str: string): void;
  set_max_width_chars(n_chars: number): void;
  set_mnemonic_widget(widget?: Widget | null): void;
  set_natural_wrap_mode(wrap_mode: NaturalWrapMode): void;
  set_selectable(setting: boolean): void;
  set_single_line_mode(single_line_mode: boolean): void;
  set_tabs(tabs?: Pango.TabArray | null): void;
  set_text(str: string): void;
  set_text_with_mnemonic(str: string): void;
  set_use_markup(setting: boolean): void;
  set_use_underline(setting: boolean): void;
  set_width_chars(n_chars: number): void;
  set_wrap(wrap: boolean): void;
  set_wrap_mode(wrap_mode: Pango.WrapMode): void;
  set_xalign(xalign: number): void;
  set_yalign(yalign: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module LayoutChild {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    child_widget: Widget;
    layout_manager: LayoutManager;
  }
}
export abstract class LayoutChild extends GObject.Object {
  static $gtype: GObject.GType<LayoutChild>;

  constructor(
    properties?: Partial<LayoutChild.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<LayoutChild.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child_widget(): Widget;
  get layout_manager(): LayoutManager;

  // Members

  get_child_widget(): Widget;
  get_layout_manager(): LayoutManager;
}
export module LayoutManager {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export abstract class LayoutManager extends GObject.Object {
  static $gtype: GObject.GType<LayoutManager>;

  constructor(
    properties?: Partial<LayoutManager.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<LayoutManager.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  allocate(
    widget: Widget,
    width: number,
    height: number,
    baseline: number
  ): void;
  get_layout_child(child: Widget): LayoutChild;
  get_request_mode(): SizeRequestMode;
  get_widget(): Widget | null;
  layout_changed(): void;
  measure(
    widget: Widget,
    orientation: Orientation,
    for_size: number
  ): [number, number, number, number];
  vfunc_allocate(
    widget: Widget,
    width: number,
    height: number,
    baseline: number
  ): void;
  vfunc_create_layout_child(widget: Widget, for_child: Widget): LayoutChild;
  vfunc_get_request_mode(widget: Widget): SizeRequestMode;
  vfunc_measure(
    widget: Widget,
    orientation: Orientation,
    for_size: number
  ): [number, number, number, number];
  vfunc_root(): void;
  vfunc_unroot(): void;
}
export module LevelBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    inverted: boolean;
    max_value: number;
    min_value: number;
    mode: LevelBarMode;
    value: number;
  }
}
export class LevelBar
  extends Widget
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<LevelBar>;

  constructor(
    properties?: Partial<LevelBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<LevelBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get inverted(): boolean;
  set inverted(val: boolean);
  get max_value(): number;
  set max_value(val: number);
  get min_value(): number;
  set min_value(val: number);
  get mode(): LevelBarMode;
  set mode(val: LevelBarMode);
  get value(): number;
  set value(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "offset-changed",
    callback: (_source: this, name: string) => void
  ): number;
  connect_after(
    signal: "offset-changed",
    callback: (_source: this, name: string) => void
  ): number;
  emit(signal: "offset-changed", name: string): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): LevelBar;
  static new_for_interval(min_value: number, max_value: number): LevelBar;

  // Members

  add_offset_value(name: string, value: number): void;
  get_inverted(): boolean;
  get_max_value(): number;
  get_min_value(): number;
  get_mode(): LevelBarMode;
  get_offset_value(name: string | null): [boolean, number];
  get_value(): number;
  remove_offset_value(name?: string | null): void;
  set_inverted(inverted: boolean): void;
  set_max_value(value: number): void;
  set_min_value(value: number): void;
  set_mode(mode: LevelBarMode): void;
  set_value(value: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  vfunc_set_current_value(value: number): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module LinkButton {
  export interface ConstructorProperties extends Button.ConstructorProperties {
    [key: string]: any;
    uri: string;
    visited: boolean;
  }
}
export class LinkButton
  extends Button
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<LinkButton>;

  constructor(
    properties?: Partial<LinkButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<LinkButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get uri(): string;
  set uri(val: string);
  get visited(): boolean;
  set visited(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-link",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "activate-link",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "activate-link"): void;

  // Implemented Properties

  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](uri: string): LinkButton;
  // Conflicted with Gtk.Button.new
  static ["new"](...args: never[]): any;
  static new_with_label(uri: string, label?: string | null): LinkButton;
  // Conflicted with Gtk.Button.new_with_label
  static new_with_label(...args: never[]): any;

  // Members

  get_uri(): string;
  get_visited(): boolean;
  set_uri(uri: string): void;
  set_visited(visited: boolean): void;

  // Implemented Members

  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}
export module ListBase {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    orientation: Orientation;
  }
}
export abstract class ListBase
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable, Scrollable
{
  static $gtype: GObject.GType<ListBase>;

  constructor(
    properties?: Partial<ListBase.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListBase.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module ListBox {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    accept_unpaired_release: boolean;
    activate_on_single_click: boolean;
    selection_mode: SelectionMode;
    show_separators: boolean;
  }
}
export class ListBox
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ListBox>;

  constructor(
    properties?: Partial<ListBox.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListBox.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accept_unpaired_release(): boolean;
  set accept_unpaired_release(val: boolean);
  get activate_on_single_click(): boolean;
  set activate_on_single_click(val: boolean);
  get selection_mode(): SelectionMode;
  set selection_mode(val: SelectionMode);
  get show_separators(): boolean;
  set show_separators(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-cursor-row",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "activate-cursor-row",
    callback: (_source: this) => void
  ): number;
  emit(signal: "activate-cursor-row"): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      object: MovementStep,
      p0: number,
      p1: boolean,
      p2: boolean
    ) => void
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      object: MovementStep,
      p0: number,
      p1: boolean,
      p2: boolean
    ) => void
  ): number;
  emit(
    signal: "move-cursor",
    object: MovementStep,
    p0: number,
    p1: boolean,
    p2: boolean
  ): void;
  connect(
    signal: "row-activated",
    callback: (_source: this, row: ListBoxRow) => void
  ): number;
  connect_after(
    signal: "row-activated",
    callback: (_source: this, row: ListBoxRow) => void
  ): number;
  emit(signal: "row-activated", row: ListBoxRow): void;
  connect(
    signal: "row-selected",
    callback: (_source: this, row: ListBoxRow | null) => void
  ): number;
  connect_after(
    signal: "row-selected",
    callback: (_source: this, row: ListBoxRow | null) => void
  ): number;
  emit(signal: "row-selected", row: ListBoxRow | null): void;
  connect(signal: "select-all", callback: (_source: this) => void): number;
  connect_after(
    signal: "select-all",
    callback: (_source: this) => void
  ): number;
  emit(signal: "select-all"): void;
  connect(
    signal: "selected-rows-changed",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "selected-rows-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "selected-rows-changed"): void;
  connect(
    signal: "toggle-cursor-row",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "toggle-cursor-row",
    callback: (_source: this) => void
  ): number;
  emit(signal: "toggle-cursor-row"): void;
  connect(signal: "unselect-all", callback: (_source: this) => void): number;
  connect_after(
    signal: "unselect-all",
    callback: (_source: this) => void
  ): number;
  emit(signal: "unselect-all"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): ListBox;

  // Members

  append(child: Widget): void;
  bind_model(
    model?: Gio.ListModel | null,
    create_widget_func?: ListBoxCreateWidgetFunc | null
  ): void;
  drag_highlight_row(row: ListBoxRow): void;
  drag_unhighlight_row(): void;
  get_activate_on_single_click(): boolean;
  get_adjustment(): Adjustment | null;
  get_row_at_index(index_: number): ListBoxRow | null;
  get_row_at_y(y: number): ListBoxRow | null;
  get_selected_row(): ListBoxRow | null;
  get_selected_rows(): ListBoxRow[];
  get_selection_mode(): SelectionMode;
  get_show_separators(): boolean;
  insert(child: Widget, position: number): void;
  invalidate_filter(): void;
  invalidate_headers(): void;
  invalidate_sort(): void;
  prepend(child: Widget): void;
  remove(child: Widget): void;
  select_all(): void;
  select_row(row?: ListBoxRow | null): void;
  selected_foreach(func: ListBoxForeachFunc): void;
  set_activate_on_single_click(single: boolean): void;
  set_adjustment(adjustment?: Adjustment | null): void;
  set_filter_func(filter_func?: ListBoxFilterFunc | null): void;
  set_header_func(update_header?: ListBoxUpdateHeaderFunc | null): void;
  set_placeholder(placeholder?: Widget | null): void;
  set_selection_mode(mode: SelectionMode): void;
  set_show_separators(show_separators: boolean): void;
  set_sort_func(sort_func?: ListBoxSortFunc | null): void;
  unselect_all(): void;
  unselect_row(row: ListBoxRow): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ListBoxRow {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activatable: boolean;
    child: Widget;
    selectable: boolean;
  }
}
export class ListBoxRow
  extends Widget
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ListBoxRow>;

  constructor(
    properties?: Partial<ListBoxRow.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListBoxRow.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activatable(): boolean;
  set activatable(val: boolean);
  get child(): Widget;
  set child(val: Widget);
  get selectable(): boolean;
  set selectable(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](): ListBoxRow;

  // Members

  changed(): void;
  get_activatable(): boolean;
  get_child(): Widget | null;
  get_header(): Widget | null;
  get_index(): number;
  get_selectable(): boolean;
  is_selected(): boolean;
  set_activatable(activatable: boolean): void;
  set_child(child?: Widget | null): void;
  set_header(header?: Widget | null): void;
  set_selectable(selectable: boolean): void;
  vfunc_activate(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ListItem {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    activatable: boolean;
    child: Widget;
    item: GObject.Object;
    position: number;
    selectable: boolean;
    selected: boolean;
  }
}
export class ListItem extends GObject.Object {
  static $gtype: GObject.GType<ListItem>;

  constructor(
    properties?: Partial<ListItem.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListItem.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activatable(): boolean;
  set activatable(val: boolean);
  get child(): Widget;
  set child(val: Widget);
  get item(): GObject.Object;
  get position(): number;
  get selectable(): boolean;
  set selectable(val: boolean);
  get selected(): boolean;

  // Members

  get_activatable(): boolean;
  get_child(): Widget | null;
  get_item<T = GObject.Object>(): T;
  get_position(): number;
  get_selectable(): boolean;
  get_selected(): boolean;
  set_activatable(activatable: boolean): void;
  set_child(child?: Widget | null): void;
  set_selectable(selectable: boolean): void;
}
export module ListItemFactory {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class ListItemFactory extends GObject.Object {
  static $gtype: GObject.GType<ListItemFactory>;

  constructor(
    properties?: Partial<ListItemFactory.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListItemFactory.ConstructorProperties>,
    ...args: any[]
  ): void;
}
export module ListStore {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class ListStore
  extends GObject.Object
  implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable
{
  static $gtype: GObject.GType<ListStore>;

  constructor(
    properties?: Partial<ListStore.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListStore.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](types: GObject.GType[]): ListStore;

  // Members

  append(): TreeIter;
  clear(): void;
  insert(position: number): TreeIter;
  insert_after(sibling?: TreeIter | null): TreeIter;
  insert_before(sibling?: TreeIter | null): TreeIter;
  insert_with_values(
    position: number,
    columns: number[],
    values: GObject.Value[]
  ): TreeIter | null;
  iter_is_valid(iter: TreeIter): boolean;
  move_after(iter: TreeIter, position?: TreeIter | null): void;
  move_before(iter: TreeIter, position?: TreeIter | null): void;
  prepend(): TreeIter;
  remove(iter: TreeIter): boolean;
  reorder(new_order: number[]): void;
  set_column_types(types: GObject.GType[]): void;
  set_value(iter: TreeIter, column: number, value: GObject.Value | any): void;
  set(iter: TreeIter, columns: number[], values: GObject.Value[]): void;
  // Conflicted with GObject.Object.set
  set(...args: never[]): any;
  swap(a: TreeIter, b: TreeIter): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  drag_data_received(dest: TreePath, value: GObject.Value | any): boolean;
  row_drop_possible(dest_path: TreePath, value: GObject.Value | any): boolean;
  vfunc_drag_data_received(dest: TreePath, value: GObject.Value | any): boolean;
  vfunc_row_drop_possible(
    dest_path: TreePath,
    value: GObject.Value | any
  ): boolean;
  drag_data_delete(path: TreePath): boolean;
  drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  row_draggable(path: TreePath): boolean;
  vfunc_drag_data_delete(path: TreePath): boolean;
  vfunc_drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  vfunc_row_draggable(path: TreePath): boolean;
  filter_new(root?: TreePath | null): TreeModel;
  foreach(func: TreeModelForeachFunc): void;
  get_column_type(index_: number): GObject.GType;
  get_flags(): TreeModelFlags;
  get_iter(path: TreePath): [boolean, TreeIter];
  get_iter_first(): [boolean, TreeIter];
  get_iter_from_string(path_string: string): [boolean, TreeIter];
  get_n_columns(): number;
  get_path(iter: TreeIter): TreePath;
  get_string_from_iter(iter: TreeIter): string | null;
  get_value(iter: TreeIter, column: number): unknown;
  iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  iter_has_child(iter: TreeIter): boolean;
  iter_n_children(iter?: TreeIter | null): number;
  iter_next(iter: TreeIter): boolean;
  iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  iter_parent(child: TreeIter): [boolean, TreeIter];
  iter_previous(iter: TreeIter): boolean;
  ref_node(iter: TreeIter): void;
  row_changed(path: TreePath, iter: TreeIter): void;
  row_deleted(path: TreePath): void;
  row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  row_inserted(path: TreePath, iter: TreeIter): void;
  rows_reordered(
    path: TreePath,
    iter: TreeIter | null,
    new_order: number[]
  ): void;
  unref_node(iter: TreeIter): void;
  vfunc_get_column_type(index_: number): GObject.GType;
  vfunc_get_flags(): TreeModelFlags;
  vfunc_get_iter(path: TreePath): [boolean, TreeIter];
  vfunc_get_n_columns(): number;
  vfunc_get_path(iter: TreeIter): TreePath;
  vfunc_get_value(iter: TreeIter, column: number): unknown;
  vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  vfunc_iter_has_child(iter: TreeIter): boolean;
  vfunc_iter_n_children(iter?: TreeIter | null): number;
  vfunc_iter_next(iter: TreeIter): boolean;
  vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
  vfunc_iter_previous(iter: TreeIter): boolean;
  vfunc_ref_node(iter: TreeIter): void;
  vfunc_row_changed(path: TreePath, iter: TreeIter): void;
  vfunc_row_deleted(path: TreePath): void;
  vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
  vfunc_unref_node(iter: TreeIter): void;
  get_sort_column_id(): [boolean, number, SortType];
  has_default_sort_func(): boolean;
  set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_sort_column_id(sort_column_id: number, order: SortType): void;
  set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  sort_column_changed(): void;
  vfunc_get_sort_column_id(): [boolean, number, SortType];
  vfunc_has_default_sort_func(): boolean;
  vfunc_set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
  vfunc_set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_sort_column_changed(): void;
}
export module ListView {
  export interface ConstructorProperties
    extends ListBase.ConstructorProperties {
    [key: string]: any;
    enable_rubberband: boolean;
    factory: ListItemFactory;
    model: SelectionModel;
    show_separators: boolean;
    single_click_activate: boolean;
  }
}
export class ListView
  extends ListBase
  implements Accessible, Buildable, ConstraintTarget, Orientable, Scrollable
{
  static $gtype: GObject.GType<ListView>;

  constructor(
    properties?: Partial<ListView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ListView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get enable_rubberband(): boolean;
  set enable_rubberband(val: boolean);
  get factory(): ListItemFactory;
  set factory(val: ListItemFactory);
  get model(): SelectionModel;
  set model(val: SelectionModel);
  get show_separators(): boolean;
  set show_separators(val: boolean);
  get single_click_activate(): boolean;
  set single_click_activate(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate",
    callback: (_source: this, position: number) => void
  ): number;
  connect_after(
    signal: "activate",
    callback: (_source: this, position: number) => void
  ): number;
  emit(signal: "activate", position: number): void;

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](
    model?: SelectionModel | null,
    factory?: ListItemFactory | null
  ): ListView;

  // Members

  get_enable_rubberband(): boolean;
  get_factory(): ListItemFactory | null;
  get_model(): SelectionModel | null;
  get_show_separators(): boolean;
  get_single_click_activate(): boolean;
  set_enable_rubberband(enable_rubberband: boolean): void;
  set_factory(factory?: ListItemFactory | null): void;
  set_model(model?: SelectionModel | null): void;
  set_show_separators(show_separators: boolean): void;
  set_single_click_activate(single_click_activate: boolean): void;

  // Implemented Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module LockButton {
  export interface ConstructorProperties extends Button.ConstructorProperties {
    [key: string]: any;
    permission: Gio.Permission;
    text_lock: string;
    text_unlock: string;
    tooltip_lock: string;
    tooltip_not_authorized: string;
    tooltip_unlock: string;
  }
}
export class LockButton
  extends Button
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<LockButton>;

  constructor(
    properties?: Partial<LockButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<LockButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get permission(): Gio.Permission;
  set permission(val: Gio.Permission);
  get text_lock(): string;
  set text_lock(val: string);
  get text_unlock(): string;
  set text_unlock(val: string);
  get tooltip_lock(): string;
  set tooltip_lock(val: string);
  get tooltip_not_authorized(): string;
  set tooltip_not_authorized(val: string);
  get tooltip_unlock(): string;
  set tooltip_unlock(val: string);

  // Implemented Properties

  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](permission?: Gio.Permission | null): LockButton;
  // Conflicted with Gtk.Button.new
  static ["new"](...args: never[]): any;

  // Members

  get_permission(): Gio.Permission | null;
  set_permission(permission?: Gio.Permission | null): void;

  // Implemented Members

  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}
export module MapListModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    has_map: boolean;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
  }
}
export class MapListModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<MapListModel>;

  constructor(
    properties?: Partial<MapListModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MapListModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get has_map(): boolean;
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  get n_items(): number;

  // Constructors

  static ["new"](
    model?: Gio.ListModel | null,
    map_func?: MapListModelMapFunc | null
  ): MapListModel;

  // Members

  get_model(): Gio.ListModel | null;
  set_map_func(map_func?: MapListModelMapFunc | null): void;
  set_model(model?: Gio.ListModel | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module MediaControls {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    media_stream: MediaStream;
  }
}
export class MediaControls
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<MediaControls>;

  constructor(
    properties?: Partial<MediaControls.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MediaControls.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get media_stream(): MediaStream;
  set media_stream(val: MediaStream);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](stream?: MediaStream | null): MediaControls;

  // Members

  get_media_stream(): MediaStream | null;
  set_media_stream(stream?: MediaStream | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module MediaFile {
  export interface ConstructorProperties
    extends MediaStream.ConstructorProperties {
    [key: string]: any;
    file: Gio.File;
    input_stream: Gio.InputStream;
  }
}
export abstract class MediaFile extends MediaStream implements Gdk.Paintable {
  static $gtype: GObject.GType<MediaFile>;

  constructor(
    properties?: Partial<MediaFile.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MediaFile.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get file(): Gio.File;
  set file(val: Gio.File);
  get input_stream(): Gio.InputStream;
  set input_stream(val: Gio.InputStream);

  // Constructors

  static ["new"](): MediaFile;
  static new_for_file(file: Gio.File): MediaFile;
  static new_for_filename(filename: string): MediaFile;
  static new_for_input_stream(stream: Gio.InputStream): MediaFile;
  static new_for_resource(resource_path: string): MediaFile;

  // Members

  clear(): void;
  get_file(): Gio.File | null;
  get_input_stream(): Gio.InputStream | null;
  set_file(file?: Gio.File | null): void;
  set_filename(filename?: string | null): void;
  set_input_stream(stream?: Gio.InputStream | null): void;
  set_resource(resource_path?: string | null): void;
  vfunc_close(): void;
  vfunc_open(): void;

  // Implemented Members

  compute_concrete_size(
    specified_width: number,
    specified_height: number,
    default_width: number,
    default_height: number
  ): [number, number];
  get_current_image(): Gdk.Paintable;
  get_flags(): Gdk.PaintableFlags;
  get_intrinsic_aspect_ratio(): number;
  get_intrinsic_height(): number;
  get_intrinsic_width(): number;
  invalidate_contents(): void;
  invalidate_size(): void;
  snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
  vfunc_get_current_image(): Gdk.Paintable;
  vfunc_get_flags(): Gdk.PaintableFlags;
  vfunc_get_intrinsic_aspect_ratio(): number;
  vfunc_get_intrinsic_height(): number;
  vfunc_get_intrinsic_width(): number;
  vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
}
export module MediaStream {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    duration: number;
    ended: boolean;
    error: GLib.Error;
    has_audio: boolean;
    has_video: boolean;
    loop: boolean;
    muted: boolean;
    playing: boolean;
    prepared: boolean;
    seekable: boolean;
    seeking: boolean;
    timestamp: number;
    volume: number;
  }
}
export abstract class MediaStream
  extends GObject.Object
  implements Gdk.Paintable
{
  static $gtype: GObject.GType<MediaStream>;

  constructor(
    properties?: Partial<MediaStream.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MediaStream.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get duration(): number;
  get ended(): boolean;
  get error(): GLib.Error;
  get has_audio(): boolean;
  get has_video(): boolean;
  get loop(): boolean;
  set loop(val: boolean);
  get muted(): boolean;
  set muted(val: boolean);
  get playing(): boolean;
  set playing(val: boolean);
  get prepared(): boolean;
  set prepared(val: boolean);
  get seekable(): boolean;
  get seeking(): boolean;
  get timestamp(): number;
  get volume(): number;
  set volume(val: number);

  // Members

  gerror(error: GLib.Error): void;
  get_duration(): number;
  get_ended(): boolean;
  get_error(): GLib.Error | null;
  get_loop(): boolean;
  get_muted(): boolean;
  get_playing(): boolean;
  get_timestamp(): number;
  get_volume(): number;
  is_prepared(): boolean;
  is_seekable(): boolean;
  is_seeking(): boolean;
  pause(): void;
  play(): void;
  realize(surface: Gdk.Surface): void;
  seek(timestamp: number): void;
  seek_failed(): void;
  seek_success(): void;
  set_loop(loop: boolean): void;
  set_muted(muted: boolean): void;
  set_playing(playing: boolean): void;
  set_volume(volume: number): void;
  stream_ended(): void;
  stream_prepared(
    has_audio: boolean,
    has_video: boolean,
    seekable: boolean,
    duration: number
  ): void;
  stream_unprepared(): void;
  unrealize(surface: Gdk.Surface): void;
  update(timestamp: number): void;
  vfunc_pause(): void;
  vfunc_play(): boolean;
  vfunc_realize(surface: Gdk.Surface): void;
  vfunc_seek(timestamp: number): void;
  vfunc_unrealize(surface: Gdk.Surface): void;
  vfunc_update_audio(muted: boolean, volume: number): void;

  // Implemented Members

  compute_concrete_size(
    specified_width: number,
    specified_height: number,
    default_width: number,
    default_height: number
  ): [number, number];
  get_current_image(): Gdk.Paintable;
  get_flags(): Gdk.PaintableFlags;
  get_intrinsic_aspect_ratio(): number;
  get_intrinsic_height(): number;
  get_intrinsic_width(): number;
  invalidate_contents(): void;
  invalidate_size(): void;
  snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
  vfunc_get_current_image(): Gdk.Paintable;
  vfunc_get_flags(): Gdk.PaintableFlags;
  vfunc_get_intrinsic_aspect_ratio(): number;
  vfunc_get_intrinsic_height(): number;
  vfunc_get_intrinsic_width(): number;
  vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
}
export module MenuButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    active: boolean;
    always_show_arrow: boolean;
    child: Widget;
    direction: ArrowType;
    has_frame: boolean;
    icon_name: string;
    label: string;
    menu_model: Gio.MenuModel;
    popover: Popover;
    primary: boolean;
    use_underline: boolean;
  }
}
export class MenuButton
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<MenuButton>;

  constructor(
    properties?: Partial<MenuButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MenuButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): boolean;
  set active(val: boolean);
  get always_show_arrow(): boolean;
  set always_show_arrow(val: boolean);
  get child(): Widget;
  set child(val: Widget);
  get direction(): ArrowType;
  set direction(val: ArrowType);
  get has_frame(): boolean;
  set has_frame(val: boolean);
  get icon_name(): string;
  set icon_name(val: string);
  get label(): string;
  set label(val: string);
  get menu_model(): Gio.MenuModel;
  set menu_model(val: Gio.MenuModel);
  get popover(): Popover;
  set popover(val: Popover);
  get primary(): boolean;
  set primary(val: boolean);
  get use_underline(): boolean;
  set use_underline(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): MenuButton;

  // Members

  get_active(): boolean;
  get_always_show_arrow(): boolean;
  get_child(): Widget | null;
  get_direction(): ArrowType;
  // Conflicted with Gtk.Widget.get_direction
  get_direction(...args: never[]): any;
  get_has_frame(): boolean;
  get_icon_name(): string | null;
  get_label(): string | null;
  get_menu_model(): Gio.MenuModel | null;
  get_popover(): Popover | null;
  get_primary(): boolean;
  get_use_underline(): boolean;
  popdown(): void;
  popup(): void;
  set_active(active: boolean): void;
  set_always_show_arrow(always_show_arrow: boolean): void;
  set_child(child?: Widget | null): void;
  set_create_popup_func(
    func?: MenuButtonCreatePopupFunc | null,
    destroy_notify?: GLib.DestroyNotify | null
  ): void;
  set_direction(direction: ArrowType): void;
  // Conflicted with Gtk.Widget.set_direction
  set_direction(...args: never[]): any;
  set_has_frame(has_frame: boolean): void;
  set_icon_name(icon_name: string): void;
  set_label(label: string): void;
  set_menu_model(menu_model?: Gio.MenuModel | null): void;
  set_popover(popover?: Widget | null): void;
  set_primary(primary: boolean): void;
  set_use_underline(use_underline: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module MessageDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
    buttons: ButtonsType;
    message_area: Widget;
    message_type: MessageType;
    secondary_text: string;
    secondary_use_markup: boolean;
    text: string;
    use_markup: boolean;
  }
}
export class MessageDialog
  extends Dialog
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<MessageDialog>;

  constructor(
    properties?: Partial<MessageDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MessageDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  set buttons(val: ButtonsType);
  get message_area(): Widget;
  get message_type(): MessageType;
  set message_type(val: MessageType);
  get secondary_text(): string;
  set secondary_text(val: string);
  get secondary_use_markup(): boolean;
  set secondary_use_markup(val: boolean);
  get text(): string;
  set text(val: string);
  get use_markup(): boolean;
  set use_markup(val: boolean);

  // Members

  get_message_area(): Widget;
  set_markup(str: string): void;
}
export module MnemonicAction {
  export interface ConstructorProperties
    extends ShortcutAction.ConstructorProperties {
    [key: string]: any;
  }
}
export class MnemonicAction extends ShortcutAction {
  static $gtype: GObject.GType<MnemonicAction>;

  constructor(
    properties?: Partial<MnemonicAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MnemonicAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  static get(): MnemonicAction;
}
export module MnemonicTrigger {
  export interface ConstructorProperties
    extends ShortcutTrigger.ConstructorProperties {
    [key: string]: any;
    keyval: number;
  }
}
export class MnemonicTrigger extends ShortcutTrigger {
  static $gtype: GObject.GType<MnemonicTrigger>;

  constructor(
    properties?: Partial<MnemonicTrigger.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MnemonicTrigger.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get keyval(): number;

  // Constructors

  static ["new"](keyval: number): MnemonicTrigger;

  // Members

  get_keyval(): number;
}
export module MountOperation {
  export interface ConstructorProperties
    extends Gio.MountOperation.ConstructorProperties {
    [key: string]: any;
    display: Gdk.Display;
    is_showing: boolean;
  }
}
export class MountOperation extends Gio.MountOperation {
  static $gtype: GObject.GType<MountOperation>;

  constructor(
    properties?: Partial<MountOperation.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MountOperation.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get display(): Gdk.Display;
  set display(val: Gdk.Display);
  get is_showing(): boolean;

  // Fields
  priv: MountOperationPrivate | any;

  // Constructors

  static ["new"](parent?: Window | null): MountOperation;
  // Conflicted with Gio.MountOperation.new
  static ["new"](...args: never[]): any;

  // Members

  get_display(): Gdk.Display;
  get_parent(): Window | null;
  set_display(display: Gdk.Display): void;
  set_parent(parent?: Window | null): void;
}
export module MultiFilter {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends Filter.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    n_items: number;
  }
}
export abstract class MultiFilter<A extends GObject.Object = GObject.Object>
  extends Filter
  implements Gio.ListModel<A>, Buildable
{
  static $gtype: GObject.GType<MultiFilter>;

  constructor(
    properties?: Partial<MultiFilter.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MultiFilter.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get n_items(): number;

  // Members

  append(filter: Filter): void;
  remove(position: number): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module MultiSelection {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
  }
}
export class MultiSelection<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>, SelectionModel<A>
{
  static $gtype: GObject.GType<MultiSelection>;

  constructor(
    properties?: Partial<MultiSelection.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MultiSelection.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;

  // Constructors

  static ["new"](model?: Gio.ListModel | null): MultiSelection;

  // Members

  get_model(): Gio.ListModel | null;
  set_model(model?: Gio.ListModel | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_selection(): Bitset;
  get_selection_in_range(position: number, n_items: number): Bitset;
  is_selected(position: number): boolean;
  select_all(): boolean;
  select_item(position: number, unselect_rest: boolean): boolean;
  select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  selection_changed(position: number, n_items: number): void;
  set_selection(selected: Bitset, mask: Bitset): boolean;
  unselect_all(): boolean;
  unselect_item(position: number): boolean;
  unselect_range(position: number, n_items: number): boolean;
  vfunc_get_selection_in_range(position: number, n_items: number): Bitset;
  vfunc_is_selected(position: number): boolean;
  vfunc_select_all(): boolean;
  vfunc_select_item(position: number, unselect_rest: boolean): boolean;
  vfunc_select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  vfunc_set_selection(selected: Bitset, mask: Bitset): boolean;
  vfunc_unselect_all(): boolean;
  vfunc_unselect_item(position: number): boolean;
  vfunc_unselect_range(position: number, n_items: number): boolean;
}
export module MultiSorter {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends Sorter.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    n_items: number;
  }
}
export class MultiSorter<A extends GObject.Object = GObject.Object>
  extends Sorter
  implements Gio.ListModel<A>, Buildable
{
  static $gtype: GObject.GType<MultiSorter>;

  constructor(
    properties?: Partial<MultiSorter.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<MultiSorter.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get n_items(): number;

  // Constructors

  static ["new"](): MultiSorter;

  // Members

  append(sorter: Sorter): void;
  remove(position: number): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module NamedAction {
  export interface ConstructorProperties
    extends ShortcutAction.ConstructorProperties {
    [key: string]: any;
    action_name: string;
  }
}
export class NamedAction extends ShortcutAction {
  static $gtype: GObject.GType<NamedAction>;

  constructor(
    properties?: Partial<NamedAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NamedAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get action_name(): string;

  // Constructors

  static ["new"](name: string): NamedAction;

  // Members

  get_action_name(): string;
}
export module NativeDialog {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    modal: boolean;
    title: string;
    transient_for: Window;
    visible: boolean;
  }
}
export abstract class NativeDialog extends GObject.Object {
  static $gtype: GObject.GType<NativeDialog>;

  constructor(
    properties?: Partial<NativeDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NativeDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get modal(): boolean;
  set modal(val: boolean);
  get title(): string;
  set title(val: string);
  get transient_for(): Window;
  set transient_for(val: Window);
  get visible(): boolean;
  set visible(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "response",
    callback: (_source: this, response_id: number) => void
  ): number;
  connect_after(
    signal: "response",
    callback: (_source: this, response_id: number) => void
  ): number;
  emit(signal: "response", response_id: number): void;

  // Members

  destroy(): void;
  get_modal(): boolean;
  get_title(): string | null;
  get_transient_for(): Window | null;
  get_visible(): boolean;
  hide(): void;
  set_modal(modal: boolean): void;
  set_title(title: string): void;
  set_transient_for(parent?: Window | null): void;
  show(): void;
  vfunc_hide(): void;
  vfunc_response(response_id: number): void;
  vfunc_show(): void;
}
export module NeverTrigger {
  export interface ConstructorProperties
    extends ShortcutTrigger.ConstructorProperties {
    [key: string]: any;
  }
}
export class NeverTrigger extends ShortcutTrigger {
  static $gtype: GObject.GType<NeverTrigger>;

  constructor(
    properties?: Partial<NeverTrigger.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NeverTrigger.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  static get(): NeverTrigger;
}
export module NoSelection {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
  }
}
export class NoSelection<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>, SelectionModel<A>
{
  static $gtype: GObject.GType<NoSelection>;

  constructor(
    properties?: Partial<NoSelection.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NoSelection.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;

  // Constructors

  static ["new"](model?: Gio.ListModel | null): NoSelection;

  // Members

  get_model(): Gio.ListModel | null;
  set_model(model?: Gio.ListModel | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_selection(): Bitset;
  get_selection_in_range(position: number, n_items: number): Bitset;
  is_selected(position: number): boolean;
  select_all(): boolean;
  select_item(position: number, unselect_rest: boolean): boolean;
  select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  selection_changed(position: number, n_items: number): void;
  set_selection(selected: Bitset, mask: Bitset): boolean;
  unselect_all(): boolean;
  unselect_item(position: number): boolean;
  unselect_range(position: number, n_items: number): boolean;
  vfunc_get_selection_in_range(position: number, n_items: number): Bitset;
  vfunc_is_selected(position: number): boolean;
  vfunc_select_all(): boolean;
  vfunc_select_item(position: number, unselect_rest: boolean): boolean;
  vfunc_select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  vfunc_set_selection(selected: Bitset, mask: Bitset): boolean;
  vfunc_unselect_all(): boolean;
  vfunc_unselect_item(position: number): boolean;
  vfunc_unselect_range(position: number, n_items: number): boolean;
}
export module Notebook {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    enable_popup: boolean;
    group_name: string;
    page: number;
    pages: Gio.ListModel;
    scrollable: boolean;
    show_border: boolean;
    show_tabs: boolean;
    tab_pos: PositionType;
  }
}
export class Notebook
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Notebook>;

  constructor(
    properties?: Partial<Notebook.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Notebook.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get enable_popup(): boolean;
  set enable_popup(val: boolean);
  get group_name(): string;
  set group_name(val: string);
  get page(): number;
  set page(val: number);
  get pages(): Gio.ListModel;
  get scrollable(): boolean;
  set scrollable(val: boolean);
  get show_border(): boolean;
  set show_border(val: boolean);
  get show_tabs(): boolean;
  set show_tabs(val: boolean);
  get tab_pos(): PositionType;
  set tab_pos(val: PositionType);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "change-current-page",
    callback: (_source: this, object: number) => boolean
  ): number;
  connect_after(
    signal: "change-current-page",
    callback: (_source: this, object: number) => boolean
  ): number;
  emit(signal: "change-current-page", object: number): void;
  connect(
    signal: "create-window",
    callback: (_source: this, page: Widget) => Notebook | null
  ): number;
  connect_after(
    signal: "create-window",
    callback: (_source: this, page: Widget) => Notebook | null
  ): number;
  emit(signal: "create-window", page: Widget): void;
  connect(
    signal: "focus-tab",
    callback: (_source: this, object: NotebookTab) => boolean
  ): number;
  connect_after(
    signal: "focus-tab",
    callback: (_source: this, object: NotebookTab) => boolean
  ): number;
  emit(signal: "focus-tab", object: NotebookTab): void;
  connect(
    signal: "move-focus-out",
    callback: (_source: this, object: DirectionType) => void
  ): number;
  connect_after(
    signal: "move-focus-out",
    callback: (_source: this, object: DirectionType) => void
  ): number;
  emit(signal: "move-focus-out", object: DirectionType): void;
  connect(
    signal: "page-added",
    callback: (_source: this, child: Widget, page_num: number) => void
  ): number;
  connect_after(
    signal: "page-added",
    callback: (_source: this, child: Widget, page_num: number) => void
  ): number;
  emit(signal: "page-added", child: Widget, page_num: number): void;
  connect(
    signal: "page-removed",
    callback: (_source: this, child: Widget, page_num: number) => void
  ): number;
  connect_after(
    signal: "page-removed",
    callback: (_source: this, child: Widget, page_num: number) => void
  ): number;
  emit(signal: "page-removed", child: Widget, page_num: number): void;
  connect(
    signal: "page-reordered",
    callback: (_source: this, child: Widget, page_num: number) => void
  ): number;
  connect_after(
    signal: "page-reordered",
    callback: (_source: this, child: Widget, page_num: number) => void
  ): number;
  emit(signal: "page-reordered", child: Widget, page_num: number): void;
  connect(
    signal: "reorder-tab",
    callback: (_source: this, object: DirectionType, p0: boolean) => boolean
  ): number;
  connect_after(
    signal: "reorder-tab",
    callback: (_source: this, object: DirectionType, p0: boolean) => boolean
  ): number;
  emit(signal: "reorder-tab", object: DirectionType, p0: boolean): void;
  connect(
    signal: "select-page",
    callback: (_source: this, object: boolean) => boolean
  ): number;
  connect_after(
    signal: "select-page",
    callback: (_source: this, object: boolean) => boolean
  ): number;
  emit(signal: "select-page", object: boolean): void;
  connect(
    signal: "switch-page",
    callback: (_source: this, page: Widget, page_num: number) => void
  ): number;
  connect_after(
    signal: "switch-page",
    callback: (_source: this, page: Widget, page_num: number) => void
  ): number;
  emit(signal: "switch-page", page: Widget, page_num: number): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Notebook;

  // Members

  append_page(child: Widget, tab_label?: Widget | null): number;
  append_page_menu(
    child: Widget,
    tab_label?: Widget | null,
    menu_label?: Widget | null
  ): number;
  detach_tab(child: Widget): void;
  get_action_widget(pack_type: PackType): Widget | null;
  get_current_page(): number;
  get_group_name(): string | null;
  get_menu_label(child: Widget): Widget | null;
  get_menu_label_text(child: Widget): string | null;
  get_n_pages(): number;
  get_nth_page(page_num: number): Widget | null;
  get_page(child: Widget): NotebookPage;
  get_pages(): Gio.ListModel;
  get_scrollable(): boolean;
  get_show_border(): boolean;
  get_show_tabs(): boolean;
  get_tab_detachable(child: Widget): boolean;
  get_tab_label(child: Widget): Widget | null;
  get_tab_label_text(child: Widget): string | null;
  get_tab_pos(): PositionType;
  get_tab_reorderable(child: Widget): boolean;
  insert_page(
    child: Widget,
    tab_label: Widget | null,
    position: number
  ): number;
  insert_page_menu(
    child: Widget,
    tab_label: Widget | null,
    menu_label: Widget | null,
    position: number
  ): number;
  next_page(): void;
  page_num(child: Widget): number;
  popup_disable(): void;
  popup_enable(): void;
  prepend_page(child: Widget, tab_label?: Widget | null): number;
  prepend_page_menu(
    child: Widget,
    tab_label?: Widget | null,
    menu_label?: Widget | null
  ): number;
  prev_page(): void;
  remove_page(page_num: number): void;
  reorder_child(child: Widget, position: number): void;
  set_action_widget(widget: Widget, pack_type: PackType): void;
  set_current_page(page_num: number): void;
  set_group_name(group_name?: string | null): void;
  set_menu_label(child: Widget, menu_label?: Widget | null): void;
  set_menu_label_text(child: Widget, menu_text: string): void;
  set_scrollable(scrollable: boolean): void;
  set_show_border(show_border: boolean): void;
  set_show_tabs(show_tabs: boolean): void;
  set_tab_detachable(child: Widget, detachable: boolean): void;
  set_tab_label(child: Widget, tab_label?: Widget | null): void;
  set_tab_label_text(child: Widget, tab_text: string): void;
  set_tab_pos(pos: PositionType): void;
  set_tab_reorderable(child: Widget, reorderable: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module NotebookPage {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    detachable: boolean;
    menu: Widget;
    menu_label: string;
    position: number;
    reorderable: boolean;
    tab: Widget;
    tab_expand: boolean;
    tab_fill: boolean;
    tab_label: string;
  }
}
export class NotebookPage extends GObject.Object {
  static $gtype: GObject.GType<NotebookPage>;

  constructor(
    properties?: Partial<NotebookPage.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NotebookPage.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  get detachable(): boolean;
  set detachable(val: boolean);
  get menu(): Widget;
  get menu_label(): string;
  set menu_label(val: string);
  get position(): number;
  set position(val: number);
  get reorderable(): boolean;
  set reorderable(val: boolean);
  get tab(): Widget;
  get tab_expand(): boolean;
  set tab_expand(val: boolean);
  get tab_fill(): boolean;
  set tab_fill(val: boolean);
  get tab_label(): string;
  set tab_label(val: string);

  // Members

  get_child(): Widget;
}
export module NothingAction {
  export interface ConstructorProperties
    extends ShortcutAction.ConstructorProperties {
    [key: string]: any;
  }
}
export class NothingAction extends ShortcutAction {
  static $gtype: GObject.GType<NothingAction>;

  constructor(
    properties?: Partial<NothingAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NothingAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  static get(): NothingAction;
}
export module NumericSorter {
  export interface ConstructorProperties extends Sorter.ConstructorProperties {
    [key: string]: any;
    expression: Expression;
    sort_order: SortType;
  }
}
export class NumericSorter extends Sorter {
  static $gtype: GObject.GType<NumericSorter>;

  constructor(
    properties?: Partial<NumericSorter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<NumericSorter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get expression(): Expression;
  set expression(val: Expression);
  get sort_order(): SortType;
  set sort_order(val: SortType);

  // Constructors

  static ["new"](expression?: Expression | null): NumericSorter;

  // Members

  get_expression(): Expression | null;
  get_sort_order(): SortType;
  set_expression(expression?: Expression | null): void;
  set_sort_order(sort_order: SortType): void;
}
export module ObjectExpression {
  export interface ConstructorProperties
    extends Expression.ConstructorProperties {
    [key: string]: any;
  }
}
export class ObjectExpression extends Expression {
  static $gtype: GObject.GType<ObjectExpression>;

  constructor(
    properties?: Partial<ObjectExpression.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ObjectExpression.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](object: GObject.Object): ObjectExpression;

  // Members

  get_object<T = GObject.Object>(): T;
}
export module Overlay {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
  }
}
export class Overlay
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Overlay>;

  constructor(
    properties?: Partial<Overlay.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Overlay.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "get-child-position",
    callback: (
      _source: this,
      widget: Widget,
      allocation: Gdk.Rectangle
    ) => boolean
  ): number;
  connect_after(
    signal: "get-child-position",
    callback: (
      _source: this,
      widget: Widget,
      allocation: Gdk.Rectangle
    ) => boolean
  ): number;
  emit(
    signal: "get-child-position",
    widget: Widget,
    allocation: Gdk.Rectangle
  ): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Overlay;

  // Members

  add_overlay(widget: Widget): void;
  get_child(): Widget | null;
  get_clip_overlay(widget: Widget): boolean;
  get_measure_overlay(widget: Widget): boolean;
  remove_overlay(widget: Widget): void;
  set_child(child?: Widget | null): void;
  set_clip_overlay(widget: Widget, clip_overlay: boolean): void;
  set_measure_overlay(widget: Widget, measure: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module OverlayLayout {
  export interface ConstructorProperties
    extends LayoutManager.ConstructorProperties {
    [key: string]: any;
  }
}
export class OverlayLayout extends LayoutManager {
  static $gtype: GObject.GType<OverlayLayout>;

  constructor(
    properties?: Partial<OverlayLayout.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<OverlayLayout.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): OverlayLayout;
}
export module OverlayLayoutChild {
  export interface ConstructorProperties
    extends LayoutChild.ConstructorProperties {
    [key: string]: any;
    clip_overlay: boolean;
    measure: boolean;
  }
}
export class OverlayLayoutChild extends LayoutChild {
  static $gtype: GObject.GType<OverlayLayoutChild>;

  constructor(
    properties?: Partial<OverlayLayoutChild.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<OverlayLayoutChild.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get clip_overlay(): boolean;
  set clip_overlay(val: boolean);
  get measure(): boolean;
  set measure(val: boolean);

  // Members

  get_clip_overlay(): boolean;
  get_measure(): boolean;
  set_clip_overlay(clip_overlay: boolean): void;
  set_measure(measure: boolean): void;
}
export module PadController {
  export interface ConstructorProperties
    extends EventController.ConstructorProperties {
    [key: string]: any;
    action_group: Gio.ActionGroup;
    pad: Gdk.Device;
  }
}
export class PadController extends EventController {
  static $gtype: GObject.GType<PadController>;

  constructor(
    properties?: Partial<PadController.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PadController.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get action_group(): Gio.ActionGroup;
  get pad(): Gdk.Device;

  // Constructors

  static ["new"](
    group: Gio.ActionGroup,
    pad?: Gdk.Device | null
  ): PadController;

  // Members

  set_action(
    type: PadActionType,
    index: number,
    mode: number,
    label: string,
    action_name: string
  ): void;
  set_action_entries(entries: PadActionEntry[]): void;
}
export module PageSetup {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class PageSetup extends GObject.Object {
  static $gtype: GObject.GType<PageSetup>;

  constructor(
    properties?: Partial<PageSetup.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PageSetup.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): PageSetup;
  static new_from_file(file_name: string): PageSetup;
  static new_from_gvariant(variant: GLib.Variant): PageSetup;
  static new_from_key_file(
    key_file: GLib.KeyFile,
    group_name?: string | null
  ): PageSetup;

  // Members

  copy(): PageSetup;
  get_bottom_margin(unit: Unit): number;
  get_left_margin(unit: Unit): number;
  get_orientation(): PageOrientation;
  get_page_height(unit: Unit): number;
  get_page_width(unit: Unit): number;
  get_paper_height(unit: Unit): number;
  get_paper_size(): PaperSize;
  get_paper_width(unit: Unit): number;
  get_right_margin(unit: Unit): number;
  get_top_margin(unit: Unit): number;
  load_file(file_name: string): boolean;
  load_key_file(key_file: GLib.KeyFile, group_name?: string | null): boolean;
  set_bottom_margin(margin: number, unit: Unit): void;
  set_left_margin(margin: number, unit: Unit): void;
  set_orientation(orientation: PageOrientation): void;
  set_paper_size(size: PaperSize): void;
  set_paper_size_and_default_margins(size: PaperSize): void;
  set_right_margin(margin: number, unit: Unit): void;
  set_top_margin(margin: number, unit: Unit): void;
  to_file(file_name: string): boolean;
  to_gvariant(): GLib.Variant;
  to_key_file(key_file: GLib.KeyFile, group_name?: string | null): void;
}
export module PageSetupUnixDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
  }
}
export class PageSetupUnixDialog
  extends Dialog
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<PageSetupUnixDialog>;

  constructor(
    properties?: Partial<PageSetupUnixDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PageSetupUnixDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](
    title?: string | null,
    parent?: Window | null
  ): PageSetupUnixDialog;
  // Conflicted with Gtk.Dialog.new
  static ["new"](...args: never[]): any;

  // Members

  get_page_setup(): PageSetup;
  get_print_settings(): PrintSettings | null;
  set_page_setup(page_setup: PageSetup): void;
  set_print_settings(print_settings?: PrintSettings | null): void;
}
export module Paned {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    end_child: Widget;
    max_position: number;
    min_position: number;
    position: number;
    position_set: boolean;
    resize_end_child: boolean;
    resize_start_child: boolean;
    shrink_end_child: boolean;
    shrink_start_child: boolean;
    start_child: Widget;
    wide_handle: boolean;
  }
}
export class Paned
  extends Widget
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<Paned>;

  constructor(
    properties?: Partial<Paned.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Paned.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get end_child(): Widget;
  set end_child(val: Widget);
  get max_position(): number;
  get min_position(): number;
  get position(): number;
  set position(val: number);
  get position_set(): boolean;
  set position_set(val: boolean);
  get resize_end_child(): boolean;
  set resize_end_child(val: boolean);
  get resize_start_child(): boolean;
  set resize_start_child(val: boolean);
  get shrink_end_child(): boolean;
  set shrink_end_child(val: boolean);
  get shrink_start_child(): boolean;
  set shrink_start_child(val: boolean);
  get start_child(): Widget;
  set start_child(val: Widget);
  get wide_handle(): boolean;
  set wide_handle(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "accept-position",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "accept-position",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "accept-position"): void;
  connect(
    signal: "cancel-position",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "cancel-position",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "cancel-position"): void;
  connect(
    signal: "cycle-child-focus",
    callback: (_source: this, reversed: boolean) => boolean
  ): number;
  connect_after(
    signal: "cycle-child-focus",
    callback: (_source: this, reversed: boolean) => boolean
  ): number;
  emit(signal: "cycle-child-focus", reversed: boolean): void;
  connect(
    signal: "cycle-handle-focus",
    callback: (_source: this, reversed: boolean) => boolean
  ): number;
  connect_after(
    signal: "cycle-handle-focus",
    callback: (_source: this, reversed: boolean) => boolean
  ): number;
  emit(signal: "cycle-handle-focus", reversed: boolean): void;
  connect(
    signal: "move-handle",
    callback: (_source: this, scroll_type: ScrollType) => boolean
  ): number;
  connect_after(
    signal: "move-handle",
    callback: (_source: this, scroll_type: ScrollType) => boolean
  ): number;
  emit(signal: "move-handle", scroll_type: ScrollType): void;
  connect(
    signal: "toggle-handle-focus",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "toggle-handle-focus",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "toggle-handle-focus"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](orientation: Orientation): Paned;

  // Members

  get_end_child(): Widget | null;
  get_position(): number;
  get_resize_end_child(): boolean;
  get_resize_start_child(): boolean;
  get_shrink_end_child(): boolean;
  get_shrink_start_child(): boolean;
  get_start_child(): Widget | null;
  get_wide_handle(): boolean;
  set_end_child(child?: Widget | null): void;
  set_position(position: number): void;
  set_resize_end_child(resize: boolean): void;
  set_resize_start_child(resize: boolean): void;
  set_shrink_end_child(resize: boolean): void;
  set_shrink_start_child(resize: boolean): void;
  set_start_child(child?: Widget | null): void;
  set_wide_handle(wide: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  vfunc_set_current_value(value: number): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}

export module PasswordEntry {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activates_default: boolean;
    extra_menu: Gio.MenuModel;
    placeholder_text: string;
    show_peek_icon: boolean;
  }
}
export class PasswordEntry
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Editable
{
  static $gtype: GObject.GType<PasswordEntry>;

  constructor(
    properties?: Partial<PasswordEntry.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PasswordEntry.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activates_default(): boolean;
  set activates_default(val: boolean);
  get extra_menu(): Gio.MenuModel;
  set extra_menu(val: Gio.MenuModel);
  get placeholder_text(): string;
  set placeholder_text(val: string);
  get show_peek_icon(): boolean;
  set show_peek_icon(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get cursor_position(): number;
  get editable(): boolean;
  set editable(val: boolean);
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get selection_bound(): number;
  get text(): string;
  set text(val: string);
  get width_chars(): number;
  set width_chars(val: number);
  get xalign(): number;
  set xalign(val: number);

  // Constructors

  static ["new"](): PasswordEntry;

  // Members

  get_extra_menu(): Gio.MenuModel | null;
  get_show_peek_icon(): boolean;
  set_extra_menu(model?: Gio.MenuModel | null): void;
  set_show_peek_icon(show_peek_icon: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_alignment(): number;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_alignment(xalign: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module PasswordEntryBuffer {
  export interface ConstructorProperties
    extends EntryBuffer.ConstructorProperties {
    [key: string]: any;
  }
}
export class PasswordEntryBuffer extends EntryBuffer {
  static $gtype: GObject.GType<PasswordEntryBuffer>;

  constructor(
    properties?: Partial<PasswordEntryBuffer.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PasswordEntryBuffer.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): PasswordEntryBuffer;
}
export module Picture {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    alternative_text: string;
    can_shrink: boolean;
    content_fit: ContentFit;
    file: Gio.File;
    keep_aspect_ratio: boolean;
    paintable: Gdk.Paintable;
  }
}
export class Picture
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Picture>;

  constructor(
    properties?: Partial<Picture.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Picture.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get alternative_text(): string;
  set alternative_text(val: string);
  get can_shrink(): boolean;
  set can_shrink(val: boolean);
  get content_fit(): ContentFit;
  set content_fit(val: ContentFit);
  get file(): Gio.File;
  set file(val: Gio.File);
  get keep_aspect_ratio(): boolean;
  set keep_aspect_ratio(val: boolean);
  get paintable(): Gdk.Paintable;
  set paintable(val: Gdk.Paintable);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Picture;
  static new_for_file(file?: Gio.File | null): Picture;
  static new_for_filename(filename?: string | null): Picture;
  static new_for_paintable(paintable?: Gdk.Paintable | null): Picture;
  static new_for_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): Picture;
  static new_for_resource(resource_path?: string | null): Picture;

  // Members

  get_alternative_text(): string | null;
  get_can_shrink(): boolean;
  get_content_fit(): ContentFit;
  get_file(): Gio.File | null;
  get_keep_aspect_ratio(): boolean;
  get_paintable(): Gdk.Paintable | null;
  set_alternative_text(alternative_text?: string | null): void;
  set_can_shrink(can_shrink: boolean): void;
  set_content_fit(content_fit: ContentFit): void;
  set_file(file?: Gio.File | null): void;
  set_filename(filename?: string | null): void;
  set_keep_aspect_ratio(keep_aspect_ratio: boolean): void;
  set_paintable(paintable?: Gdk.Paintable | null): void;
  set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
  set_resource(resource_path?: string | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Popover {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    autohide: boolean;
    cascade_popdown: boolean;
    child: Widget;
    default_widget: Widget;
    has_arrow: boolean;
    mnemonics_visible: boolean;
    pointing_to: Gdk.Rectangle;
    position: PositionType;
  }
}
export class Popover
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Native, ShortcutManager
{
  static $gtype: GObject.GType<Popover>;

  constructor(
    properties?: Partial<Popover.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Popover.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get autohide(): boolean;
  set autohide(val: boolean);
  get cascade_popdown(): boolean;
  set cascade_popdown(val: boolean);
  get child(): Widget;
  set child(val: Widget);
  get default_widget(): Widget;
  set default_widget(val: Widget);
  get has_arrow(): boolean;
  set has_arrow(val: boolean);
  get mnemonics_visible(): boolean;
  set mnemonics_visible(val: boolean);
  get pointing_to(): Gdk.Rectangle;
  set pointing_to(val: Gdk.Rectangle);
  get position(): PositionType;
  set position(val: PositionType);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-default",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "activate-default",
    callback: (_source: this) => void
  ): number;
  emit(signal: "activate-default"): void;
  connect(signal: "closed", callback: (_source: this) => void): number;
  connect_after(signal: "closed", callback: (_source: this) => void): number;
  emit(signal: "closed"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Popover;

  // Members

  get_autohide(): boolean;
  get_cascade_popdown(): boolean;
  get_child(): Widget | null;
  get_has_arrow(): boolean;
  get_mnemonics_visible(): boolean;
  get_offset(): [number, number];
  get_pointing_to(): [boolean, Gdk.Rectangle];
  get_position(): PositionType;
  popdown(): void;
  popup(): void;
  present(): void;
  set_autohide(autohide: boolean): void;
  set_cascade_popdown(cascade_popdown: boolean): void;
  set_child(child?: Widget | null): void;
  set_default_widget(widget?: Widget | null): void;
  set_has_arrow(has_arrow: boolean): void;
  set_mnemonics_visible(mnemonics_visible: boolean): void;
  set_offset(x_offset: number, y_offset: number): void;
  set_pointing_to(rect?: Gdk.Rectangle | null): void;
  set_position(position: PositionType): void;
  vfunc_activate_default(): void;
  vfunc_closed(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module PopoverMenu {
  export interface ConstructorProperties extends Popover.ConstructorProperties {
    [key: string]: any;
    menu_model: Gio.MenuModel;
    visible_submenu: string;
  }
}
export class PopoverMenu
  extends Popover
  implements Accessible, Buildable, ConstraintTarget, Native, ShortcutManager
{
  static $gtype: GObject.GType<PopoverMenu>;

  constructor(
    properties?: Partial<PopoverMenu.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PopoverMenu.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get menu_model(): Gio.MenuModel;
  set menu_model(val: Gio.MenuModel);
  get visible_submenu(): string;
  set visible_submenu(val: string);

  // Constructors

  static new_from_model(model?: Gio.MenuModel | null): PopoverMenu;
  static new_from_model_full(
    model: Gio.MenuModel,
    flags: PopoverMenuFlags
  ): PopoverMenu;

  // Members

  add_child(child: Widget, id: string): boolean;
  get_menu_model(): Gio.MenuModel | null;
  remove_child(child: Widget): boolean;
  set_menu_model(model?: Gio.MenuModel | null): void;

  // Implemented Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module PopoverMenuBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    menu_model: Gio.MenuModel;
  }
}
export class PopoverMenuBar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<PopoverMenuBar>;

  constructor(
    properties?: Partial<PopoverMenuBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PopoverMenuBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get menu_model(): Gio.MenuModel;
  set menu_model(val: Gio.MenuModel);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static new_from_model(model?: Gio.MenuModel | null): PopoverMenuBar;

  // Members

  add_child(child: Widget, id: string): boolean;
  get_menu_model(): Gio.MenuModel | null;
  remove_child(child: Widget): boolean;
  set_menu_model(model?: Gio.MenuModel | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module PrintContext {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class PrintContext extends GObject.Object {
  static $gtype: GObject.GType<PrintContext>;

  constructor(
    properties?: Partial<PrintContext.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PrintContext.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  create_pango_context(): Pango.Context;
  create_pango_layout(): Pango.Layout;
  get_cairo_context(): cairo.Context;
  get_dpi_x(): number;
  get_dpi_y(): number;
  get_hard_margins(): [boolean, number, number, number, number];
  get_height(): number;
  get_page_setup(): PageSetup;
  get_pango_fontmap(): Pango.FontMap;
  get_width(): number;
  set_cairo_context(cr: cairo.Context, dpi_x: number, dpi_y: number): void;
}
export module PrintJob {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    page_setup: PageSetup;
    printer: Printer;
    settings: PrintSettings;
    title: string;
    track_print_status: boolean;
  }
}
export class PrintJob extends GObject.Object {
  static $gtype: GObject.GType<PrintJob>;

  constructor(
    properties?: Partial<PrintJob.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PrintJob.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get page_setup(): PageSetup;
  get printer(): Printer;
  get settings(): PrintSettings;
  get title(): string;
  get track_print_status(): boolean;
  set track_print_status(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "status-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "status-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "status-changed"): void;

  // Constructors

  static ["new"](
    title: string,
    printer: Printer,
    settings: PrintSettings,
    page_setup: PageSetup
  ): PrintJob;

  // Members

  get_collate(): boolean;
  get_n_up(): number;
  get_n_up_layout(): NumberUpLayout;
  get_num_copies(): number;
  get_page_ranges(): PageRange[];
  get_page_set(): PageSet;
  get_pages(): PrintPages;
  get_printer(): Printer;
  get_reverse(): boolean;
  get_rotate(): boolean;
  get_scale(): number;
  get_settings(): PrintSettings;
  get_status(): PrintStatus;
  get_surface(): cairo.Surface;
  get_title(): string;
  get_track_print_status(): boolean;
  send(callback: PrintJobCompleteFunc): void;
  set_collate(collate: boolean): void;
  set_n_up(n_up: number): void;
  set_n_up_layout(layout: NumberUpLayout): void;
  set_num_copies(num_copies: number): void;
  set_page_ranges(ranges: PageRange[]): void;
  set_page_set(page_set: PageSet): void;
  set_pages(pages: PrintPages): void;
  set_reverse(reverse: boolean): void;
  set_rotate(rotate: boolean): void;
  set_scale(scale: number): void;
  set_source_fd(fd: number): boolean;
  set_source_file(filename: string): boolean;
  set_track_print_status(track_status: boolean): void;
}
export module PrintOperation {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    allow_async: boolean;
    current_page: number;
    custom_tab_label: string;
    default_page_setup: PageSetup;
    embed_page_setup: boolean;
    export_filename: string;
    has_selection: boolean;
    job_name: string;
    n_pages: number;
    n_pages_to_print: number;
    print_settings: PrintSettings;
    show_progress: boolean;
    status: PrintStatus;
    status_string: string;
    support_selection: boolean;
    track_print_status: boolean;
    unit: Unit;
    use_full_page: boolean;
  }
}
export class PrintOperation
  extends GObject.Object
  implements PrintOperationPreview
{
  static $gtype: GObject.GType<PrintOperation>;

  constructor(
    properties?: Partial<PrintOperation.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PrintOperation.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get allow_async(): boolean;
  set allow_async(val: boolean);
  get current_page(): number;
  set current_page(val: number);
  get custom_tab_label(): string;
  set custom_tab_label(val: string);
  get default_page_setup(): PageSetup;
  set default_page_setup(val: PageSetup);
  get embed_page_setup(): boolean;
  set embed_page_setup(val: boolean);
  get export_filename(): string;
  set export_filename(val: string);
  get has_selection(): boolean;
  set has_selection(val: boolean);
  get job_name(): string;
  set job_name(val: string);
  get n_pages(): number;
  set n_pages(val: number);
  get n_pages_to_print(): number;
  get print_settings(): PrintSettings;
  set print_settings(val: PrintSettings);
  get show_progress(): boolean;
  set show_progress(val: boolean);
  get status(): PrintStatus;
  get status_string(): string;
  get support_selection(): boolean;
  set support_selection(val: boolean);
  get track_print_status(): boolean;
  set track_print_status(val: boolean);
  get unit(): Unit;
  set unit(val: Unit);
  get use_full_page(): boolean;
  set use_full_page(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "begin-print",
    callback: (_source: this, context: PrintContext) => void
  ): number;
  connect_after(
    signal: "begin-print",
    callback: (_source: this, context: PrintContext) => void
  ): number;
  emit(signal: "begin-print", context: PrintContext): void;
  connect(
    signal: "create-custom-widget",
    callback: (_source: this) => GObject.Object | null
  ): number;
  connect_after(
    signal: "create-custom-widget",
    callback: (_source: this) => GObject.Object | null
  ): number;
  emit(signal: "create-custom-widget"): void;
  connect(
    signal: "custom-widget-apply",
    callback: (_source: this, widget: Widget) => void
  ): number;
  connect_after(
    signal: "custom-widget-apply",
    callback: (_source: this, widget: Widget) => void
  ): number;
  emit(signal: "custom-widget-apply", widget: Widget): void;
  connect(
    signal: "done",
    callback: (_source: this, result: PrintOperationResult) => void
  ): number;
  connect_after(
    signal: "done",
    callback: (_source: this, result: PrintOperationResult) => void
  ): number;
  emit(signal: "done", result: PrintOperationResult): void;
  connect(
    signal: "draw-page",
    callback: (_source: this, context: PrintContext, page_nr: number) => void
  ): number;
  connect_after(
    signal: "draw-page",
    callback: (_source: this, context: PrintContext, page_nr: number) => void
  ): number;
  emit(signal: "draw-page", context: PrintContext, page_nr: number): void;
  connect(
    signal: "end-print",
    callback: (_source: this, context: PrintContext) => void
  ): number;
  connect_after(
    signal: "end-print",
    callback: (_source: this, context: PrintContext) => void
  ): number;
  emit(signal: "end-print", context: PrintContext): void;
  connect(
    signal: "paginate",
    callback: (_source: this, context: PrintContext) => boolean
  ): number;
  connect_after(
    signal: "paginate",
    callback: (_source: this, context: PrintContext) => boolean
  ): number;
  emit(signal: "paginate", context: PrintContext): void;
  connect(
    signal: "preview",
    callback: (
      _source: this,
      preview: PrintOperationPreview,
      context: PrintContext,
      parent: Window | null
    ) => boolean
  ): number;
  connect_after(
    signal: "preview",
    callback: (
      _source: this,
      preview: PrintOperationPreview,
      context: PrintContext,
      parent: Window | null
    ) => boolean
  ): number;
  emit(
    signal: "preview",
    preview: PrintOperationPreview,
    context: PrintContext,
    parent: Window | null
  ): void;
  connect(
    signal: "request-page-setup",
    callback: (
      _source: this,
      context: PrintContext,
      page_nr: number,
      setup: PageSetup
    ) => void
  ): number;
  connect_after(
    signal: "request-page-setup",
    callback: (
      _source: this,
      context: PrintContext,
      page_nr: number,
      setup: PageSetup
    ) => void
  ): number;
  emit(
    signal: "request-page-setup",
    context: PrintContext,
    page_nr: number,
    setup: PageSetup
  ): void;
  connect(signal: "status-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "status-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "status-changed"): void;
  connect(
    signal: "update-custom-widget",
    callback: (
      _source: this,
      widget: Widget,
      setup: PageSetup,
      settings: PrintSettings
    ) => void
  ): number;
  connect_after(
    signal: "update-custom-widget",
    callback: (
      _source: this,
      widget: Widget,
      setup: PageSetup,
      settings: PrintSettings
    ) => void
  ): number;
  emit(
    signal: "update-custom-widget",
    widget: Widget,
    setup: PageSetup,
    settings: PrintSettings
  ): void;

  // Constructors

  static ["new"](): PrintOperation;

  // Members

  cancel(): void;
  draw_page_finish(): void;
  get_default_page_setup(): PageSetup;
  get_embed_page_setup(): boolean;
  get_error(): void;
  get_has_selection(): boolean;
  get_n_pages_to_print(): number;
  get_print_settings(): PrintSettings | null;
  get_status(): PrintStatus;
  get_status_string(): string;
  get_support_selection(): boolean;
  is_finished(): boolean;
  run(
    action: PrintOperationAction,
    parent?: Window | null
  ): PrintOperationResult;
  set_allow_async(allow_async: boolean): void;
  set_current_page(current_page: number): void;
  set_custom_tab_label(label?: string | null): void;
  set_default_page_setup(default_page_setup?: PageSetup | null): void;
  set_defer_drawing(): void;
  set_embed_page_setup(embed: boolean): void;
  set_export_filename(filename: string): void;
  set_has_selection(has_selection: boolean): void;
  set_job_name(job_name: string): void;
  set_n_pages(n_pages: number): void;
  set_print_settings(print_settings?: PrintSettings | null): void;
  set_show_progress(show_progress: boolean): void;
  set_support_selection(support_selection: boolean): void;
  set_track_print_status(track_status: boolean): void;
  set_unit(unit: Unit): void;
  set_use_full_page(full_page: boolean): void;
  vfunc_begin_print(context: PrintContext): void;
  vfunc_custom_widget_apply(widget: Widget): void;
  vfunc_done(result: PrintOperationResult): void;
  vfunc_draw_page(context: PrintContext, page_nr: number): void;
  vfunc_end_print(context: PrintContext): void;
  vfunc_paginate(context: PrintContext): boolean;
  vfunc_preview(
    preview: PrintOperationPreview,
    context: PrintContext,
    parent: Window
  ): boolean;
  vfunc_request_page_setup(
    context: PrintContext,
    page_nr: number,
    setup: PageSetup
  ): void;
  vfunc_status_changed(): void;
  vfunc_update_custom_widget(
    widget: Widget,
    setup: PageSetup,
    settings: PrintSettings
  ): void;

  // Implemented Members

  end_preview(): void;
  is_selected(page_nr: number): boolean;
  render_page(page_nr: number): void;
  vfunc_end_preview(): void;
  vfunc_got_page_size(context: PrintContext, page_setup: PageSetup): void;
  vfunc_is_selected(page_nr: number): boolean;
  vfunc_ready(context: PrintContext): void;
  vfunc_render_page(page_nr: number): void;
}
export module PrintSettings {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class PrintSettings extends GObject.Object {
  static $gtype: GObject.GType<PrintSettings>;

  constructor(
    properties?: Partial<PrintSettings.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PrintSettings.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): PrintSettings;
  static new_from_file(file_name: string): PrintSettings;
  static new_from_gvariant(variant: GLib.Variant): PrintSettings;
  static new_from_key_file(
    key_file: GLib.KeyFile,
    group_name?: string | null
  ): PrintSettings;

  // Members

  copy(): PrintSettings;
  foreach(func: PrintSettingsFunc): void;
  get(key: string): string | null;
  get_bool(key: string): boolean;
  get_collate(): boolean;
  get_default_source(): string | null;
  get_dither(): string | null;
  get_double(key: string): number;
  get_double_with_default(key: string, def: number): number;
  get_duplex(): PrintDuplex;
  get_finishings(): string | null;
  get_int(key: string): number;
  get_int_with_default(key: string, def: number): number;
  get_length(key: string, unit: Unit): number;
  get_media_type(): string | null;
  get_n_copies(): number;
  get_number_up(): number;
  get_number_up_layout(): NumberUpLayout;
  get_orientation(): PageOrientation;
  get_output_bin(): string | null;
  get_page_ranges(): PageRange[];
  get_page_set(): PageSet;
  get_paper_height(unit: Unit): number;
  get_paper_size(): PaperSize | null;
  get_paper_width(unit: Unit): number;
  get_print_pages(): PrintPages;
  get_printer(): string | null;
  get_printer_lpi(): number;
  get_quality(): PrintQuality;
  get_resolution(): number;
  get_resolution_x(): number;
  get_resolution_y(): number;
  get_reverse(): boolean;
  get_scale(): number;
  get_use_color(): boolean;
  has_key(key: string): boolean;
  load_file(file_name: string): boolean;
  load_key_file(key_file: GLib.KeyFile, group_name?: string | null): boolean;
  set(key: string, value?: string | null): void;
  // Conflicted with GObject.Object.set
  set(...args: never[]): any;
  set_bool(key: string, value: boolean): void;
  set_collate(collate: boolean): void;
  set_default_source(default_source: string): void;
  set_dither(dither: string): void;
  set_double(key: string, value: number): void;
  set_duplex(duplex: PrintDuplex): void;
  set_finishings(finishings: string): void;
  set_int(key: string, value: number): void;
  set_length(key: string, value: number, unit: Unit): void;
  set_media_type(media_type: string): void;
  set_n_copies(num_copies: number): void;
  set_number_up(number_up: number): void;
  set_number_up_layout(number_up_layout: NumberUpLayout): void;
  set_orientation(orientation: PageOrientation): void;
  set_output_bin(output_bin: string): void;
  set_page_ranges(page_ranges: PageRange[]): void;
  set_page_set(page_set: PageSet): void;
  set_paper_height(height: number, unit: Unit): void;
  set_paper_size(paper_size: PaperSize): void;
  set_paper_width(width: number, unit: Unit): void;
  set_print_pages(pages: PrintPages): void;
  set_printer(printer: string): void;
  set_printer_lpi(lpi: number): void;
  set_quality(quality: PrintQuality): void;
  set_resolution(resolution: number): void;
  set_resolution_xy(resolution_x: number, resolution_y: number): void;
  set_reverse(reverse: boolean): void;
  set_scale(scale: number): void;
  set_use_color(use_color: boolean): void;
  to_file(file_name: string): boolean;
  to_gvariant(): GLib.Variant;
  to_key_file(key_file: GLib.KeyFile, group_name?: string | null): void;
  unset(key: string): void;
}
export module PrintUnixDialog {
  export interface ConstructorProperties extends Dialog.ConstructorProperties {
    [key: string]: any;
    current_page: number;
    embed_page_setup: boolean;
    has_selection: boolean;
    manual_capabilities: PrintCapabilities;
    page_setup: PageSetup;
    print_settings: PrintSettings;
    selected_printer: Printer;
    support_selection: boolean;
  }
}
export class PrintUnixDialog
  extends Dialog
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<PrintUnixDialog>;

  constructor(
    properties?: Partial<PrintUnixDialog.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PrintUnixDialog.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get current_page(): number;
  set current_page(val: number);
  get embed_page_setup(): boolean;
  set embed_page_setup(val: boolean);
  get has_selection(): boolean;
  set has_selection(val: boolean);
  get manual_capabilities(): PrintCapabilities;
  set manual_capabilities(val: PrintCapabilities);
  get page_setup(): PageSetup;
  set page_setup(val: PageSetup);
  get print_settings(): PrintSettings;
  set print_settings(val: PrintSettings);
  get selected_printer(): Printer;
  get support_selection(): boolean;
  set support_selection(val: boolean);

  // Constructors

  static ["new"](
    title?: string | null,
    parent?: Window | null
  ): PrintUnixDialog;
  // Conflicted with Gtk.Dialog.new
  static ["new"](...args: never[]): any;

  // Members

  add_custom_tab(child: Widget, tab_label: Widget): void;
  get_current_page(): number;
  get_embed_page_setup(): boolean;
  get_has_selection(): boolean;
  get_manual_capabilities(): PrintCapabilities;
  get_page_setup(): PageSetup;
  get_page_setup_set(): boolean;
  get_selected_printer(): Printer | null;
  get_settings(): PrintSettings;
  // Conflicted with Gtk.Widget.get_settings
  get_settings(...args: never[]): any;
  get_support_selection(): boolean;
  set_current_page(current_page: number): void;
  set_embed_page_setup(embed: boolean): void;
  set_has_selection(has_selection: boolean): void;
  set_manual_capabilities(capabilities: PrintCapabilities): void;
  set_page_setup(page_setup: PageSetup): void;
  set_settings(settings?: PrintSettings | null): void;
  set_support_selection(support_selection: boolean): void;
}
export module Printer {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    accepting_jobs: boolean;
    accepts_pdf: boolean;
    accepts_ps: boolean;
    icon_name: string;
    is_virtual: boolean;
    job_count: number;
    location: string;
    name: string;
    paused: boolean;
    state_message: string;
  }
}
export class Printer extends GObject.Object {
  static $gtype: GObject.GType<Printer>;

  constructor(
    properties?: Partial<Printer.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Printer.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accepting_jobs(): boolean;
  get accepts_pdf(): boolean;
  get accepts_ps(): boolean;
  get icon_name(): string;
  get is_virtual(): boolean;
  get job_count(): number;
  get location(): string;
  get name(): string;
  get paused(): boolean;
  get state_message(): string;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "details-acquired",
    callback: (_source: this, success: boolean) => void
  ): number;
  connect_after(
    signal: "details-acquired",
    callback: (_source: this, success: boolean) => void
  ): number;
  emit(signal: "details-acquired", success: boolean): void;

  // Constructors

  static ["new"](
    name: string,
    backend: PrintBackend,
    virtual_: boolean
  ): Printer;

  // Members

  compare(b: Printer): number;
  get_backend(): PrintBackend;
  get_capabilities(): PrintCapabilities;
  get_default_page_size(): PageSetup;
  get_description(): string;
  get_hard_margins(): [boolean, number, number, number, number];
  get_hard_margins_for_paper_size(
    paper_size: PaperSize
  ): [boolean, number, number, number, number];
  get_icon_name(): string;
  get_job_count(): number;
  get_location(): string;
  get_name(): string;
  get_state_message(): string;
  has_details(): boolean;
  is_accepting_jobs(): boolean;
  is_active(): boolean;
  is_default(): boolean;
  is_paused(): boolean;
  list_papers(): PageSetup[];
  request_details(): void;
}
export module ProgressBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    ellipsize: Pango.EllipsizeMode;
    fraction: number;
    inverted: boolean;
    pulse_step: number;
    show_text: boolean;
    text: string;
  }
}
export class ProgressBar
  extends Widget
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<ProgressBar>;

  constructor(
    properties?: Partial<ProgressBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ProgressBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get ellipsize(): Pango.EllipsizeMode;
  set ellipsize(val: Pango.EllipsizeMode);
  get fraction(): number;
  set fraction(val: number);
  get inverted(): boolean;
  set inverted(val: boolean);
  get pulse_step(): number;
  set pulse_step(val: number);
  get show_text(): boolean;
  set show_text(val: boolean);
  get text(): string;
  set text(val: string);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): ProgressBar;

  // Members

  get_ellipsize(): Pango.EllipsizeMode;
  get_fraction(): number;
  get_inverted(): boolean;
  get_pulse_step(): number;
  get_show_text(): boolean;
  get_text(): string | null;
  pulse(): void;
  set_ellipsize(mode: Pango.EllipsizeMode): void;
  set_fraction(fraction: number): void;
  set_inverted(inverted: boolean): void;
  set_pulse_step(fraction: number): void;
  set_show_text(show_text: boolean): void;
  set_text(text?: string | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  vfunc_set_current_value(value: number): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module PropertyExpression {
  export interface ConstructorProperties
    extends Expression.ConstructorProperties {
    [key: string]: any;
  }
}
export class PropertyExpression extends Expression {
  static $gtype: GObject.GType<PropertyExpression>;

  constructor(
    properties?: Partial<PropertyExpression.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<PropertyExpression.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](
    this_type: GObject.GType,
    expression: Expression | null,
    property_name: string
  ): PropertyExpression;
  static new_for_pspec(
    expression: Expression | null,
    pspec: GObject.ParamSpec
  ): PropertyExpression;

  // Members

  get_expression(): Expression | null;
  get_pspec(): GObject.ParamSpec;
}
export module Range {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    adjustment: Adjustment;
    fill_level: number;
    inverted: boolean;
    restrict_to_fill_level: boolean;
    round_digits: number;
    show_fill_level: boolean;
  }
}
export class Range
  extends Widget
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<Range>;

  constructor(
    properties?: Partial<Range.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Range.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get adjustment(): Adjustment;
  set adjustment(val: Adjustment);
  get fill_level(): number;
  set fill_level(val: number);
  get inverted(): boolean;
  set inverted(val: boolean);
  get restrict_to_fill_level(): boolean;
  set restrict_to_fill_level(val: boolean);
  get round_digits(): number;
  set round_digits(val: number);
  get show_fill_level(): boolean;
  set show_fill_level(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "adjust-bounds",
    callback: (_source: this, value: number) => void
  ): number;
  connect_after(
    signal: "adjust-bounds",
    callback: (_source: this, value: number) => void
  ): number;
  emit(signal: "adjust-bounds", value: number): void;
  connect(
    signal: "change-value",
    callback: (_source: this, scroll: ScrollType, value: number) => boolean
  ): number;
  connect_after(
    signal: "change-value",
    callback: (_source: this, scroll: ScrollType, value: number) => boolean
  ): number;
  emit(signal: "change-value", scroll: ScrollType, value: number): void;
  connect(
    signal: "move-slider",
    callback: (_source: this, step: ScrollType) => void
  ): number;
  connect_after(
    signal: "move-slider",
    callback: (_source: this, step: ScrollType) => void
  ): number;
  emit(signal: "move-slider", step: ScrollType): void;
  connect(signal: "value-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "value-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "value-changed"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Members

  get_adjustment(): Adjustment;
  get_fill_level(): number;
  get_flippable(): boolean;
  get_inverted(): boolean;
  get_range_rect(): Gdk.Rectangle;
  get_restrict_to_fill_level(): boolean;
  get_round_digits(): number;
  get_show_fill_level(): boolean;
  get_slider_range(): [number, number];
  get_slider_size_fixed(): boolean;
  get_value(): number;
  set_adjustment(adjustment: Adjustment): void;
  set_fill_level(fill_level: number): void;
  set_flippable(flippable: boolean): void;
  set_increments(step: number, page: number): void;
  set_inverted(setting: boolean): void;
  set_range(min: number, max: number): void;
  set_restrict_to_fill_level(restrict_to_fill_level: boolean): void;
  set_round_digits(round_digits: number): void;
  set_show_fill_level(show_fill_level: boolean): void;
  set_slider_size_fixed(size_fixed: boolean): void;
  set_value(value: number): void;
  vfunc_adjust_bounds(new_value: number): void;
  vfunc_change_value(scroll: ScrollType, new_value: number): boolean;
  vfunc_get_range_border(border_: Border): void;
  vfunc_move_slider(scroll: ScrollType): void;
  vfunc_value_changed(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  vfunc_set_current_value(value: number): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module RecentManager {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    filename: string;
    size: number;
  }
}
export class RecentManager extends GObject.Object {
  static $gtype: GObject.GType<RecentManager>;

  constructor(
    properties?: Partial<RecentManager.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<RecentManager.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get filename(): string;
  get size(): number;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;

  // Constructors

  static ["new"](): RecentManager;

  // Members

  add_full(uri: string, recent_data: RecentData): boolean;
  add_item(uri: string): boolean;
  get_items(): RecentInfo[];
  has_item(uri: string): boolean;
  lookup_item(uri: string): RecentInfo | null;
  move_item(uri: string, new_uri?: string | null): boolean;
  purge_items(): number;
  remove_item(uri: string): boolean;
  vfunc_changed(): void;
  static get_default(): RecentManager;
}
export module Revealer {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    child_revealed: boolean;
    reveal_child: boolean;
    transition_duration: number;
    transition_type: RevealerTransitionType;
  }
}
export class Revealer
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Revealer>;

  constructor(
    properties?: Partial<Revealer.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Revealer.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get child_revealed(): boolean;
  get reveal_child(): boolean;
  set reveal_child(val: boolean);
  get transition_duration(): number;
  set transition_duration(val: number);
  get transition_type(): RevealerTransitionType;
  set transition_type(val: RevealerTransitionType);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Revealer;

  // Members

  get_child(): Widget | null;
  get_child_revealed(): boolean;
  get_reveal_child(): boolean;
  get_transition_duration(): number;
  get_transition_type(): RevealerTransitionType;
  set_child(child?: Widget | null): void;
  set_reveal_child(reveal_child: boolean): void;
  set_transition_duration(duration: number): void;
  set_transition_type(transition: RevealerTransitionType): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Scale {
  export interface ConstructorProperties extends Range.ConstructorProperties {
    [key: string]: any;
    digits: number;
    draw_value: boolean;
    has_origin: boolean;
    value_pos: PositionType;
  }
}
export class Scale
  extends Range
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<Scale>;

  constructor(
    properties?: Partial<Scale.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Scale.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get digits(): number;
  set digits(val: number);
  get draw_value(): boolean;
  set draw_value(val: boolean);
  get has_origin(): boolean;
  set has_origin(val: boolean);
  get value_pos(): PositionType;
  set value_pos(val: PositionType);

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](
    orientation: Orientation,
    adjustment?: Adjustment | null
  ): Scale;
  static new_with_range(
    orientation: Orientation,
    min: number,
    max: number,
    step: number
  ): Scale;

  // Members

  add_mark(value: number, position: PositionType, markup?: string | null): void;
  clear_marks(): void;
  get_digits(): number;
  get_draw_value(): boolean;
  get_has_origin(): boolean;
  get_layout(): Pango.Layout | null;
  get_layout_offsets(): [number, number];
  get_value_pos(): PositionType;
  set_digits(digits: number): void;
  set_draw_value(draw_value: boolean): void;
  set_format_value_func(
    func?: ScaleFormatValueFunc | null,
    destroy_notify?: GLib.DestroyNotify | null
  ): void;
  set_has_origin(has_origin: boolean): void;
  set_value_pos(pos: PositionType): void;
  vfunc_get_layout_offsets(): [number, number];

  // Implemented Members

  vfunc_set_current_value(value: number): boolean;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module ScaleButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    active: boolean;
    adjustment: Adjustment;
    icons: string[];
    value: number;
  }
}
export class ScaleButton
  extends Widget
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<ScaleButton>;

  constructor(
    properties?: Partial<ScaleButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ScaleButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): boolean;
  get adjustment(): Adjustment;
  set adjustment(val: Adjustment);
  get icons(): string[];
  set icons(val: string[]);
  get value(): number;
  set value(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "popdown", callback: (_source: this) => void): number;
  connect_after(signal: "popdown", callback: (_source: this) => void): number;
  emit(signal: "popdown"): void;
  connect(signal: "popup", callback: (_source: this) => void): number;
  connect_after(signal: "popup", callback: (_source: this) => void): number;
  emit(signal: "popup"): void;
  connect(
    signal: "value-changed",
    callback: (_source: this, value: number) => void
  ): number;
  connect_after(
    signal: "value-changed",
    callback: (_source: this, value: number) => void
  ): number;
  emit(signal: "value-changed", value: number): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](
    min: number,
    max: number,
    step: number,
    icons?: string[] | null
  ): ScaleButton;

  // Members

  get_active(): boolean;
  get_adjustment(): Adjustment;
  get_minus_button(): Button;
  get_plus_button(): Button;
  get_popup(): Widget;
  get_value(): number;
  set_adjustment(adjustment: Adjustment): void;
  set_icons(icons: string[]): void;
  set_value(value: number): void;
  vfunc_value_changed(value: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  vfunc_set_current_value(value: number): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module Scrollbar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    adjustment: Adjustment;
  }
}
export class Scrollbar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<Scrollbar>;

  constructor(
    properties?: Partial<Scrollbar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Scrollbar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get adjustment(): Adjustment;
  set adjustment(val: Adjustment);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](
    orientation: Orientation,
    adjustment?: Adjustment | null
  ): Scrollbar;

  // Members

  get_adjustment(): Adjustment;
  set_adjustment(adjustment?: Adjustment | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module ScrolledWindow {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    hadjustment: Adjustment;
    has_frame: boolean;
    hscrollbar_policy: PolicyType;
    kinetic_scrolling: boolean;
    max_content_height: number;
    max_content_width: number;
    min_content_height: number;
    min_content_width: number;
    overlay_scrolling: boolean;
    propagate_natural_height: boolean;
    propagate_natural_width: boolean;
    vadjustment: Adjustment;
    vscrollbar_policy: PolicyType;
    window_placement: CornerType;
  }
}
export class ScrolledWindow
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ScrolledWindow>;

  constructor(
    properties?: Partial<ScrolledWindow.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ScrolledWindow.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get has_frame(): boolean;
  set has_frame(val: boolean);
  get hscrollbar_policy(): PolicyType;
  set hscrollbar_policy(val: PolicyType);
  get kinetic_scrolling(): boolean;
  set kinetic_scrolling(val: boolean);
  get max_content_height(): number;
  set max_content_height(val: number);
  get max_content_width(): number;
  set max_content_width(val: number);
  get min_content_height(): number;
  set min_content_height(val: number);
  get min_content_width(): number;
  set min_content_width(val: number);
  get overlay_scrolling(): boolean;
  set overlay_scrolling(val: boolean);
  get propagate_natural_height(): boolean;
  set propagate_natural_height(val: boolean);
  get propagate_natural_width(): boolean;
  set propagate_natural_width(val: boolean);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscrollbar_policy(): PolicyType;
  set vscrollbar_policy(val: PolicyType);
  get window_placement(): CornerType;
  set window_placement(val: CornerType);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "edge-overshot",
    callback: (_source: this, pos: PositionType) => void
  ): number;
  connect_after(
    signal: "edge-overshot",
    callback: (_source: this, pos: PositionType) => void
  ): number;
  emit(signal: "edge-overshot", pos: PositionType): void;
  connect(
    signal: "edge-reached",
    callback: (_source: this, pos: PositionType) => void
  ): number;
  connect_after(
    signal: "edge-reached",
    callback: (_source: this, pos: PositionType) => void
  ): number;
  emit(signal: "edge-reached", pos: PositionType): void;
  connect(
    signal: "move-focus-out",
    callback: (_source: this, direction_type: DirectionType) => void
  ): number;
  connect_after(
    signal: "move-focus-out",
    callback: (_source: this, direction_type: DirectionType) => void
  ): number;
  emit(signal: "move-focus-out", direction_type: DirectionType): void;
  connect(
    signal: "scroll-child",
    callback: (
      _source: this,
      scroll: ScrollType,
      horizontal: boolean
    ) => boolean
  ): number;
  connect_after(
    signal: "scroll-child",
    callback: (
      _source: this,
      scroll: ScrollType,
      horizontal: boolean
    ) => boolean
  ): number;
  emit(signal: "scroll-child", scroll: ScrollType, horizontal: boolean): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): ScrolledWindow;

  // Members

  get_child(): Widget | null;
  get_hadjustment(): Adjustment;
  get_has_frame(): boolean;
  get_hscrollbar(): Widget;
  get_kinetic_scrolling(): boolean;
  get_max_content_height(): number;
  get_max_content_width(): number;
  get_min_content_height(): number;
  get_min_content_width(): number;
  get_overlay_scrolling(): boolean;
  get_placement(): CornerType;
  get_policy(): [PolicyType | null, PolicyType | null];
  get_propagate_natural_height(): boolean;
  get_propagate_natural_width(): boolean;
  get_vadjustment(): Adjustment;
  get_vscrollbar(): Widget;
  set_child(child?: Widget | null): void;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_has_frame(has_frame: boolean): void;
  set_kinetic_scrolling(kinetic_scrolling: boolean): void;
  set_max_content_height(height: number): void;
  set_max_content_width(width: number): void;
  set_min_content_height(height: number): void;
  set_min_content_width(width: number): void;
  set_overlay_scrolling(overlay_scrolling: boolean): void;
  set_placement(window_placement: CornerType): void;
  set_policy(
    hscrollbar_policy: PolicyType,
    vscrollbar_policy: PolicyType
  ): void;
  set_propagate_natural_height(propagate: boolean): void;
  set_propagate_natural_width(propagate: boolean): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  unset_placement(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module SearchBar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    key_capture_widget: Widget;
    search_mode_enabled: boolean;
    show_close_button: boolean;
  }
}
export class SearchBar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<SearchBar>;

  constructor(
    properties?: Partial<SearchBar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SearchBar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get key_capture_widget(): Widget;
  set key_capture_widget(val: Widget);
  get search_mode_enabled(): boolean;
  set search_mode_enabled(val: boolean);
  get show_close_button(): boolean;
  set show_close_button(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): SearchBar;

  // Members

  connect_entry(entry: Editable): void;
  get_child(): Widget | null;
  get_key_capture_widget(): Widget | null;
  get_search_mode(): boolean;
  get_show_close_button(): boolean;
  set_child(child?: Widget | null): void;
  set_key_capture_widget(widget?: Widget | null): void;
  set_search_mode(search_mode: boolean): void;
  set_show_close_button(visible: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module SearchEntry {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activates_default: boolean;
    placeholder_text: string;
    search_delay: number;
  }
}
export class SearchEntry
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Editable
{
  static $gtype: GObject.GType<SearchEntry>;

  constructor(
    properties?: Partial<SearchEntry.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SearchEntry.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activates_default(): boolean;
  set activates_default(val: boolean);
  get placeholder_text(): string;
  set placeholder_text(val: string);
  get search_delay(): number;
  set search_delay(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "next-match", callback: (_source: this) => void): number;
  connect_after(
    signal: "next-match",
    callback: (_source: this) => void
  ): number;
  emit(signal: "next-match"): void;
  connect(signal: "previous-match", callback: (_source: this) => void): number;
  connect_after(
    signal: "previous-match",
    callback: (_source: this) => void
  ): number;
  emit(signal: "previous-match"): void;
  connect(signal: "search-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "search-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "search-changed"): void;
  connect(signal: "search-started", callback: (_source: this) => void): number;
  connect_after(
    signal: "search-started",
    callback: (_source: this) => void
  ): number;
  emit(signal: "search-started"): void;
  connect(signal: "stop-search", callback: (_source: this) => void): number;
  connect_after(
    signal: "stop-search",
    callback: (_source: this) => void
  ): number;
  emit(signal: "stop-search"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get cursor_position(): number;
  get editable(): boolean;
  set editable(val: boolean);
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get selection_bound(): number;
  get text(): string;
  set text(val: string);
  get width_chars(): number;
  set width_chars(val: number);
  get xalign(): number;
  set xalign(val: number);

  // Constructors

  static ["new"](): SearchEntry;

  // Members

  get_key_capture_widget(): Widget | null;
  get_placeholder_text(): string | null;
  get_search_delay(): number;
  set_key_capture_widget(widget?: Widget | null): void;
  set_placeholder_text(text?: string | null): void;
  set_search_delay(delay: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_alignment(): number;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_alignment(xalign: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module SelectionFilterModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    model: SelectionModel;
    n_items: number;
  }
}
export class SelectionFilterModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<SelectionFilterModel>;

  constructor(
    properties?: Partial<SelectionFilterModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SelectionFilterModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get model(): SelectionModel;
  set model(val: SelectionModel);
  get n_items(): number;

  // Constructors

  static ["new"](model?: SelectionModel | null): SelectionFilterModel;

  // Members

  get_model(): SelectionModel | null;
  set_model(model?: SelectionModel | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module Separator {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
  }
}
export class Separator
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<Separator>;

  constructor(
    properties?: Partial<Separator.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Separator.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](orientation: Orientation): Separator;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module Settings {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    gtk_alternative_button_order: boolean;
    gtk_alternative_sort_arrows: boolean;
    gtk_application_prefer_dark_theme: boolean;
    gtk_cursor_aspect_ratio: number;
    gtk_cursor_blink: boolean;
    gtk_cursor_blink_time: number;
    gtk_cursor_blink_timeout: number;
    gtk_cursor_theme_name: string;
    gtk_cursor_theme_size: number;
    gtk_decoration_layout: string;
    gtk_dialogs_use_header: boolean;
    gtk_dnd_drag_threshold: number;
    gtk_double_click_distance: number;
    gtk_double_click_time: number;
    gtk_enable_accels: boolean;
    gtk_enable_animations: boolean;
    gtk_enable_event_sounds: boolean;
    gtk_enable_input_feedback_sounds: boolean;
    gtk_enable_primary_paste: boolean;
    gtk_entry_password_hint_timeout: number;
    gtk_entry_select_on_focus: boolean;
    gtk_error_bell: boolean;
    gtk_font_name: string;
    gtk_fontconfig_timestamp: number;
    gtk_hint_font_metrics: boolean;
    gtk_icon_theme_name: string;
    gtk_im_module: string;
    gtk_keynav_use_caret: boolean;
    gtk_label_select_on_focus: boolean;
    gtk_long_press_time: number;
    gtk_overlay_scrolling: boolean;
    gtk_primary_button_warps_slider: boolean;
    gtk_print_backends: string;
    gtk_print_preview_command: string;
    gtk_recent_files_enabled: boolean;
    gtk_recent_files_max_age: number;
    gtk_shell_shows_app_menu: boolean;
    gtk_shell_shows_desktop: boolean;
    gtk_shell_shows_menubar: boolean;
    gtk_sound_theme_name: string;
    gtk_split_cursor: boolean;
    gtk_theme_name: string;
    gtk_titlebar_double_click: string;
    gtk_titlebar_middle_click: string;
    gtk_titlebar_right_click: string;
    gtk_xft_antialias: number;
    gtk_xft_dpi: number;
    gtk_xft_hinting: number;
    gtk_xft_hintstyle: string;
    gtk_xft_rgba: string;
  }
}
export class Settings extends GObject.Object implements StyleProvider {
  static $gtype: GObject.GType<Settings>;

  constructor(
    properties?: Partial<Settings.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Settings.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get gtk_alternative_button_order(): boolean;
  set gtk_alternative_button_order(val: boolean);
  get gtk_alternative_sort_arrows(): boolean;
  set gtk_alternative_sort_arrows(val: boolean);
  get gtk_application_prefer_dark_theme(): boolean;
  set gtk_application_prefer_dark_theme(val: boolean);
  get gtk_cursor_aspect_ratio(): number;
  set gtk_cursor_aspect_ratio(val: number);
  get gtk_cursor_blink(): boolean;
  set gtk_cursor_blink(val: boolean);
  get gtk_cursor_blink_time(): number;
  set gtk_cursor_blink_time(val: number);
  get gtk_cursor_blink_timeout(): number;
  set gtk_cursor_blink_timeout(val: number);
  get gtk_cursor_theme_name(): string;
  set gtk_cursor_theme_name(val: string);
  get gtk_cursor_theme_size(): number;
  set gtk_cursor_theme_size(val: number);
  get gtk_decoration_layout(): string;
  set gtk_decoration_layout(val: string);
  get gtk_dialogs_use_header(): boolean;
  set gtk_dialogs_use_header(val: boolean);
  get gtk_dnd_drag_threshold(): number;
  set gtk_dnd_drag_threshold(val: number);
  get gtk_double_click_distance(): number;
  set gtk_double_click_distance(val: number);
  get gtk_double_click_time(): number;
  set gtk_double_click_time(val: number);
  get gtk_enable_accels(): boolean;
  set gtk_enable_accels(val: boolean);
  get gtk_enable_animations(): boolean;
  set gtk_enable_animations(val: boolean);
  get gtk_enable_event_sounds(): boolean;
  set gtk_enable_event_sounds(val: boolean);
  get gtk_enable_input_feedback_sounds(): boolean;
  set gtk_enable_input_feedback_sounds(val: boolean);
  get gtk_enable_primary_paste(): boolean;
  set gtk_enable_primary_paste(val: boolean);
  get gtk_entry_password_hint_timeout(): number;
  set gtk_entry_password_hint_timeout(val: number);
  get gtk_entry_select_on_focus(): boolean;
  set gtk_entry_select_on_focus(val: boolean);
  get gtk_error_bell(): boolean;
  set gtk_error_bell(val: boolean);
  get gtk_font_name(): string;
  set gtk_font_name(val: string);
  get gtk_fontconfig_timestamp(): number;
  set gtk_fontconfig_timestamp(val: number);
  get gtk_hint_font_metrics(): boolean;
  set gtk_hint_font_metrics(val: boolean);
  get gtk_icon_theme_name(): string;
  set gtk_icon_theme_name(val: string);
  get gtk_im_module(): string;
  set gtk_im_module(val: string);
  get gtk_keynav_use_caret(): boolean;
  set gtk_keynav_use_caret(val: boolean);
  get gtk_label_select_on_focus(): boolean;
  set gtk_label_select_on_focus(val: boolean);
  get gtk_long_press_time(): number;
  set gtk_long_press_time(val: number);
  get gtk_overlay_scrolling(): boolean;
  set gtk_overlay_scrolling(val: boolean);
  get gtk_primary_button_warps_slider(): boolean;
  set gtk_primary_button_warps_slider(val: boolean);
  get gtk_print_backends(): string;
  set gtk_print_backends(val: string);
  get gtk_print_preview_command(): string;
  set gtk_print_preview_command(val: string);
  get gtk_recent_files_enabled(): boolean;
  set gtk_recent_files_enabled(val: boolean);
  get gtk_recent_files_max_age(): number;
  set gtk_recent_files_max_age(val: number);
  get gtk_shell_shows_app_menu(): boolean;
  set gtk_shell_shows_app_menu(val: boolean);
  get gtk_shell_shows_desktop(): boolean;
  set gtk_shell_shows_desktop(val: boolean);
  get gtk_shell_shows_menubar(): boolean;
  set gtk_shell_shows_menubar(val: boolean);
  get gtk_sound_theme_name(): string;
  set gtk_sound_theme_name(val: string);
  get gtk_split_cursor(): boolean;
  set gtk_split_cursor(val: boolean);
  get gtk_theme_name(): string;
  set gtk_theme_name(val: string);
  get gtk_titlebar_double_click(): string;
  set gtk_titlebar_double_click(val: string);
  get gtk_titlebar_middle_click(): string;
  set gtk_titlebar_middle_click(val: string);
  get gtk_titlebar_right_click(): string;
  set gtk_titlebar_right_click(val: string);
  get gtk_xft_antialias(): number;
  set gtk_xft_antialias(val: number);
  get gtk_xft_dpi(): number;
  set gtk_xft_dpi(val: number);
  get gtk_xft_hinting(): number;
  set gtk_xft_hinting(val: number);
  get gtk_xft_hintstyle(): string;
  set gtk_xft_hintstyle(val: string);
  get gtk_xft_rgba(): string;
  set gtk_xft_rgba(val: string);

  // Members

  reset_property(name: string): void;
  static get_default(): Settings | null;
  static get_for_display(display: Gdk.Display): Settings;
}
export module Shortcut {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    action: ShortcutAction;
    arguments: GLib.Variant;
    trigger: ShortcutTrigger;
  }
}
export class Shortcut extends GObject.Object {
  static $gtype: GObject.GType<Shortcut>;

  constructor(
    properties?: Partial<Shortcut.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Shortcut.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get action(): ShortcutAction;
  set action(val: ShortcutAction);
  get arguments(): GLib.Variant;
  set arguments(val: GLib.Variant);
  get trigger(): ShortcutTrigger;
  set trigger(val: ShortcutTrigger);

  // Constructors

  static ["new"](
    trigger?: ShortcutTrigger | null,
    action?: ShortcutAction | null
  ): Shortcut;

  // Members

  get_action(): ShortcutAction | null;
  get_arguments(): GLib.Variant | null;
  get_trigger(): ShortcutTrigger | null;
  set_action(action?: ShortcutAction | null): void;
  set_arguments(args?: GLib.Variant | null): void;
  set_trigger(trigger?: ShortcutTrigger | null): void;
}
export module ShortcutAction {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export abstract class ShortcutAction extends GObject.Object {
  static $gtype: GObject.GType<ShortcutAction>;

  constructor(
    properties?: Partial<ShortcutAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static parse_string(string: string): ShortcutAction;

  // Members

  activate(
    flags: ShortcutActionFlags,
    widget: Widget,
    args?: GLib.Variant | null
  ): boolean;
  print(string: GLib.String): void;
  to_string(): string;
}
export module ShortcutController {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends EventController.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    mnemonic_modifiers: Gdk.ModifierType;
    model: Gio.ListModel;
    n_items: number;
    scope: ShortcutScope;
  }
}
export class ShortcutController<A extends GObject.Object = GObject.Object>
  extends EventController
  implements Gio.ListModel<A>, Buildable
{
  static $gtype: GObject.GType<ShortcutController>;

  constructor(
    properties?: Partial<ShortcutController.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutController.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get mnemonic_modifiers(): Gdk.ModifierType;
  set mnemonic_modifiers(val: Gdk.ModifierType);
  set model(val: Gio.ListModel);
  get n_items(): number;
  get scope(): ShortcutScope;
  set scope(val: ShortcutScope);

  // Constructors

  static ["new"](): ShortcutController;
  static new_for_model(model: Gio.ListModel): ShortcutController;

  // Members

  add_shortcut(shortcut: Shortcut): void;
  get_mnemonics_modifiers(): Gdk.ModifierType;
  get_scope(): ShortcutScope;
  remove_shortcut(shortcut: Shortcut): void;
  set_mnemonics_modifiers(modifiers: Gdk.ModifierType): void;
  set_scope(scope: ShortcutScope): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ShortcutLabel {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    accelerator: string;
    disabled_text: string;
  }
}
export class ShortcutLabel
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ShortcutLabel>;

  constructor(
    properties?: Partial<ShortcutLabel.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutLabel.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accelerator(): string;
  set accelerator(val: string);
  get disabled_text(): string;
  set disabled_text(val: string);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](accelerator: string): ShortcutLabel;

  // Members

  get_accelerator(): string | null;
  get_disabled_text(): string | null;
  set_accelerator(accelerator: string): void;
  set_disabled_text(disabled_text: string): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ShortcutTrigger {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export abstract class ShortcutTrigger extends GObject.Object {
  static $gtype: GObject.GType<ShortcutTrigger>;

  constructor(
    properties?: Partial<ShortcutTrigger.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutTrigger.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static parse_string(string: string): ShortcutTrigger;

  // Members

  compare(trigger2: ShortcutTrigger): number;
  equal(trigger2: ShortcutTrigger): boolean;
  hash(): number;
  print(string: GLib.String): void;
  print_label(display: Gdk.Display, string: GLib.String): boolean;
  to_label(display: Gdk.Display): string;
  to_string(): string;
  trigger(event: Gdk.Event, enable_mnemonics: boolean): Gdk.KeyMatch;
}
export module ShortcutsGroup {
  export interface ConstructorProperties extends Box.ConstructorProperties {
    [key: string]: any;
    accel_size_group: SizeGroup;
    height: number;
    title: string;
    title_size_group: SizeGroup;
    view: string;
  }
}
export class ShortcutsGroup
  extends Box
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<ShortcutsGroup>;

  constructor(
    properties?: Partial<ShortcutsGroup.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutsGroup.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  set accel_size_group(val: SizeGroup);
  get height(): number;
  get title(): string;
  set title(val: string);
  set title_size_group(val: SizeGroup);
  get view(): string;
  set view(val: string);

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Implemented Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module ShortcutsSection {
  export interface ConstructorProperties extends Box.ConstructorProperties {
    [key: string]: any;
    max_height: number;
    section_name: string;
    title: string;
    view_name: string;
  }
}
export class ShortcutsSection
  extends Box
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<ShortcutsSection>;

  constructor(
    properties?: Partial<ShortcutsSection.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutsSection.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get max_height(): number;
  set max_height(val: number);
  get section_name(): string;
  set section_name(val: string);
  get title(): string;
  set title(val: string);
  get view_name(): string;
  set view_name(val: string);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "change-current-page",
    callback: (_source: this, object: number) => boolean
  ): number;
  connect_after(
    signal: "change-current-page",
    callback: (_source: this, object: number) => boolean
  ): number;
  emit(signal: "change-current-page", object: number): void;

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Implemented Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module ShortcutsShortcut {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    accel_size_group: SizeGroup;
    accelerator: string;
    action_name: string;
    direction: TextDirection;
    icon: Gio.Icon;
    icon_set: boolean;
    shortcut_type: ShortcutType;
    subtitle: string;
    subtitle_set: boolean;
    title: string;
    title_size_group: SizeGroup;
  }
}
export class ShortcutsShortcut
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ShortcutsShortcut>;

  constructor(
    properties?: Partial<ShortcutsShortcut.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutsShortcut.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  set accel_size_group(val: SizeGroup);
  get accelerator(): string;
  set accelerator(val: string);
  get action_name(): string;
  set action_name(val: string);
  get direction(): TextDirection;
  set direction(val: TextDirection);
  get icon(): Gio.Icon;
  set icon(val: Gio.Icon);
  get icon_set(): boolean;
  set icon_set(val: boolean);
  get shortcut_type(): ShortcutType;
  set shortcut_type(val: ShortcutType);
  get subtitle(): string;
  set subtitle(val: string);
  get subtitle_set(): boolean;
  set subtitle_set(val: boolean);
  get title(): string;
  set title(val: string);
  set title_size_group(val: SizeGroup);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module ShortcutsWindow {
  export interface ConstructorProperties extends Window.ConstructorProperties {
    [key: string]: any;
    section_name: string;
    view_name: string;
  }
}
export class ShortcutsWindow
  extends Window
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<ShortcutsWindow>;

  constructor(
    properties?: Partial<ShortcutsWindow.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ShortcutsWindow.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get section_name(): string;
  set section_name(val: string);
  get view_name(): string;
  set view_name(val: string);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "close", callback: (_source: this) => void): number;
  connect_after(signal: "close", callback: (_source: this) => void): number;
  emit(signal: "close"): void;
  connect(signal: "search", callback: (_source: this) => void): number;
  connect_after(signal: "search", callback: (_source: this) => void): number;
  emit(signal: "search"): void;

  // Implemented Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module SignalAction {
  export interface ConstructorProperties
    extends ShortcutAction.ConstructorProperties {
    [key: string]: any;
    signal_name: string;
  }
}
export class SignalAction extends ShortcutAction {
  static $gtype: GObject.GType<SignalAction>;

  constructor(
    properties?: Partial<SignalAction.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SignalAction.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get signal_name(): string;

  // Constructors

  static ["new"](signal_name: string): SignalAction;

  // Members

  get_signal_name(): string;
}
export module SignalListItemFactory {
  export interface ConstructorProperties
    extends ListItemFactory.ConstructorProperties {
    [key: string]: any;
  }
}
export class SignalListItemFactory extends ListItemFactory {
  static $gtype: GObject.GType<SignalListItemFactory>;

  constructor(
    properties?: Partial<SignalListItemFactory.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SignalListItemFactory.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "bind",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  connect_after(
    signal: "bind",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  emit(signal: "bind", object: GObject.Object): void;
  connect(
    signal: "setup",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  connect_after(
    signal: "setup",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  emit(signal: "setup", object: GObject.Object): void;
  connect(
    signal: "teardown",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  connect_after(
    signal: "teardown",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  emit(signal: "teardown", object: GObject.Object): void;
  connect(
    signal: "unbind",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  connect_after(
    signal: "unbind",
    callback: (_source: this, object: GObject.Object) => void
  ): number;
  emit(signal: "unbind", object: GObject.Object): void;

  // Constructors

  static ["new"](): SignalListItemFactory;
}
export module SingleSelection {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    autoselect: boolean;
    can_unselect: boolean;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
    selected: number;
    selected_item: GObject.Object;
  }
}
export class SingleSelection<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>, SelectionModel<A>
{
  static $gtype: GObject.GType<SingleSelection>;

  constructor(
    properties?: Partial<SingleSelection.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SingleSelection.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get autoselect(): boolean;
  set autoselect(val: boolean);
  get can_unselect(): boolean;
  set can_unselect(val: boolean);
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;
  get selected(): number;
  set selected(val: number);
  get selected_item(): GObject.Object;

  // Constructors

  static ["new"](model?: Gio.ListModel | null): SingleSelection;

  // Members

  get_autoselect(): boolean;
  get_can_unselect(): boolean;
  get_model(): Gio.ListModel | null;
  get_selected(): number;
  get_selected_item<T = GObject.Object>(): T;
  set_autoselect(autoselect: boolean): void;
  set_can_unselect(can_unselect: boolean): void;
  set_model(model?: Gio.ListModel | null): void;
  set_selected(position: number): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_selection(): Bitset;
  get_selection_in_range(position: number, n_items: number): Bitset;
  is_selected(position: number): boolean;
  select_all(): boolean;
  select_item(position: number, unselect_rest: boolean): boolean;
  select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  selection_changed(position: number, n_items: number): void;
  set_selection(selected: Bitset, mask: Bitset): boolean;
  unselect_all(): boolean;
  unselect_item(position: number): boolean;
  unselect_range(position: number, n_items: number): boolean;
  vfunc_get_selection_in_range(position: number, n_items: number): Bitset;
  vfunc_is_selected(position: number): boolean;
  vfunc_select_all(): boolean;
  vfunc_select_item(position: number, unselect_rest: boolean): boolean;
  vfunc_select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  vfunc_set_selection(selected: Bitset, mask: Bitset): boolean;
  vfunc_unselect_all(): boolean;
  vfunc_unselect_item(position: number): boolean;
  vfunc_unselect_range(position: number, n_items: number): boolean;
}
export module SizeGroup {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    mode: SizeGroupMode;
  }
}
export class SizeGroup extends GObject.Object implements Buildable {
  static $gtype: GObject.GType<SizeGroup>;

  constructor(
    properties?: Partial<SizeGroup.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SizeGroup.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get mode(): SizeGroupMode;
  set mode(val: SizeGroupMode);

  // Constructors

  static ["new"](mode: SizeGroupMode): SizeGroup;

  // Members

  add_widget(widget: Widget): void;
  get_mode(): SizeGroupMode;
  get_widgets(): Widget[];
  remove_widget(widget: Widget): void;
  set_mode(mode: SizeGroupMode): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module SliceListModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
    offset: number;
    size: number;
  }
}
export class SliceListModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<SliceListModel>;

  constructor(
    properties?: Partial<SliceListModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SliceListModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;
  get offset(): number;
  set offset(val: number);
  get size(): number;
  set size(val: number);

  // Constructors

  static ["new"](
    model: Gio.ListModel | null,
    offset: number,
    size: number
  ): SliceListModel;

  // Members

  get_model(): Gio.ListModel | null;
  get_offset(): number;
  get_size(): number;
  set_model(model?: Gio.ListModel | null): void;
  set_offset(offset: number): void;
  set_size(size: number): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module Snapshot {
  export interface ConstructorProperties
    extends Gdk.Snapshot.ConstructorProperties {
    [key: string]: any;
  }
}
export class Snapshot extends Gdk.Snapshot {
  static $gtype: GObject.GType<Snapshot>;

  constructor(
    properties?: Partial<Snapshot.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Snapshot.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): Snapshot;

  // Members

  append_border(
    outline: Gsk.RoundedRect,
    border_width: number[],
    border_color: Gdk.RGBA[]
  ): void;
  append_cairo(bounds: Graphene.Rect): cairo.Context;
  append_color(color: Gdk.RGBA, bounds: Graphene.Rect): void;
  append_conic_gradient(
    bounds: Graphene.Rect,
    center: Graphene.Point,
    rotation: number,
    stops: Gsk.ColorStop[]
  ): void;
  append_inset_shadow(
    outline: Gsk.RoundedRect,
    color: Gdk.RGBA,
    dx: number,
    dy: number,
    spread: number,
    blur_radius: number
  ): void;
  append_layout(layout: Pango.Layout, color: Gdk.RGBA): void;
  append_linear_gradient(
    bounds: Graphene.Rect,
    start_point: Graphene.Point,
    end_point: Graphene.Point,
    stops: Gsk.ColorStop[]
  ): void;
  append_node(node: Gsk.RenderNode): void;
  append_outset_shadow(
    outline: Gsk.RoundedRect,
    color: Gdk.RGBA,
    dx: number,
    dy: number,
    spread: number,
    blur_radius: number
  ): void;
  append_radial_gradient(
    bounds: Graphene.Rect,
    center: Graphene.Point,
    hradius: number,
    vradius: number,
    start: number,
    end: number,
    stops: Gsk.ColorStop[]
  ): void;
  append_repeating_linear_gradient(
    bounds: Graphene.Rect,
    start_point: Graphene.Point,
    end_point: Graphene.Point,
    stops: Gsk.ColorStop[]
  ): void;
  append_repeating_radial_gradient(
    bounds: Graphene.Rect,
    center: Graphene.Point,
    hradius: number,
    vradius: number,
    start: number,
    end: number,
    stops: Gsk.ColorStop[]
  ): void;
  append_scaled_texture(
    texture: Gdk.Texture,
    filter: Gsk.ScalingFilter,
    bounds: Graphene.Rect
  ): void;
  append_texture(texture: Gdk.Texture, bounds: Graphene.Rect): void;
  gl_shader_pop_texture(): void;
  perspective(depth: number): void;
  pop(): void;
  push_blend(blend_mode: Gsk.BlendMode): void;
  push_blur(radius: number): void;
  push_clip(bounds: Graphene.Rect): void;
  push_color_matrix(
    color_matrix: Graphene.Matrix,
    color_offset: Graphene.Vec4
  ): void;
  push_cross_fade(progress: number): void;
  push_gl_shader(
    shader: Gsk.GLShader,
    bounds: Graphene.Rect,
    take_args: GLib.Bytes | Uint8Array
  ): void;
  push_mask(mask_mode: Gsk.MaskMode): void;
  push_opacity(opacity: number): void;
  push_repeat(bounds: Graphene.Rect, child_bounds?: Graphene.Rect | null): void;
  push_rounded_clip(bounds: Gsk.RoundedRect): void;
  push_shadow(shadow: Gsk.Shadow[]): void;
  render_background(
    context: StyleContext,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  render_focus(
    context: StyleContext,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  render_frame(
    context: StyleContext,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  render_insertion_cursor(
    context: StyleContext,
    x: number,
    y: number,
    layout: Pango.Layout,
    index: number,
    direction: Pango.Direction
  ): void;
  render_layout(
    context: StyleContext,
    x: number,
    y: number,
    layout: Pango.Layout
  ): void;
  restore(): void;
  rotate(angle: number): void;
  rotate_3d(angle: number, axis: Graphene.Vec3): void;
  save(): void;
  scale(factor_x: number, factor_y: number): void;
  scale_3d(factor_x: number, factor_y: number, factor_z: number): void;
  to_node(): Gsk.RenderNode | null;
  to_paintable(size?: Graphene.Size | null): Gdk.Paintable | null;
  transform(transform?: Gsk.Transform | null): void;
  transform_matrix(matrix: Graphene.Matrix): void;
  translate(point: Graphene.Point): void;
  translate_3d(point: Graphene.Point3D): void;
}
export module SortListModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    incremental: boolean;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
    pending: number;
    sorter: Sorter;
  }
}
export class SortListModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<SortListModel>;

  constructor(
    properties?: Partial<SortListModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SortListModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get incremental(): boolean;
  set incremental(val: boolean);
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  set model(val: Gio.ListModel);
  get n_items(): number;
  get pending(): number;
  get sorter(): Sorter;
  set sorter(val: Sorter);

  // Constructors

  static ["new"](
    model?: Gio.ListModel | null,
    sorter?: Sorter | null
  ): SortListModel;

  // Members

  get_incremental(): boolean;
  get_model(): Gio.ListModel | null;
  get_pending(): number;
  get_sorter(): Sorter | null;
  set_incremental(incremental: boolean): void;
  set_model(model?: Gio.ListModel | null): void;
  set_sorter(sorter?: Sorter | null): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module Sorter {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Sorter extends GObject.Object {
  static $gtype: GObject.GType<Sorter>;

  constructor(
    properties?: Partial<Sorter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Sorter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "changed",
    callback: (_source: this, change: SorterChange) => void
  ): number;
  connect_after(
    signal: "changed",
    callback: (_source: this, change: SorterChange) => void
  ): number;
  emit(signal: "changed", change: SorterChange): void;

  // Members

  changed(change: SorterChange): void;
  compare(item1: GObject.Object, item2: GObject.Object): Ordering;
  get_order(): SorterOrder;
  vfunc_compare(
    item1?: GObject.Object | null,
    item2?: GObject.Object | null
  ): Ordering;
  vfunc_get_order(): SorterOrder;
}
export module SpinButton {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    adjustment: Adjustment;
    climb_rate: number;
    digits: number;
    numeric: boolean;
    snap_to_ticks: boolean;
    update_policy: SpinButtonUpdatePolicy;
    value: number;
    wrap: boolean;
  }
}
export class SpinButton
  extends Widget
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    CellEditable,
    ConstraintTarget,
    Editable,
    Orientable
{
  static $gtype: GObject.GType<SpinButton>;

  constructor(
    properties?: Partial<SpinButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<SpinButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get adjustment(): Adjustment;
  set adjustment(val: Adjustment);
  get climb_rate(): number;
  set climb_rate(val: number);
  get digits(): number;
  set digits(val: number);
  get numeric(): boolean;
  set numeric(val: boolean);
  get snap_to_ticks(): boolean;
  set snap_to_ticks(val: boolean);
  get update_policy(): SpinButtonUpdatePolicy;
  set update_policy(val: SpinButtonUpdatePolicy);
  get value(): number;
  set value(val: number);
  get wrap(): boolean;
  set wrap(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "change-value",
    callback: (_source: this, scroll: ScrollType) => void
  ): number;
  connect_after(
    signal: "change-value",
    callback: (_source: this, scroll: ScrollType) => void
  ): number;
  emit(signal: "change-value", scroll: ScrollType): void;
  connect(
    signal: "input",
    callback: (_source: this, new_value: number) => number
  ): number;
  connect_after(
    signal: "input",
    callback: (_source: this, new_value: number) => number
  ): number;
  emit(signal: "input", new_value: number): void;
  connect(signal: "output", callback: (_source: this) => boolean): number;
  connect_after(signal: "output", callback: (_source: this) => boolean): number;
  emit(signal: "output"): void;
  connect(signal: "value-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "value-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "value-changed"): void;
  connect(signal: "wrapped", callback: (_source: this) => void): number;
  connect_after(signal: "wrapped", callback: (_source: this) => void): number;
  emit(signal: "wrapped"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get editing_canceled(): boolean;
  set editing_canceled(val: boolean);
  get cursor_position(): number;
  get editable(): boolean;
  set editable(val: boolean);
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get selection_bound(): number;
  get text(): string;
  set text(val: string);
  get width_chars(): number;
  set width_chars(val: number);
  get xalign(): number;
  set xalign(val: number);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](
    adjustment: Adjustment | null,
    climb_rate: number,
    digits: number
  ): SpinButton;
  static new_with_range(min: number, max: number, step: number): SpinButton;

  // Members

  configure(
    adjustment: Adjustment | null,
    climb_rate: number,
    digits: number
  ): void;
  get_adjustment(): Adjustment;
  get_climb_rate(): number;
  get_digits(): number;
  get_increments(): [number, number];
  get_numeric(): boolean;
  get_range(): [number, number];
  get_snap_to_ticks(): boolean;
  get_update_policy(): SpinButtonUpdatePolicy;
  get_value(): number;
  get_value_as_int(): number;
  get_wrap(): boolean;
  set_adjustment(adjustment: Adjustment): void;
  set_climb_rate(climb_rate: number): void;
  set_digits(digits: number): void;
  set_increments(step: number, page: number): void;
  set_numeric(numeric: boolean): void;
  set_range(min: number, max: number): void;
  set_snap_to_ticks(snap_to_ticks: boolean): void;
  set_update_policy(policy: SpinButtonUpdatePolicy): void;
  set_value(value: number): void;
  set_wrap(wrap: boolean): void;
  spin(direction: SpinType, increment: number): void;
  update(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  vfunc_set_current_value(value: number): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  editing_done(): void;
  remove_widget(): void;
  start_editing(event?: Gdk.Event | null): void;
  vfunc_editing_done(): void;
  vfunc_remove_widget(): void;
  vfunc_start_editing(event?: Gdk.Event | null): void;
  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_alignment(): number;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_alignment(xalign: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module Spinner {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    spinning: boolean;
  }
}
export class Spinner
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Spinner>;

  constructor(
    properties?: Partial<Spinner.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Spinner.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get spinning(): boolean;
  set spinning(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Spinner;

  // Members

  get_spinning(): boolean;
  set_spinning(spinning: boolean): void;
  start(): void;
  stop(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Stack {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    hhomogeneous: boolean;
    interpolate_size: boolean;
    pages: SelectionModel;
    transition_duration: number;
    transition_running: boolean;
    transition_type: StackTransitionType;
    vhomogeneous: boolean;
    visible_child: Widget;
    visible_child_name: string;
  }
}
export class Stack
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Stack>;

  constructor(
    properties?: Partial<Stack.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Stack.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get hhomogeneous(): boolean;
  set hhomogeneous(val: boolean);
  get interpolate_size(): boolean;
  set interpolate_size(val: boolean);
  get pages(): SelectionModel;
  get transition_duration(): number;
  set transition_duration(val: number);
  get transition_running(): boolean;
  get transition_type(): StackTransitionType;
  set transition_type(val: StackTransitionType);
  get vhomogeneous(): boolean;
  set vhomogeneous(val: boolean);
  get visible_child(): Widget;
  set visible_child(val: Widget);
  get visible_child_name(): string;
  set visible_child_name(val: string);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Stack;

  // Members

  add_child(child: Widget): StackPage;
  add_named(child: Widget, name?: string | null): StackPage;
  add_titled(child: Widget, name: string | null, title: string): StackPage;
  get_child_by_name(name: string): Widget | null;
  get_hhomogeneous(): boolean;
  get_interpolate_size(): boolean;
  get_page(child: Widget): StackPage;
  get_pages(): SelectionModel;
  get_transition_duration(): number;
  get_transition_running(): boolean;
  get_transition_type(): StackTransitionType;
  get_vhomogeneous(): boolean;
  get_visible_child(): Widget | null;
  get_visible_child_name(): string | null;
  remove(child: Widget): void;
  set_hhomogeneous(hhomogeneous: boolean): void;
  set_interpolate_size(interpolate_size: boolean): void;
  set_transition_duration(duration: number): void;
  set_transition_type(transition: StackTransitionType): void;
  set_vhomogeneous(vhomogeneous: boolean): void;
  set_visible_child(child: Widget): void;
  set_visible_child_full(name: string, transition: StackTransitionType): void;
  set_visible_child_name(name: string): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module StackPage {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    icon_name: string;
    name: string;
    needs_attention: boolean;
    title: string;
    use_underline: boolean;
    visible: boolean;
  }
}
export class StackPage extends GObject.Object implements Accessible {
  static $gtype: GObject.GType<StackPage>;

  constructor(
    properties?: Partial<StackPage.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StackPage.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  get icon_name(): string;
  set icon_name(val: string);
  get name(): string;
  set name(val: string);
  get needs_attention(): boolean;
  set needs_attention(val: boolean);
  get title(): string;
  set title(val: string);
  get use_underline(): boolean;
  set use_underline(val: boolean);
  get visible(): boolean;
  set visible(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Members

  get_child(): Widget;
  get_icon_name(): string | null;
  get_name(): string | null;
  get_needs_attention(): boolean;
  get_title(): string | null;
  get_use_underline(): boolean;
  get_visible(): boolean;
  set_icon_name(setting: string): void;
  set_name(setting: string): void;
  set_needs_attention(setting: boolean): void;
  set_title(setting: string): void;
  set_use_underline(setting: boolean): void;
  set_visible(visible: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
}
export module StackSidebar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    stack: Stack;
  }
}
export class StackSidebar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<StackSidebar>;

  constructor(
    properties?: Partial<StackSidebar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StackSidebar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get stack(): Stack;
  set stack(val: Stack);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): StackSidebar;

  // Members

  get_stack(): Stack | null;
  set_stack(stack: Stack): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module StackSwitcher {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    stack: Stack;
  }
}
export class StackSwitcher
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Orientable
{
  static $gtype: GObject.GType<StackSwitcher>;

  constructor(
    properties?: Partial<StackSwitcher.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StackSwitcher.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get stack(): Stack;
  set stack(val: Stack);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): StackSwitcher;

  // Members

  get_stack(): Stack | null;
  set_stack(stack?: Stack | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module Statusbar {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
  }
}
export class Statusbar
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Statusbar>;

  constructor(
    properties?: Partial<Statusbar.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Statusbar.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "text-popped",
    callback: (_source: this, context_id: number, text: string) => void
  ): number;
  connect_after(
    signal: "text-popped",
    callback: (_source: this, context_id: number, text: string) => void
  ): number;
  emit(signal: "text-popped", context_id: number, text: string): void;
  connect(
    signal: "text-pushed",
    callback: (_source: this, context_id: number, text: string) => void
  ): number;
  connect_after(
    signal: "text-pushed",
    callback: (_source: this, context_id: number, text: string) => void
  ): number;
  emit(signal: "text-pushed", context_id: number, text: string): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Statusbar;

  // Members

  get_context_id(context_description: string): number;
  pop(context_id: number): void;
  push(context_id: number, text: string): number;
  remove(context_id: number, message_id: number): void;
  remove_all(context_id: number): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module StringFilter {
  export interface ConstructorProperties extends Filter.ConstructorProperties {
    [key: string]: any;
    expression: Expression;
    ignore_case: boolean;
    match_mode: StringFilterMatchMode;
    search: string;
  }
}
export class StringFilter extends Filter {
  static $gtype: GObject.GType<StringFilter>;

  constructor(
    properties?: Partial<StringFilter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StringFilter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get expression(): Expression;
  set expression(val: Expression);
  get ignore_case(): boolean;
  set ignore_case(val: boolean);
  get match_mode(): StringFilterMatchMode;
  set match_mode(val: StringFilterMatchMode);
  get search(): string;
  set search(val: string);

  // Constructors

  static ["new"](expression?: Expression | null): StringFilter;

  // Members

  get_expression(): Expression | null;
  get_ignore_case(): boolean;
  get_match_mode(): StringFilterMatchMode;
  get_search(): string | null;
  set_expression(expression?: Expression | null): void;
  set_ignore_case(ignore_case: boolean): void;
  set_match_mode(mode: StringFilterMatchMode): void;
  set_search(search?: string | null): void;
}
export module StringList {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    strings: string[];
  }
}
export class StringList<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>, Buildable
{
  static $gtype: GObject.GType<StringList>;

  constructor(
    properties?: Partial<StringList.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StringList.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  set strings(val: string[]);

  // Constructors

  static ["new"](strings?: string[] | null): StringList;

  // Members

  append(string: string): void;
  get_string(position: number): string | null;
  remove(position: number): void;
  splice(
    position: number,
    n_removals: number,
    additions?: string[] | null
  ): void;
  take(string: string): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module StringObject {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    string: string;
  }
}
export class StringObject extends GObject.Object {
  static $gtype: GObject.GType<StringObject>;

  constructor(
    properties?: Partial<StringObject.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StringObject.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get string(): string;

  // Constructors

  static ["new"](string: string): StringObject;

  // Members

  get_string(): string;
}
export module StringSorter {
  export interface ConstructorProperties extends Sorter.ConstructorProperties {
    [key: string]: any;
    collation: Collation;
    expression: Expression;
    ignore_case: boolean;
  }
}
export class StringSorter extends Sorter {
  static $gtype: GObject.GType<StringSorter>;

  constructor(
    properties?: Partial<StringSorter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StringSorter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get collation(): Collation;
  set collation(val: Collation);
  get expression(): Expression;
  set expression(val: Expression);
  get ignore_case(): boolean;
  set ignore_case(val: boolean);

  // Constructors

  static ["new"](expression?: Expression | null): StringSorter;

  // Members

  get_collation(): Collation;
  get_expression(): Expression | null;
  get_ignore_case(): boolean;
  set_collation(collation: Collation): void;
  set_expression(expression?: Expression | null): void;
  set_ignore_case(ignore_case: boolean): void;
}
export module StyleContext {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    display: Gdk.Display;
  }
}
export class StyleContext extends GObject.Object {
  static $gtype: GObject.GType<StyleContext>;

  constructor(
    properties?: Partial<StyleContext.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<StyleContext.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get display(): Gdk.Display;
  set display(val: Gdk.Display);

  // Fields
  parent_object: GObject.Object;

  // Members

  add_class(class_name: string): void;
  add_provider(provider: StyleProvider, priority: number): void;
  get_border(): Border;
  get_color(): Gdk.RGBA;
  get_display(): Gdk.Display;
  get_margin(): Border;
  get_padding(): Border;
  get_scale(): number;
  get_state(): StateFlags;
  has_class(class_name: string): boolean;
  lookup_color(color_name: string): [boolean, Gdk.RGBA];
  remove_class(class_name: string): void;
  remove_provider(provider: StyleProvider): void;
  restore(): void;
  save(): void;
  set_display(display: Gdk.Display): void;
  set_scale(scale: number): void;
  set_state(flags: StateFlags): void;
  to_string(flags: StyleContextPrintFlags): string;
  vfunc_changed(): void;
  static add_provider_for_display(
    display: Gdk.Display,
    provider: StyleProvider,
    priority: number
  ): void;
  static remove_provider_for_display(
    display: Gdk.Display,
    provider: StyleProvider
  ): void;
}
export module Switch {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    active: boolean;
    state: boolean;
  }
}
export class Switch
  extends Widget
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Switch>;

  constructor(
    properties?: Partial<Switch.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Switch.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): boolean;
  set active(val: boolean);
  get state(): boolean;
  set state(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(
    signal: "state-set",
    callback: (_source: this, state: boolean) => boolean
  ): number;
  connect_after(
    signal: "state-set",
    callback: (_source: this, state: boolean) => boolean
  ): number;
  emit(signal: "state-set", state: boolean): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](): Switch;

  // Members

  get_active(): boolean;
  get_state(): boolean;
  set_active(is_active: boolean): void;
  set_state(state: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Text {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activates_default: boolean;
    attributes: Pango.AttrList;
    buffer: EntryBuffer;
    enable_emoji_completion: boolean;
    extra_menu: Gio.MenuModel;
    im_module: string;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    invisible_char: number;
    invisible_char_set: boolean;
    max_length: number;
    overwrite_mode: boolean;
    placeholder_text: string;
    propagate_text_width: boolean;
    scroll_offset: number;
    tabs: Pango.TabArray;
    truncate_multiline: boolean;
    visibility: boolean;
  }
}
export class Text
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Editable
{
  static $gtype: GObject.GType<Text>;

  constructor(properties?: Partial<Text.ConstructorProperties>, ...args: any[]);
  _init(properties?: Partial<Text.ConstructorProperties>, ...args: any[]): void;

  // Properties
  get activates_default(): boolean;
  set activates_default(val: boolean);
  get attributes(): Pango.AttrList;
  set attributes(val: Pango.AttrList);
  get buffer(): EntryBuffer;
  set buffer(val: EntryBuffer);
  get enable_emoji_completion(): boolean;
  set enable_emoji_completion(val: boolean);
  get extra_menu(): Gio.MenuModel;
  set extra_menu(val: Gio.MenuModel);
  get im_module(): string;
  set im_module(val: string);
  get input_hints(): InputHints;
  set input_hints(val: InputHints);
  get input_purpose(): InputPurpose;
  set input_purpose(val: InputPurpose);
  get invisible_char(): number;
  set invisible_char(val: number);
  get invisible_char_set(): boolean;
  set invisible_char_set(val: boolean);
  get max_length(): number;
  set max_length(val: number);
  get overwrite_mode(): boolean;
  set overwrite_mode(val: boolean);
  get placeholder_text(): string;
  set placeholder_text(val: string);
  get propagate_text_width(): boolean;
  set propagate_text_width(val: boolean);
  get scroll_offset(): number;
  get tabs(): Pango.TabArray;
  set tabs(val: Pango.TabArray);
  get truncate_multiline(): boolean;
  set truncate_multiline(val: boolean);
  get visibility(): boolean;
  set visibility(val: boolean);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "activate", callback: (_source: this) => void): number;
  connect_after(signal: "activate", callback: (_source: this) => void): number;
  emit(signal: "activate"): void;
  connect(signal: "backspace", callback: (_source: this) => void): number;
  connect_after(signal: "backspace", callback: (_source: this) => void): number;
  emit(signal: "backspace"): void;
  connect(signal: "copy-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "copy-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "copy-clipboard"): void;
  connect(signal: "cut-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "cut-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "cut-clipboard"): void;
  connect(
    signal: "delete-from-cursor",
    callback: (_source: this, type: DeleteType, count: number) => void
  ): number;
  connect_after(
    signal: "delete-from-cursor",
    callback: (_source: this, type: DeleteType, count: number) => void
  ): number;
  emit(signal: "delete-from-cursor", type: DeleteType, count: number): void;
  connect(
    signal: "insert-at-cursor",
    callback: (_source: this, string: string) => void
  ): number;
  connect_after(
    signal: "insert-at-cursor",
    callback: (_source: this, string: string) => void
  ): number;
  emit(signal: "insert-at-cursor", string: string): void;
  connect(signal: "insert-emoji", callback: (_source: this) => void): number;
  connect_after(
    signal: "insert-emoji",
    callback: (_source: this) => void
  ): number;
  emit(signal: "insert-emoji"): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend: boolean
    ) => void
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend: boolean
    ) => void
  ): number;
  emit(
    signal: "move-cursor",
    step: MovementStep,
    count: number,
    extend: boolean
  ): void;
  connect(signal: "paste-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "paste-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "paste-clipboard"): void;
  connect(
    signal: "preedit-changed",
    callback: (_source: this, preedit: string) => void
  ): number;
  connect_after(
    signal: "preedit-changed",
    callback: (_source: this, preedit: string) => void
  ): number;
  emit(signal: "preedit-changed", preedit: string): void;
  connect(
    signal: "toggle-overwrite",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "toggle-overwrite",
    callback: (_source: this) => void
  ): number;
  emit(signal: "toggle-overwrite"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get cursor_position(): number;
  get editable(): boolean;
  set editable(val: boolean);
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get max_width_chars(): number;
  set max_width_chars(val: number);
  get selection_bound(): number;
  get text(): string;
  set text(val: string);
  get width_chars(): number;
  set width_chars(val: number);
  get xalign(): number;
  set xalign(val: number);

  // Constructors

  static ["new"](): Text;
  static new_with_buffer(buffer: EntryBuffer): Text;

  // Members

  compute_cursor_extents(
    position: number
  ): [Graphene.Rect | null, Graphene.Rect | null];
  get_activates_default(): boolean;
  get_attributes(): Pango.AttrList | null;
  get_buffer(): EntryBuffer;
  get_enable_emoji_completion(): boolean;
  get_extra_menu(): Gio.MenuModel | null;
  get_input_hints(): InputHints;
  get_input_purpose(): InputPurpose;
  get_invisible_char(): number;
  get_max_length(): number;
  get_overwrite_mode(): boolean;
  get_placeholder_text(): string | null;
  get_propagate_text_width(): boolean;
  get_tabs(): Pango.TabArray | null;
  get_text_length(): number;
  get_truncate_multiline(): boolean;
  get_visibility(): boolean;
  grab_focus_without_selecting(): boolean;
  set_activates_default(activates: boolean): void;
  set_attributes(attrs?: Pango.AttrList | null): void;
  set_buffer(buffer: EntryBuffer): void;
  set_enable_emoji_completion(enable_emoji_completion: boolean): void;
  set_extra_menu(model?: Gio.MenuModel | null): void;
  set_input_hints(hints: InputHints): void;
  set_input_purpose(purpose: InputPurpose): void;
  set_invisible_char(ch: number): void;
  set_max_length(length: number): void;
  set_overwrite_mode(overwrite: boolean): void;
  set_placeholder_text(text?: string | null): void;
  set_propagate_text_width(propagate_text_width: boolean): void;
  set_tabs(tabs?: Pango.TabArray | null): void;
  set_truncate_multiline(truncate_multiline: boolean): void;
  set_visibility(visible: boolean): void;
  unset_invisible_char(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_alignment(): number;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_alignment(xalign: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module TextBuffer {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    can_redo: boolean;
    can_undo: boolean;
    cursor_position: number;
    enable_undo: boolean;
    has_selection: boolean;
    tag_table: TextTagTable;
    text: string;
  }
}
export class TextBuffer extends GObject.Object {
  static $gtype: GObject.GType<TextBuffer>;

  constructor(
    properties?: Partial<TextBuffer.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TextBuffer.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get can_redo(): boolean;
  get can_undo(): boolean;
  get cursor_position(): number;
  get enable_undo(): boolean;
  set enable_undo(val: boolean);
  get has_selection(): boolean;
  get tag_table(): TextTagTable;
  get text(): string;
  set text(val: string);

  // Fields
  priv: TextBufferPrivate;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "apply-tag",
    callback: (
      _source: this,
      tag: TextTag,
      start: TextIter,
      end: TextIter
    ) => void
  ): number;
  connect_after(
    signal: "apply-tag",
    callback: (
      _source: this,
      tag: TextTag,
      start: TextIter,
      end: TextIter
    ) => void
  ): number;
  emit(signal: "apply-tag", tag: TextTag, start: TextIter, end: TextIter): void;
  connect(
    signal: "begin-user-action",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "begin-user-action",
    callback: (_source: this) => void
  ): number;
  emit(signal: "begin-user-action"): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;
  connect(
    signal: "delete-range",
    callback: (_source: this, start: TextIter, end: TextIter) => void
  ): number;
  connect_after(
    signal: "delete-range",
    callback: (_source: this, start: TextIter, end: TextIter) => void
  ): number;
  emit(signal: "delete-range", start: TextIter, end: TextIter): void;
  connect(signal: "end-user-action", callback: (_source: this) => void): number;
  connect_after(
    signal: "end-user-action",
    callback: (_source: this) => void
  ): number;
  emit(signal: "end-user-action"): void;
  connect(
    signal: "insert-child-anchor",
    callback: (
      _source: this,
      location: TextIter,
      anchor: TextChildAnchor
    ) => void
  ): number;
  connect_after(
    signal: "insert-child-anchor",
    callback: (
      _source: this,
      location: TextIter,
      anchor: TextChildAnchor
    ) => void
  ): number;
  emit(
    signal: "insert-child-anchor",
    location: TextIter,
    anchor: TextChildAnchor
  ): void;
  connect(
    signal: "insert-paintable",
    callback: (
      _source: this,
      location: TextIter,
      paintable: Gdk.Paintable
    ) => void
  ): number;
  connect_after(
    signal: "insert-paintable",
    callback: (
      _source: this,
      location: TextIter,
      paintable: Gdk.Paintable
    ) => void
  ): number;
  emit(
    signal: "insert-paintable",
    location: TextIter,
    paintable: Gdk.Paintable
  ): void;
  connect(
    signal: "insert-text",
    callback: (
      _source: this,
      location: TextIter,
      text: string,
      len: number
    ) => void
  ): number;
  connect_after(
    signal: "insert-text",
    callback: (
      _source: this,
      location: TextIter,
      text: string,
      len: number
    ) => void
  ): number;
  emit(
    signal: "insert-text",
    location: TextIter,
    text: string,
    len: number
  ): void;
  connect(
    signal: "mark-deleted",
    callback: (_source: this, mark: TextMark) => void
  ): number;
  connect_after(
    signal: "mark-deleted",
    callback: (_source: this, mark: TextMark) => void
  ): number;
  emit(signal: "mark-deleted", mark: TextMark): void;
  connect(
    signal: "mark-set",
    callback: (_source: this, location: TextIter, mark: TextMark) => void
  ): number;
  connect_after(
    signal: "mark-set",
    callback: (_source: this, location: TextIter, mark: TextMark) => void
  ): number;
  emit(signal: "mark-set", location: TextIter, mark: TextMark): void;
  connect(
    signal: "modified-changed",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "modified-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "modified-changed"): void;
  connect(
    signal: "paste-done",
    callback: (_source: this, clipboard: Gdk.Clipboard) => void
  ): number;
  connect_after(
    signal: "paste-done",
    callback: (_source: this, clipboard: Gdk.Clipboard) => void
  ): number;
  emit(signal: "paste-done", clipboard: Gdk.Clipboard): void;
  connect(signal: "redo", callback: (_source: this) => void): number;
  connect_after(signal: "redo", callback: (_source: this) => void): number;
  emit(signal: "redo"): void;
  connect(
    signal: "remove-tag",
    callback: (
      _source: this,
      tag: TextTag,
      start: TextIter,
      end: TextIter
    ) => void
  ): number;
  connect_after(
    signal: "remove-tag",
    callback: (
      _source: this,
      tag: TextTag,
      start: TextIter,
      end: TextIter
    ) => void
  ): number;
  emit(
    signal: "remove-tag",
    tag: TextTag,
    start: TextIter,
    end: TextIter
  ): void;
  connect(signal: "undo", callback: (_source: this) => void): number;
  connect_after(signal: "undo", callback: (_source: this) => void): number;
  emit(signal: "undo"): void;

  // Constructors

  static ["new"](table?: TextTagTable | null): TextBuffer;

  // Members

  add_mark(mark: TextMark, where: TextIter): void;
  add_selection_clipboard(clipboard: Gdk.Clipboard): void;
  apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
  apply_tag_by_name(name: string, start: TextIter, end: TextIter): void;
  backspace(
    iter: TextIter,
    interactive: boolean,
    default_editable: boolean
  ): boolean;
  begin_irreversible_action(): void;
  begin_user_action(): void;
  copy_clipboard(clipboard: Gdk.Clipboard): void;
  create_child_anchor(iter: TextIter): TextChildAnchor;
  create_mark(
    mark_name: string | null,
    where: TextIter,
    left_gravity: boolean
  ): TextMark;
  cut_clipboard(clipboard: Gdk.Clipboard, default_editable: boolean): void;
  ["delete"](start: TextIter, end: TextIter): void;
  delete_interactive(
    start_iter: TextIter,
    end_iter: TextIter,
    default_editable: boolean
  ): boolean;
  delete_mark(mark: TextMark): void;
  delete_mark_by_name(name: string): void;
  delete_selection(interactive: boolean, default_editable: boolean): boolean;
  end_irreversible_action(): void;
  end_user_action(): void;
  get_bounds(): [TextIter, TextIter];
  get_can_redo(): boolean;
  get_can_undo(): boolean;
  get_char_count(): number;
  get_enable_undo(): boolean;
  get_end_iter(): TextIter;
  get_has_selection(): boolean;
  get_insert(): TextMark;
  get_iter_at_child_anchor(anchor: TextChildAnchor): TextIter;
  get_iter_at_line(line_number: number): [boolean, TextIter];
  get_iter_at_line_index(
    line_number: number,
    byte_index: number
  ): [boolean, TextIter];
  get_iter_at_line_offset(
    line_number: number,
    char_offset: number
  ): [boolean, TextIter];
  get_iter_at_mark(mark: TextMark): TextIter;
  get_iter_at_offset(char_offset: number): TextIter;
  get_line_count(): number;
  get_mark(name: string): TextMark | null;
  get_max_undo_levels(): number;
  get_modified(): boolean;
  get_selection_bound(): TextMark;
  get_selection_bounds(): [boolean, TextIter, TextIter];
  get_selection_content(): Gdk.ContentProvider;
  get_slice(
    start: TextIter,
    end: TextIter,
    include_hidden_chars: boolean
  ): string;
  get_start_iter(): TextIter;
  get_tag_table(): TextTagTable;
  get_text(
    start: TextIter,
    end: TextIter,
    include_hidden_chars: boolean
  ): string;
  insert(iter: TextIter, text: string, len: number): void;
  insert_at_cursor(text: string, len: number): void;
  insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
  insert_interactive(
    iter: TextIter,
    text: string,
    len: number,
    default_editable: boolean
  ): boolean;
  insert_interactive_at_cursor(
    text: string,
    len: number,
    default_editable: boolean
  ): boolean;
  insert_markup(iter: TextIter, markup: string, len: number): void;
  insert_paintable(iter: TextIter, paintable: Gdk.Paintable): void;
  insert_range(iter: TextIter, start: TextIter, end: TextIter): void;
  insert_range_interactive(
    iter: TextIter,
    start: TextIter,
    end: TextIter,
    default_editable: boolean
  ): boolean;
  move_mark(mark: TextMark, where: TextIter): void;
  move_mark_by_name(name: string, where: TextIter): void;
  paste_clipboard(
    clipboard: Gdk.Clipboard,
    override_location: TextIter | null,
    default_editable: boolean
  ): void;
  place_cursor(where: TextIter): void;
  redo(): void;
  remove_all_tags(start: TextIter, end: TextIter): void;
  remove_selection_clipboard(clipboard: Gdk.Clipboard): void;
  remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
  remove_tag_by_name(name: string, start: TextIter, end: TextIter): void;
  select_range(ins: TextIter, bound: TextIter): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_undo_levels(max_undo_levels: number): void;
  set_modified(setting: boolean): void;
  set_text(text: string, len: number): void;
  undo(): void;
  vfunc_apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
  vfunc_begin_user_action(): void;
  vfunc_changed(): void;
  vfunc_delete_range(start: TextIter, end: TextIter): void;
  vfunc_end_user_action(): void;
  vfunc_insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
  vfunc_insert_paintable(iter: TextIter, paintable: Gdk.Paintable): void;
  vfunc_insert_text(
    pos: TextIter,
    new_text: string,
    new_text_length: number
  ): void;
  vfunc_mark_deleted(mark: TextMark): void;
  vfunc_mark_set(location: TextIter, mark: TextMark): void;
  vfunc_modified_changed(): void;
  vfunc_paste_done(clipboard: Gdk.Clipboard): void;
  vfunc_redo(): void;
  vfunc_remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
  vfunc_undo(): void;
}
export module TextChildAnchor {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class TextChildAnchor extends GObject.Object {
  static $gtype: GObject.GType<TextChildAnchor>;

  constructor(
    properties?: Partial<TextChildAnchor.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TextChildAnchor.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Constructors

  static ["new"](): TextChildAnchor;
  static new_with_replacement(character: string): TextChildAnchor;

  // Members

  get_deleted(): boolean;
  get_widgets(): Widget[];
}
export module TextMark {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    left_gravity: boolean;
    name: string;
  }
}
export class TextMark extends GObject.Object {
  static $gtype: GObject.GType<TextMark>;

  constructor(
    properties?: Partial<TextMark.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TextMark.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get left_gravity(): boolean;
  get name(): string;

  // Constructors

  static ["new"](name: string | null, left_gravity: boolean): TextMark;

  // Members

  get_buffer(): TextBuffer | null;
  get_deleted(): boolean;
  get_left_gravity(): boolean;
  get_name(): string | null;
  get_visible(): boolean;
  set_visible(setting: boolean): void;
}
export module TextTag {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    accumulative_margin: boolean;
    allow_breaks: boolean;
    allow_breaks_set: boolean;
    background: string;
    background_full_height: boolean;
    background_full_height_set: boolean;
    background_rgba: Gdk.RGBA;
    background_set: boolean;
    direction: TextDirection;
    editable: boolean;
    editable_set: boolean;
    fallback: boolean;
    fallback_set: boolean;
    family: string;
    family_set: boolean;
    font: string;
    font_desc: Pango.FontDescription;
    font_features: string;
    font_features_set: boolean;
    foreground: string;
    foreground_rgba: Gdk.RGBA;
    foreground_set: boolean;
    indent: number;
    indent_set: boolean;
    insert_hyphens: boolean;
    insert_hyphens_set: boolean;
    invisible: boolean;
    invisible_set: boolean;
    justification: Justification;
    justification_set: boolean;
    language: string;
    language_set: boolean;
    left_margin: number;
    left_margin_set: boolean;
    letter_spacing: number;
    letter_spacing_set: boolean;
    line_height: number;
    line_height_set: boolean;
    name: string;
    overline: Pango.Overline;
    overline_rgba: Gdk.RGBA;
    overline_rgba_set: boolean;
    overline_set: boolean;
    paragraph_background: string;
    paragraph_background_rgba: Gdk.RGBA;
    paragraph_background_set: boolean;
    pixels_above_lines: number;
    pixels_above_lines_set: boolean;
    pixels_below_lines: number;
    pixels_below_lines_set: boolean;
    pixels_inside_wrap: number;
    pixels_inside_wrap_set: boolean;
    right_margin: number;
    right_margin_set: boolean;
    rise: number;
    rise_set: boolean;
    scale: number;
    scale_set: boolean;
    sentence: boolean;
    sentence_set: boolean;
    show_spaces: Pango.ShowFlags;
    show_spaces_set: boolean;
    size: number;
    size_points: number;
    size_set: boolean;
    stretch: Pango.Stretch;
    stretch_set: boolean;
    strikethrough: boolean;
    strikethrough_rgba: Gdk.RGBA;
    strikethrough_rgba_set: boolean;
    strikethrough_set: boolean;
    style: Pango.Style;
    style_set: boolean;
    tabs: Pango.TabArray;
    tabs_set: boolean;
    text_transform: Pango.TextTransform;
    text_transform_set: boolean;
    underline: Pango.Underline;
    underline_rgba: Gdk.RGBA;
    underline_rgba_set: boolean;
    underline_set: boolean;
    variant: Pango.Variant;
    variant_set: boolean;
    weight: number;
    weight_set: boolean;
    word: boolean;
    word_set: boolean;
    wrap_mode: WrapMode;
    wrap_mode_set: boolean;
  }
}
export class TextTag extends GObject.Object {
  static $gtype: GObject.GType<TextTag>;

  constructor(
    properties?: Partial<TextTag.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TextTag.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accumulative_margin(): boolean;
  set accumulative_margin(val: boolean);
  get allow_breaks(): boolean;
  set allow_breaks(val: boolean);
  get allow_breaks_set(): boolean;
  set allow_breaks_set(val: boolean);
  set background(val: string);
  get background_full_height(): boolean;
  set background_full_height(val: boolean);
  get background_full_height_set(): boolean;
  set background_full_height_set(val: boolean);
  get background_rgba(): Gdk.RGBA;
  set background_rgba(val: Gdk.RGBA);
  get background_set(): boolean;
  set background_set(val: boolean);
  get direction(): TextDirection;
  set direction(val: TextDirection);
  get editable(): boolean;
  set editable(val: boolean);
  get editable_set(): boolean;
  set editable_set(val: boolean);
  get fallback(): boolean;
  set fallback(val: boolean);
  get fallback_set(): boolean;
  set fallback_set(val: boolean);
  get family(): string;
  set family(val: string);
  get family_set(): boolean;
  set family_set(val: boolean);
  get font(): string;
  set font(val: string);
  get font_desc(): Pango.FontDescription;
  set font_desc(val: Pango.FontDescription);
  get font_features(): string;
  set font_features(val: string);
  get font_features_set(): boolean;
  set font_features_set(val: boolean);
  set foreground(val: string);
  get foreground_rgba(): Gdk.RGBA;
  set foreground_rgba(val: Gdk.RGBA);
  get foreground_set(): boolean;
  set foreground_set(val: boolean);
  get indent(): number;
  set indent(val: number);
  get indent_set(): boolean;
  set indent_set(val: boolean);
  get insert_hyphens(): boolean;
  set insert_hyphens(val: boolean);
  get insert_hyphens_set(): boolean;
  set insert_hyphens_set(val: boolean);
  get invisible(): boolean;
  set invisible(val: boolean);
  get invisible_set(): boolean;
  set invisible_set(val: boolean);
  get justification(): Justification;
  set justification(val: Justification);
  get justification_set(): boolean;
  set justification_set(val: boolean);
  get language(): string;
  set language(val: string);
  get language_set(): boolean;
  set language_set(val: boolean);
  get left_margin(): number;
  set left_margin(val: number);
  get left_margin_set(): boolean;
  set left_margin_set(val: boolean);
  get letter_spacing(): number;
  set letter_spacing(val: number);
  get letter_spacing_set(): boolean;
  set letter_spacing_set(val: boolean);
  get line_height(): number;
  set line_height(val: number);
  get line_height_set(): boolean;
  set line_height_set(val: boolean);
  get name(): string;
  get overline(): Pango.Overline;
  set overline(val: Pango.Overline);
  get overline_rgba(): Gdk.RGBA;
  set overline_rgba(val: Gdk.RGBA);
  get overline_rgba_set(): boolean;
  set overline_rgba_set(val: boolean);
  get overline_set(): boolean;
  set overline_set(val: boolean);
  set paragraph_background(val: string);
  get paragraph_background_rgba(): Gdk.RGBA;
  set paragraph_background_rgba(val: Gdk.RGBA);
  get paragraph_background_set(): boolean;
  set paragraph_background_set(val: boolean);
  get pixels_above_lines(): number;
  set pixels_above_lines(val: number);
  get pixels_above_lines_set(): boolean;
  set pixels_above_lines_set(val: boolean);
  get pixels_below_lines(): number;
  set pixels_below_lines(val: number);
  get pixels_below_lines_set(): boolean;
  set pixels_below_lines_set(val: boolean);
  get pixels_inside_wrap(): number;
  set pixels_inside_wrap(val: number);
  get pixels_inside_wrap_set(): boolean;
  set pixels_inside_wrap_set(val: boolean);
  get right_margin(): number;
  set right_margin(val: number);
  get right_margin_set(): boolean;
  set right_margin_set(val: boolean);
  get rise(): number;
  set rise(val: number);
  get rise_set(): boolean;
  set rise_set(val: boolean);
  get scale(): number;
  set scale(val: number);
  get scale_set(): boolean;
  set scale_set(val: boolean);
  get sentence(): boolean;
  set sentence(val: boolean);
  get sentence_set(): boolean;
  set sentence_set(val: boolean);
  get show_spaces(): Pango.ShowFlags;
  set show_spaces(val: Pango.ShowFlags);
  get show_spaces_set(): boolean;
  set show_spaces_set(val: boolean);
  get size(): number;
  set size(val: number);
  get size_points(): number;
  set size_points(val: number);
  get size_set(): boolean;
  set size_set(val: boolean);
  get stretch(): Pango.Stretch;
  set stretch(val: Pango.Stretch);
  get stretch_set(): boolean;
  set stretch_set(val: boolean);
  get strikethrough(): boolean;
  set strikethrough(val: boolean);
  get strikethrough_rgba(): Gdk.RGBA;
  set strikethrough_rgba(val: Gdk.RGBA);
  get strikethrough_rgba_set(): boolean;
  set strikethrough_rgba_set(val: boolean);
  get strikethrough_set(): boolean;
  set strikethrough_set(val: boolean);
  get style(): Pango.Style;
  set style(val: Pango.Style);
  get style_set(): boolean;
  set style_set(val: boolean);
  get tabs(): Pango.TabArray;
  set tabs(val: Pango.TabArray);
  get tabs_set(): boolean;
  set tabs_set(val: boolean);
  get text_transform(): Pango.TextTransform;
  set text_transform(val: Pango.TextTransform);
  get text_transform_set(): boolean;
  set text_transform_set(val: boolean);
  get underline(): Pango.Underline;
  set underline(val: Pango.Underline);
  get underline_rgba(): Gdk.RGBA;
  set underline_rgba(val: Gdk.RGBA);
  get underline_rgba_set(): boolean;
  set underline_rgba_set(val: boolean);
  get underline_set(): boolean;
  set underline_set(val: boolean);
  get variant(): Pango.Variant;
  set variant(val: Pango.Variant);
  get variant_set(): boolean;
  set variant_set(val: boolean);
  get weight(): number;
  set weight(val: number);
  get weight_set(): boolean;
  set weight_set(val: boolean);
  get word(): boolean;
  set word(val: boolean);
  get word_set(): boolean;
  set word_set(val: boolean);
  get wrap_mode(): WrapMode;
  set wrap_mode(val: WrapMode);
  get wrap_mode_set(): boolean;
  set wrap_mode_set(val: boolean);

  // Fields
  priv: TextTagPrivate;

  // Constructors

  static ["new"](name?: string | null): TextTag;

  // Members

  changed(size_changed: boolean): void;
  get_priority(): number;
  set_priority(priority: number): void;
}
export module TextTagTable {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class TextTagTable extends GObject.Object implements Buildable {
  static $gtype: GObject.GType<TextTagTable>;

  constructor(
    properties?: Partial<TextTagTable.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TextTagTable.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "tag-added",
    callback: (_source: this, tag: TextTag) => void
  ): number;
  connect_after(
    signal: "tag-added",
    callback: (_source: this, tag: TextTag) => void
  ): number;
  emit(signal: "tag-added", tag: TextTag): void;
  connect(
    signal: "tag-changed",
    callback: (_source: this, tag: TextTag, size_changed: boolean) => void
  ): number;
  connect_after(
    signal: "tag-changed",
    callback: (_source: this, tag: TextTag, size_changed: boolean) => void
  ): number;
  emit(signal: "tag-changed", tag: TextTag, size_changed: boolean): void;
  connect(
    signal: "tag-removed",
    callback: (_source: this, tag: TextTag) => void
  ): number;
  connect_after(
    signal: "tag-removed",
    callback: (_source: this, tag: TextTag) => void
  ): number;
  emit(signal: "tag-removed", tag: TextTag): void;

  // Constructors

  static ["new"](): TextTagTable;

  // Members

  add(tag: TextTag): boolean;
  foreach(func: TextTagTableForeach): void;
  get_size(): number;
  lookup(name: string): TextTag | null;
  remove(tag: TextTag): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module TextView {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    accepts_tab: boolean;
    bottom_margin: number;
    buffer: TextBuffer;
    cursor_visible: boolean;
    editable: boolean;
    extra_menu: Gio.MenuModel;
    im_module: string;
    indent: number;
    input_hints: InputHints;
    input_purpose: InputPurpose;
    justification: Justification;
    left_margin: number;
    monospace: boolean;
    overwrite: boolean;
    pixels_above_lines: number;
    pixels_below_lines: number;
    pixels_inside_wrap: number;
    right_margin: number;
    tabs: Pango.TabArray;
    top_margin: number;
    wrap_mode: WrapMode;
  }
}
export class TextView
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Scrollable
{
  static $gtype: GObject.GType<TextView>;

  constructor(
    properties?: Partial<TextView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TextView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get accepts_tab(): boolean;
  set accepts_tab(val: boolean);
  get bottom_margin(): number;
  set bottom_margin(val: number);
  get buffer(): TextBuffer;
  set buffer(val: TextBuffer);
  get cursor_visible(): boolean;
  set cursor_visible(val: boolean);
  get editable(): boolean;
  set editable(val: boolean);
  get extra_menu(): Gio.MenuModel;
  set extra_menu(val: Gio.MenuModel);
  get im_module(): string;
  set im_module(val: string);
  get indent(): number;
  set indent(val: number);
  get input_hints(): InputHints;
  set input_hints(val: InputHints);
  get input_purpose(): InputPurpose;
  set input_purpose(val: InputPurpose);
  get justification(): Justification;
  set justification(val: Justification);
  get left_margin(): number;
  set left_margin(val: number);
  get monospace(): boolean;
  set monospace(val: boolean);
  get overwrite(): boolean;
  set overwrite(val: boolean);
  get pixels_above_lines(): number;
  set pixels_above_lines(val: number);
  get pixels_below_lines(): number;
  set pixels_below_lines(val: number);
  get pixels_inside_wrap(): number;
  set pixels_inside_wrap(val: number);
  get right_margin(): number;
  set right_margin(val: number);
  get tabs(): Pango.TabArray;
  set tabs(val: Pango.TabArray);
  get top_margin(): number;
  set top_margin(val: number);
  get wrap_mode(): WrapMode;
  set wrap_mode(val: WrapMode);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "backspace", callback: (_source: this) => void): number;
  connect_after(signal: "backspace", callback: (_source: this) => void): number;
  emit(signal: "backspace"): void;
  connect(signal: "copy-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "copy-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "copy-clipboard"): void;
  connect(signal: "cut-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "cut-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "cut-clipboard"): void;
  connect(
    signal: "delete-from-cursor",
    callback: (_source: this, type: DeleteType, count: number) => void
  ): number;
  connect_after(
    signal: "delete-from-cursor",
    callback: (_source: this, type: DeleteType, count: number) => void
  ): number;
  emit(signal: "delete-from-cursor", type: DeleteType, count: number): void;
  connect(
    signal: "extend-selection",
    callback: (
      _source: this,
      granularity: TextExtendSelection,
      location: TextIter,
      start: TextIter,
      end: TextIter
    ) => boolean
  ): number;
  connect_after(
    signal: "extend-selection",
    callback: (
      _source: this,
      granularity: TextExtendSelection,
      location: TextIter,
      start: TextIter,
      end: TextIter
    ) => boolean
  ): number;
  emit(
    signal: "extend-selection",
    granularity: TextExtendSelection,
    location: TextIter,
    start: TextIter,
    end: TextIter
  ): void;
  connect(
    signal: "insert-at-cursor",
    callback: (_source: this, string: string) => void
  ): number;
  connect_after(
    signal: "insert-at-cursor",
    callback: (_source: this, string: string) => void
  ): number;
  emit(signal: "insert-at-cursor", string: string): void;
  connect(signal: "insert-emoji", callback: (_source: this) => void): number;
  connect_after(
    signal: "insert-emoji",
    callback: (_source: this) => void
  ): number;
  emit(signal: "insert-emoji"): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend_selection: boolean
    ) => void
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      count: number,
      extend_selection: boolean
    ) => void
  ): number;
  emit(
    signal: "move-cursor",
    step: MovementStep,
    count: number,
    extend_selection: boolean
  ): void;
  connect(
    signal: "move-viewport",
    callback: (_source: this, step: ScrollStep, count: number) => void
  ): number;
  connect_after(
    signal: "move-viewport",
    callback: (_source: this, step: ScrollStep, count: number) => void
  ): number;
  emit(signal: "move-viewport", step: ScrollStep, count: number): void;
  connect(signal: "paste-clipboard", callback: (_source: this) => void): number;
  connect_after(
    signal: "paste-clipboard",
    callback: (_source: this) => void
  ): number;
  emit(signal: "paste-clipboard"): void;
  connect(
    signal: "preedit-changed",
    callback: (_source: this, preedit: string) => void
  ): number;
  connect_after(
    signal: "preedit-changed",
    callback: (_source: this, preedit: string) => void
  ): number;
  emit(signal: "preedit-changed", preedit: string): void;
  connect(
    signal: "select-all",
    callback: (_source: this, select: boolean) => void
  ): number;
  connect_after(
    signal: "select-all",
    callback: (_source: this, select: boolean) => void
  ): number;
  emit(signal: "select-all", select: boolean): void;
  connect(signal: "set-anchor", callback: (_source: this) => void): number;
  connect_after(
    signal: "set-anchor",
    callback: (_source: this) => void
  ): number;
  emit(signal: "set-anchor"): void;
  connect(
    signal: "toggle-cursor-visible",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "toggle-cursor-visible",
    callback: (_source: this) => void
  ): number;
  emit(signal: "toggle-cursor-visible"): void;
  connect(
    signal: "toggle-overwrite",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "toggle-overwrite",
    callback: (_source: this) => void
  ): number;
  emit(signal: "toggle-overwrite"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](): TextView;
  static new_with_buffer(buffer: TextBuffer): TextView;

  // Members

  add_child_at_anchor(child: Widget, anchor: TextChildAnchor): void;
  add_overlay(child: Widget, xpos: number, ypos: number): void;
  backward_display_line(iter: TextIter): boolean;
  backward_display_line_start(iter: TextIter): boolean;
  buffer_to_window_coords(
    win: TextWindowType,
    buffer_x: number,
    buffer_y: number
  ): [number, number];
  forward_display_line(iter: TextIter): boolean;
  forward_display_line_end(iter: TextIter): boolean;
  get_accepts_tab(): boolean;
  get_bottom_margin(): number;
  get_buffer(): TextBuffer;
  get_cursor_locations(
    iter?: TextIter | null
  ): [Gdk.Rectangle | null, Gdk.Rectangle | null];
  get_cursor_visible(): boolean;
  get_editable(): boolean;
  get_extra_menu(): Gio.MenuModel;
  get_gutter(win: TextWindowType): Widget | null;
  get_indent(): number;
  get_input_hints(): InputHints;
  get_input_purpose(): InputPurpose;
  get_iter_at_location(x: number, y: number): [boolean, TextIter];
  get_iter_at_position(x: number, y: number): [boolean, TextIter, number];
  get_iter_location(iter: TextIter): Gdk.Rectangle;
  get_justification(): Justification;
  get_left_margin(): number;
  get_line_at_y(y: number): [TextIter, number];
  get_line_yrange(iter: TextIter): [number, number];
  get_ltr_context(): Pango.Context;
  get_monospace(): boolean;
  get_overwrite(): boolean;
  get_pixels_above_lines(): number;
  get_pixels_below_lines(): number;
  get_pixels_inside_wrap(): number;
  get_right_margin(): number;
  get_rtl_context(): Pango.Context;
  get_tabs(): Pango.TabArray | null;
  get_top_margin(): number;
  get_visible_rect(): Gdk.Rectangle;
  get_wrap_mode(): WrapMode;
  im_context_filter_keypress(event: Gdk.Event): boolean;
  move_mark_onscreen(mark: TextMark): boolean;
  move_overlay(child: Widget, xpos: number, ypos: number): void;
  move_visually(iter: TextIter, count: number): boolean;
  place_cursor_onscreen(): boolean;
  remove(child: Widget): void;
  reset_cursor_blink(): void;
  reset_im_context(): void;
  scroll_mark_onscreen(mark: TextMark): void;
  scroll_to_iter(
    iter: TextIter,
    within_margin: number,
    use_align: boolean,
    xalign: number,
    yalign: number
  ): boolean;
  scroll_to_mark(
    mark: TextMark,
    within_margin: number,
    use_align: boolean,
    xalign: number,
    yalign: number
  ): void;
  set_accepts_tab(accepts_tab: boolean): void;
  set_bottom_margin(bottom_margin: number): void;
  set_buffer(buffer?: TextBuffer | null): void;
  set_cursor_visible(setting: boolean): void;
  set_editable(setting: boolean): void;
  set_extra_menu(model?: Gio.MenuModel | null): void;
  set_gutter(win: TextWindowType, widget?: Widget | null): void;
  set_indent(indent: number): void;
  set_input_hints(hints: InputHints): void;
  set_input_purpose(purpose: InputPurpose): void;
  set_justification(justification: Justification): void;
  set_left_margin(left_margin: number): void;
  set_monospace(monospace: boolean): void;
  set_overwrite(overwrite: boolean): void;
  set_pixels_above_lines(pixels_above_lines: number): void;
  set_pixels_below_lines(pixels_below_lines: number): void;
  set_pixels_inside_wrap(pixels_inside_wrap: number): void;
  set_right_margin(right_margin: number): void;
  set_tabs(tabs: Pango.TabArray): void;
  set_top_margin(top_margin: number): void;
  set_wrap_mode(wrap_mode: WrapMode): void;
  starts_display_line(iter: TextIter): boolean;
  window_to_buffer_coords(
    win: TextWindowType,
    window_x: number,
    window_y: number
  ): [number, number];
  vfunc_backspace(): void;
  vfunc_copy_clipboard(): void;
  vfunc_cut_clipboard(): void;
  vfunc_delete_from_cursor(type: DeleteType, count: number): void;
  vfunc_extend_selection(
    granularity: TextExtendSelection,
    location: TextIter,
    start: TextIter,
    end: TextIter
  ): boolean;
  vfunc_insert_at_cursor(str: string): void;
  vfunc_insert_emoji(): void;
  vfunc_move_cursor(
    step: MovementStep,
    count: number,
    extend_selection: boolean
  ): void;
  vfunc_paste_clipboard(): void;
  vfunc_set_anchor(): void;
  vfunc_snapshot_layer(layer: TextViewLayer, snapshot: Snapshot): void;
  vfunc_toggle_overwrite(): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module ToggleButton {
  export interface ConstructorProperties extends Button.ConstructorProperties {
    [key: string]: any;
    active: boolean;
    group: ToggleButton;
  }
}
export class ToggleButton
  extends Button
  implements Accessible, Actionable, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<ToggleButton>;

  constructor(
    properties?: Partial<ToggleButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<ToggleButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get active(): boolean;
  set active(val: boolean);
  set group(val: ToggleButton);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "toggled", callback: (_source: this) => void): number;
  connect_after(signal: "toggled", callback: (_source: this) => void): number;
  emit(signal: "toggled"): void;

  // Implemented Properties

  get action_name(): string;
  set action_name(val: string);
  get action_target(): GLib.Variant;
  set action_target(val: GLib.Variant);

  // Constructors

  static ["new"](): ToggleButton;
  static new_with_label(label: string): ToggleButton;
  static new_with_mnemonic(label: string): ToggleButton;

  // Members

  get_active(): boolean;
  set_active(is_active: boolean): void;
  set_group(group?: ToggleButton | null): void;
  toggled(): void;
  vfunc_toggled(): void;

  // Implemented Members

  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}
export module Tooltip {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class Tooltip extends GObject.Object {
  static $gtype: GObject.GType<Tooltip>;

  constructor(
    properties?: Partial<Tooltip.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Tooltip.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Members

  set_custom(custom_widget?: Widget | null): void;
  set_icon(paintable?: Gdk.Paintable | null): void;
  set_icon_from_gicon(gicon?: Gio.Icon | null): void;
  set_icon_from_icon_name(icon_name?: string | null): void;
  set_markup(markup?: string | null): void;
  set_text(text?: string | null): void;
  set_tip_area(rect: Gdk.Rectangle): void;
}
export module TreeExpander {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    hide_expander: boolean;
    indent_for_depth: boolean;
    indent_for_icon: boolean;
    item: GObject.Object;
    list_row: TreeListRow;
  }
}
export class TreeExpander
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<TreeExpander>;

  constructor(
    properties?: Partial<TreeExpander.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeExpander.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get hide_expander(): boolean;
  set hide_expander(val: boolean);
  get indent_for_depth(): boolean;
  set indent_for_depth(val: boolean);
  get indent_for_icon(): boolean;
  set indent_for_icon(val: boolean);
  get item(): GObject.Object;
  get list_row(): TreeListRow;
  set list_row(val: TreeListRow);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): TreeExpander;

  // Members

  get_child(): Widget | null;
  get_hide_expander(): boolean;
  get_indent_for_depth(): boolean;
  get_indent_for_icon(): boolean;
  get_item<T = GObject.Object>(): T;
  get_list_row(): TreeListRow | null;
  set_child(child?: Widget | null): void;
  set_hide_expander(hide_expander: boolean): void;
  set_indent_for_depth(indent_for_depth: boolean): void;
  set_indent_for_icon(indent_for_icon: boolean): void;
  set_list_row(list_row?: TreeListRow | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module TreeListModel {
  export interface ConstructorProperties<
    A extends GObject.Object = GObject.Object
  > extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    autoexpand: boolean;
    item_type: GObject.GType;
    model: Gio.ListModel;
    n_items: number;
    passthrough: boolean;
  }
}
export class TreeListModel<A extends GObject.Object = GObject.Object>
  extends GObject.Object
  implements Gio.ListModel<A>
{
  static $gtype: GObject.GType<TreeListModel>;

  constructor(
    properties?: Partial<TreeListModel.ConstructorProperties<A>>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeListModel.ConstructorProperties<A>>,
    ...args: any[]
  ): void;

  // Properties
  get autoexpand(): boolean;
  set autoexpand(val: boolean);
  get item_type(): GObject.GType;
  get model(): Gio.ListModel;
  get n_items(): number;
  get passthrough(): boolean;

  // Constructors

  static ["new"](
    root: Gio.ListModel,
    passthrough: boolean,
    autoexpand: boolean,
    create_func: TreeListModelCreateModelFunc
  ): TreeListModel;

  // Members

  get_autoexpand(): boolean;
  get_child_row(position: number): TreeListRow | null;
  get_model(): Gio.ListModel;
  get_passthrough(): boolean;
  get_row(position: number): TreeListRow | null;
  set_autoexpand(autoexpand: boolean): void;

  // Implemented Members

  get_item_type(): GObject.GType;
  get_n_items(): number;
  get_item(position: number): A | null;
  items_changed(position: number, removed: number, added: number): void;
  vfunc_get_item(position: number): A | null;
  vfunc_get_item_type(): GObject.GType;
  vfunc_get_n_items(): number;
}
export module TreeListRow {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    children: Gio.ListModel;
    depth: number;
    expandable: boolean;
    expanded: boolean;
    item: GObject.Object;
  }
}
export class TreeListRow extends GObject.Object {
  static $gtype: GObject.GType<TreeListRow>;

  constructor(
    properties?: Partial<TreeListRow.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeListRow.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get children(): Gio.ListModel;
  get depth(): number;
  get expandable(): boolean;
  get expanded(): boolean;
  set expanded(val: boolean);
  get item(): GObject.Object;

  // Members

  get_child_row(position: number): TreeListRow | null;
  get_children(): Gio.ListModel | null;
  get_depth(): number;
  get_expanded(): boolean;
  get_item<T = GObject.Object>(): T;
  get_parent(): TreeListRow | null;
  get_position(): number;
  is_expandable(): boolean;
  set_expanded(expanded: boolean): void;
}
export module TreeListRowSorter {
  export interface ConstructorProperties extends Sorter.ConstructorProperties {
    [key: string]: any;
    sorter: Sorter;
  }
}
export class TreeListRowSorter extends Sorter {
  static $gtype: GObject.GType<TreeListRowSorter>;

  constructor(
    properties?: Partial<TreeListRowSorter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeListRowSorter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get sorter(): Sorter;
  set sorter(val: Sorter);

  // Constructors

  static ["new"](sorter?: Sorter | null): TreeListRowSorter;

  // Members

  get_sorter(): Sorter | null;
  set_sorter(sorter?: Sorter | null): void;
}
export module TreeModelFilter {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    child_model: TreeModel;
    virtual_root: TreePath;
  }
}
export class TreeModelFilter
  extends GObject.Object
  implements TreeDragSource, TreeModel
{
  static $gtype: GObject.GType<TreeModelFilter>;

  constructor(
    properties?: Partial<TreeModelFilter.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeModelFilter.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child_model(): TreeModel;
  get virtual_root(): TreePath;

  // Members

  clear_cache(): void;
  convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
  convert_child_path_to_path(child_path: TreePath): TreePath | null;
  convert_iter_to_child_iter(filter_iter: TreeIter): TreeIter;
  convert_path_to_child_path(filter_path: TreePath): TreePath | null;
  get_model(): TreeModel;
  refilter(): void;
  set_modify_func(
    types: GObject.GType[],
    func: TreeModelFilterModifyFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_visible_column(column: number): void;
  set_visible_func(
    func: TreeModelFilterVisibleFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_modify(
    child_model: TreeModel,
    iter: TreeIter,
    value: GObject.Value | any,
    column: number
  ): void;
  vfunc_visible(child_model: TreeModel, iter: TreeIter): boolean;

  // Implemented Members

  drag_data_delete(path: TreePath): boolean;
  drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  row_draggable(path: TreePath): boolean;
  vfunc_drag_data_delete(path: TreePath): boolean;
  vfunc_drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  vfunc_row_draggable(path: TreePath): boolean;
  filter_new(root?: TreePath | null): TreeModel;
  foreach(func: TreeModelForeachFunc): void;
  get_column_type(index_: number): GObject.GType;
  get_flags(): TreeModelFlags;
  get_iter(path: TreePath): [boolean, TreeIter];
  get_iter_first(): [boolean, TreeIter];
  get_iter_from_string(path_string: string): [boolean, TreeIter];
  get_n_columns(): number;
  get_path(iter: TreeIter): TreePath;
  get_string_from_iter(iter: TreeIter): string | null;
  get_value(iter: TreeIter, column: number): unknown;
  iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  iter_has_child(iter: TreeIter): boolean;
  iter_n_children(iter?: TreeIter | null): number;
  iter_next(iter: TreeIter): boolean;
  iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  iter_parent(child: TreeIter): [boolean, TreeIter];
  iter_previous(iter: TreeIter): boolean;
  ref_node(iter: TreeIter): void;
  row_changed(path: TreePath, iter: TreeIter): void;
  row_deleted(path: TreePath): void;
  row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  row_inserted(path: TreePath, iter: TreeIter): void;
  rows_reordered(
    path: TreePath,
    iter: TreeIter | null,
    new_order: number[]
  ): void;
  unref_node(iter: TreeIter): void;
  vfunc_get_column_type(index_: number): GObject.GType;
  vfunc_get_flags(): TreeModelFlags;
  vfunc_get_iter(path: TreePath): [boolean, TreeIter];
  vfunc_get_n_columns(): number;
  vfunc_get_path(iter: TreeIter): TreePath;
  vfunc_get_value(iter: TreeIter, column: number): unknown;
  vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  vfunc_iter_has_child(iter: TreeIter): boolean;
  vfunc_iter_n_children(iter?: TreeIter | null): number;
  vfunc_iter_next(iter: TreeIter): boolean;
  vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
  vfunc_iter_previous(iter: TreeIter): boolean;
  vfunc_ref_node(iter: TreeIter): void;
  vfunc_row_changed(path: TreePath, iter: TreeIter): void;
  vfunc_row_deleted(path: TreePath): void;
  vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
  vfunc_unref_node(iter: TreeIter): void;
}
export module TreeModelSort {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    model: TreeModel;
  }
}
export class TreeModelSort
  extends GObject.Object
  implements TreeDragSource, TreeModel, TreeSortable
{
  static $gtype: GObject.GType<TreeModelSort>;

  constructor(
    properties?: Partial<TreeModelSort.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeModelSort.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get model(): TreeModel;

  // Constructors

  static new_with_model(child_model: TreeModel): TreeModelSort;

  // Members

  clear_cache(): void;
  convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
  convert_child_path_to_path(child_path: TreePath): TreePath | null;
  convert_iter_to_child_iter(sorted_iter: TreeIter): TreeIter;
  convert_path_to_child_path(sorted_path: TreePath): TreePath | null;
  get_model(): TreeModel;
  iter_is_valid(iter: TreeIter): boolean;
  reset_default_sort_func(): void;

  // Implemented Members

  drag_data_delete(path: TreePath): boolean;
  drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  row_draggable(path: TreePath): boolean;
  vfunc_drag_data_delete(path: TreePath): boolean;
  vfunc_drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  vfunc_row_draggable(path: TreePath): boolean;
  filter_new(root?: TreePath | null): TreeModel;
  foreach(func: TreeModelForeachFunc): void;
  get_column_type(index_: number): GObject.GType;
  get_flags(): TreeModelFlags;
  get_iter(path: TreePath): [boolean, TreeIter];
  get_iter_first(): [boolean, TreeIter];
  get_iter_from_string(path_string: string): [boolean, TreeIter];
  get_n_columns(): number;
  get_path(iter: TreeIter): TreePath;
  get_string_from_iter(iter: TreeIter): string | null;
  get_value(iter: TreeIter, column: number): unknown;
  iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  iter_has_child(iter: TreeIter): boolean;
  iter_n_children(iter?: TreeIter | null): number;
  iter_next(iter: TreeIter): boolean;
  iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  iter_parent(child: TreeIter): [boolean, TreeIter];
  iter_previous(iter: TreeIter): boolean;
  ref_node(iter: TreeIter): void;
  row_changed(path: TreePath, iter: TreeIter): void;
  row_deleted(path: TreePath): void;
  row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  row_inserted(path: TreePath, iter: TreeIter): void;
  rows_reordered(
    path: TreePath,
    iter: TreeIter | null,
    new_order: number[]
  ): void;
  unref_node(iter: TreeIter): void;
  vfunc_get_column_type(index_: number): GObject.GType;
  vfunc_get_flags(): TreeModelFlags;
  vfunc_get_iter(path: TreePath): [boolean, TreeIter];
  vfunc_get_n_columns(): number;
  vfunc_get_path(iter: TreeIter): TreePath;
  vfunc_get_value(iter: TreeIter, column: number): unknown;
  vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  vfunc_iter_has_child(iter: TreeIter): boolean;
  vfunc_iter_n_children(iter?: TreeIter | null): number;
  vfunc_iter_next(iter: TreeIter): boolean;
  vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
  vfunc_iter_previous(iter: TreeIter): boolean;
  vfunc_ref_node(iter: TreeIter): void;
  vfunc_row_changed(path: TreePath, iter: TreeIter): void;
  vfunc_row_deleted(path: TreePath): void;
  vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
  vfunc_unref_node(iter: TreeIter): void;
  get_sort_column_id(): [boolean, number, SortType];
  has_default_sort_func(): boolean;
  set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_sort_column_id(sort_column_id: number, order: SortType): void;
  set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  sort_column_changed(): void;
  vfunc_get_sort_column_id(): [boolean, number, SortType];
  vfunc_has_default_sort_func(): boolean;
  vfunc_set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
  vfunc_set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_sort_column_changed(): void;
}
export module TreeSelection {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    mode: SelectionMode;
  }
}
export class TreeSelection extends GObject.Object {
  static $gtype: GObject.GType<TreeSelection>;

  constructor(
    properties?: Partial<TreeSelection.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeSelection.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get mode(): SelectionMode;
  set mode(val: SelectionMode);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "changed", callback: (_source: this) => void): number;
  connect_after(signal: "changed", callback: (_source: this) => void): number;
  emit(signal: "changed"): void;

  // Members

  count_selected_rows(): number;
  get_mode(): SelectionMode;
  get_selected(): [boolean, TreeModel | null, TreeIter | null];
  get_selected_rows(): [TreePath[], TreeModel | null];
  get_tree_view(): TreeView;
  iter_is_selected(iter: TreeIter): boolean;
  path_is_selected(path: TreePath): boolean;
  select_all(): void;
  select_iter(iter: TreeIter): void;
  select_path(path: TreePath): void;
  select_range(start_path: TreePath, end_path: TreePath): void;
  selected_foreach(func: TreeSelectionForeachFunc): void;
  set_mode(type: SelectionMode): void;
  set_select_function(func?: TreeSelectionFunc | null): void;
  unselect_all(): void;
  unselect_iter(iter: TreeIter): void;
  unselect_path(path: TreePath): void;
  unselect_range(start_path: TreePath, end_path: TreePath): void;
}
export module TreeStore {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class TreeStore
  extends GObject.Object
  implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable
{
  static $gtype: GObject.GType<TreeStore>;

  constructor(
    properties?: Partial<TreeStore.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeStore.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Fields
  priv: TreeStorePrivate;

  // Constructors

  static ["new"](types: GObject.GType[]): TreeStore;

  // Members

  append(parent?: TreeIter | null): TreeIter;
  clear(): void;
  insert(parent: TreeIter | null, position: number): TreeIter;
  insert_after(parent?: TreeIter | null, sibling?: TreeIter | null): TreeIter;
  insert_before(parent?: TreeIter | null, sibling?: TreeIter | null): TreeIter;
  insert_with_values(
    parent: TreeIter | null,
    position: number,
    columns: number[],
    values: GObject.Value[]
  ): TreeIter | null;
  is_ancestor(iter: TreeIter, descendant: TreeIter): boolean;
  iter_depth(iter: TreeIter): number;
  iter_is_valid(iter: TreeIter): boolean;
  move_after(iter: TreeIter, position?: TreeIter | null): void;
  move_before(iter: TreeIter, position?: TreeIter | null): void;
  prepend(parent?: TreeIter | null): TreeIter;
  remove(iter: TreeIter): boolean;
  set_column_types(types: GObject.GType[]): void;
  set_value(iter: TreeIter, column: number, value: GObject.Value | any): void;
  set(iter: TreeIter, columns: number[], values: GObject.Value[]): void;
  // Conflicted with GObject.Object.set
  set(...args: never[]): any;
  swap(a: TreeIter, b: TreeIter): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  drag_data_received(dest: TreePath, value: GObject.Value | any): boolean;
  row_drop_possible(dest_path: TreePath, value: GObject.Value | any): boolean;
  vfunc_drag_data_received(dest: TreePath, value: GObject.Value | any): boolean;
  vfunc_row_drop_possible(
    dest_path: TreePath,
    value: GObject.Value | any
  ): boolean;
  drag_data_delete(path: TreePath): boolean;
  drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  row_draggable(path: TreePath): boolean;
  vfunc_drag_data_delete(path: TreePath): boolean;
  vfunc_drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  vfunc_row_draggable(path: TreePath): boolean;
  filter_new(root?: TreePath | null): TreeModel;
  foreach(func: TreeModelForeachFunc): void;
  get_column_type(index_: number): GObject.GType;
  get_flags(): TreeModelFlags;
  get_iter(path: TreePath): [boolean, TreeIter];
  get_iter_first(): [boolean, TreeIter];
  get_iter_from_string(path_string: string): [boolean, TreeIter];
  get_n_columns(): number;
  get_path(iter: TreeIter): TreePath;
  get_string_from_iter(iter: TreeIter): string | null;
  get_value(iter: TreeIter, column: number): unknown;
  iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  iter_has_child(iter: TreeIter): boolean;
  iter_n_children(iter?: TreeIter | null): number;
  iter_next(iter: TreeIter): boolean;
  iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  iter_parent(child: TreeIter): [boolean, TreeIter];
  iter_previous(iter: TreeIter): boolean;
  ref_node(iter: TreeIter): void;
  row_changed(path: TreePath, iter: TreeIter): void;
  row_deleted(path: TreePath): void;
  row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  row_inserted(path: TreePath, iter: TreeIter): void;
  rows_reordered(
    path: TreePath,
    iter: TreeIter | null,
    new_order: number[]
  ): void;
  unref_node(iter: TreeIter): void;
  vfunc_get_column_type(index_: number): GObject.GType;
  vfunc_get_flags(): TreeModelFlags;
  vfunc_get_iter(path: TreePath): [boolean, TreeIter];
  vfunc_get_n_columns(): number;
  vfunc_get_path(iter: TreeIter): TreePath;
  vfunc_get_value(iter: TreeIter, column: number): unknown;
  vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  vfunc_iter_has_child(iter: TreeIter): boolean;
  vfunc_iter_n_children(iter?: TreeIter | null): number;
  vfunc_iter_next(iter: TreeIter): boolean;
  vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
  vfunc_iter_previous(iter: TreeIter): boolean;
  vfunc_ref_node(iter: TreeIter): void;
  vfunc_row_changed(path: TreePath, iter: TreeIter): void;
  vfunc_row_deleted(path: TreePath): void;
  vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
  vfunc_unref_node(iter: TreeIter): void;
  get_sort_column_id(): [boolean, number, SortType];
  has_default_sort_func(): boolean;
  set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_sort_column_id(sort_column_id: number, order: SortType): void;
  set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  sort_column_changed(): void;
  vfunc_get_sort_column_id(): [boolean, number, SortType];
  vfunc_has_default_sort_func(): boolean;
  vfunc_set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
  vfunc_set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_sort_column_changed(): void;
}
export module TreeView {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    activate_on_single_click: boolean;
    enable_grid_lines: TreeViewGridLines;
    enable_search: boolean;
    enable_tree_lines: boolean;
    expander_column: TreeViewColumn;
    fixed_height_mode: boolean;
    headers_clickable: boolean;
    headers_visible: boolean;
    hover_expand: boolean;
    hover_selection: boolean;
    level_indentation: number;
    model: TreeModel;
    reorderable: boolean;
    rubber_banding: boolean;
    search_column: number;
    show_expanders: boolean;
    tooltip_column: number;
  }
}
export class TreeView
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Scrollable
{
  static $gtype: GObject.GType<TreeView>;

  constructor(
    properties?: Partial<TreeView.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeView.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get activate_on_single_click(): boolean;
  set activate_on_single_click(val: boolean);
  get enable_grid_lines(): TreeViewGridLines;
  set enable_grid_lines(val: TreeViewGridLines);
  get enable_search(): boolean;
  set enable_search(val: boolean);
  get enable_tree_lines(): boolean;
  set enable_tree_lines(val: boolean);
  get expander_column(): TreeViewColumn;
  set expander_column(val: TreeViewColumn);
  get fixed_height_mode(): boolean;
  set fixed_height_mode(val: boolean);
  get headers_clickable(): boolean;
  set headers_clickable(val: boolean);
  get headers_visible(): boolean;
  set headers_visible(val: boolean);
  get hover_expand(): boolean;
  set hover_expand(val: boolean);
  get hover_selection(): boolean;
  set hover_selection(val: boolean);
  get level_indentation(): number;
  set level_indentation(val: number);
  get model(): TreeModel;
  set model(val: TreeModel);
  get reorderable(): boolean;
  set reorderable(val: boolean);
  get rubber_banding(): boolean;
  set rubber_banding(val: boolean);
  get search_column(): number;
  set search_column(val: number);
  get show_expanders(): boolean;
  set show_expanders(val: boolean);
  get tooltip_column(): number;
  set tooltip_column(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "columns-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "columns-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "columns-changed"): void;
  connect(signal: "cursor-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "cursor-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "cursor-changed"): void;
  connect(
    signal: "expand-collapse-cursor-row",
    callback: (
      _source: this,
      object: boolean,
      p0: boolean,
      p1: boolean
    ) => boolean
  ): number;
  connect_after(
    signal: "expand-collapse-cursor-row",
    callback: (
      _source: this,
      object: boolean,
      p0: boolean,
      p1: boolean
    ) => boolean
  ): number;
  emit(
    signal: "expand-collapse-cursor-row",
    object: boolean,
    p0: boolean,
    p1: boolean
  ): void;
  connect(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      direction: number,
      extend: boolean,
      modify: boolean
    ) => boolean
  ): number;
  connect_after(
    signal: "move-cursor",
    callback: (
      _source: this,
      step: MovementStep,
      direction: number,
      extend: boolean,
      modify: boolean
    ) => boolean
  ): number;
  emit(
    signal: "move-cursor",
    step: MovementStep,
    direction: number,
    extend: boolean,
    modify: boolean
  ): void;
  connect(
    signal: "row-activated",
    callback: (
      _source: this,
      path: TreePath,
      column: TreeViewColumn | null
    ) => void
  ): number;
  connect_after(
    signal: "row-activated",
    callback: (
      _source: this,
      path: TreePath,
      column: TreeViewColumn | null
    ) => void
  ): number;
  emit(
    signal: "row-activated",
    path: TreePath,
    column: TreeViewColumn | null
  ): void;
  connect(
    signal: "row-collapsed",
    callback: (_source: this, iter: TreeIter, path: TreePath) => void
  ): number;
  connect_after(
    signal: "row-collapsed",
    callback: (_source: this, iter: TreeIter, path: TreePath) => void
  ): number;
  emit(signal: "row-collapsed", iter: TreeIter, path: TreePath): void;
  connect(
    signal: "row-expanded",
    callback: (_source: this, iter: TreeIter, path: TreePath) => void
  ): number;
  connect_after(
    signal: "row-expanded",
    callback: (_source: this, iter: TreeIter, path: TreePath) => void
  ): number;
  emit(signal: "row-expanded", iter: TreeIter, path: TreePath): void;
  connect(signal: "select-all", callback: (_source: this) => boolean): number;
  connect_after(
    signal: "select-all",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "select-all"): void;
  connect(
    signal: "select-cursor-parent",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "select-cursor-parent",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "select-cursor-parent"): void;
  connect(
    signal: "select-cursor-row",
    callback: (_source: this, object: boolean) => boolean
  ): number;
  connect_after(
    signal: "select-cursor-row",
    callback: (_source: this, object: boolean) => boolean
  ): number;
  emit(signal: "select-cursor-row", object: boolean): void;
  connect(
    signal: "start-interactive-search",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "start-interactive-search",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "start-interactive-search"): void;
  connect(
    signal: "test-collapse-row",
    callback: (_source: this, iter: TreeIter, path: TreePath) => boolean
  ): number;
  connect_after(
    signal: "test-collapse-row",
    callback: (_source: this, iter: TreeIter, path: TreePath) => boolean
  ): number;
  emit(signal: "test-collapse-row", iter: TreeIter, path: TreePath): void;
  connect(
    signal: "test-expand-row",
    callback: (_source: this, iter: TreeIter, path: TreePath) => boolean
  ): number;
  connect_after(
    signal: "test-expand-row",
    callback: (_source: this, iter: TreeIter, path: TreePath) => boolean
  ): number;
  emit(signal: "test-expand-row", iter: TreeIter, path: TreePath): void;
  connect(
    signal: "toggle-cursor-row",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "toggle-cursor-row",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "toggle-cursor-row"): void;
  connect(signal: "unselect-all", callback: (_source: this) => boolean): number;
  connect_after(
    signal: "unselect-all",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "unselect-all"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](): TreeView;
  static new_with_model(model: TreeModel): TreeView;

  // Members

  append_column(column: TreeViewColumn): number;
  collapse_all(): void;
  collapse_row(path: TreePath): boolean;
  columns_autosize(): void;
  convert_bin_window_to_tree_coords(bx: number, by: number): [number, number];
  convert_bin_window_to_widget_coords(bx: number, by: number): [number, number];
  convert_tree_to_bin_window_coords(tx: number, ty: number): [number, number];
  convert_tree_to_widget_coords(tx: number, ty: number): [number, number];
  convert_widget_to_bin_window_coords(wx: number, wy: number): [number, number];
  convert_widget_to_tree_coords(wx: number, wy: number): [number, number];
  create_row_drag_icon(path: TreePath): Gdk.Paintable | null;
  enable_model_drag_dest(
    formats: Gdk.ContentFormats,
    actions: Gdk.DragAction
  ): void;
  enable_model_drag_source(
    start_button_mask: Gdk.ModifierType,
    formats: Gdk.ContentFormats,
    actions: Gdk.DragAction
  ): void;
  expand_all(): void;
  expand_row(path: TreePath, open_all: boolean): boolean;
  expand_to_path(path: TreePath): void;
  get_activate_on_single_click(): boolean;
  get_background_area(
    path: TreePath | null,
    column: TreeViewColumn | null
  ): Gdk.Rectangle;
  get_cell_area(
    path: TreePath | null,
    column: TreeViewColumn | null
  ): Gdk.Rectangle;
  get_column(n: number): TreeViewColumn | null;
  get_columns(): TreeViewColumn[];
  get_cursor(): [TreePath | null, TreeViewColumn | null];
  // Conflicted with Gtk.Widget.get_cursor
  get_cursor(...args: never[]): any;
  get_dest_row_at_pos(
    drag_x: number,
    drag_y: number
  ): [boolean, TreePath | null, TreeViewDropPosition | null];
  get_drag_dest_row(): [TreePath | null, TreeViewDropPosition | null];
  get_enable_search(): boolean;
  get_enable_tree_lines(): boolean;
  get_expander_column(): TreeViewColumn | null;
  get_fixed_height_mode(): boolean;
  get_grid_lines(): TreeViewGridLines;
  get_headers_clickable(): boolean;
  get_headers_visible(): boolean;
  get_hover_expand(): boolean;
  get_hover_selection(): boolean;
  get_level_indentation(): number;
  get_model(): TreeModel | null;
  get_n_columns(): number;
  get_path_at_pos(
    x: number,
    y: number
  ): [boolean, TreePath | null, TreeViewColumn | null, number, number];
  get_reorderable(): boolean;
  get_rubber_banding(): boolean;
  get_search_column(): number;
  get_search_entry(): Editable | null;
  get_selection(): TreeSelection;
  get_show_expanders(): boolean;
  get_tooltip_column(): number;
  get_tooltip_context(
    x: number,
    y: number,
    keyboard_tip: boolean
  ): [boolean, TreeModel | null, TreePath | null, TreeIter | null];
  get_visible_range(): [boolean, TreePath | null, TreePath | null];
  get_visible_rect(): Gdk.Rectangle;
  insert_column(column: TreeViewColumn, position: number): number;
  insert_column_with_data_func(
    position: number,
    title: string,
    cell: CellRenderer,
    func: TreeCellDataFunc
  ): number;
  is_blank_at_pos(
    x: number,
    y: number
  ): [boolean, TreePath | null, TreeViewColumn | null, number, number];
  is_rubber_banding_active(): boolean;
  map_expanded_rows(func: TreeViewMappingFunc): void;
  move_column_after(
    column: TreeViewColumn,
    base_column?: TreeViewColumn | null
  ): void;
  remove_column(column: TreeViewColumn): number;
  row_activated(path: TreePath, column?: TreeViewColumn | null): void;
  row_expanded(path: TreePath): boolean;
  scroll_to_cell(
    path: TreePath | null,
    column: TreeViewColumn | null,
    use_align: boolean,
    row_align: number,
    col_align: number
  ): void;
  scroll_to_point(tree_x: number, tree_y: number): void;
  set_activate_on_single_click(single: boolean): void;
  set_column_drag_function(
    func?: TreeViewColumnDropFunc | null,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_cursor(
    path: TreePath,
    focus_column: TreeViewColumn | null,
    start_editing: boolean
  ): void;
  // Conflicted with Gtk.Widget.set_cursor
  set_cursor(...args: never[]): any;
  set_cursor_on_cell(
    path: TreePath,
    focus_column: TreeViewColumn | null,
    focus_cell: CellRenderer | null,
    start_editing: boolean
  ): void;
  set_drag_dest_row(path: TreePath | null, pos: TreeViewDropPosition): void;
  set_enable_search(enable_search: boolean): void;
  set_enable_tree_lines(enabled: boolean): void;
  set_expander_column(column?: TreeViewColumn | null): void;
  set_fixed_height_mode(enable: boolean): void;
  set_grid_lines(grid_lines: TreeViewGridLines): void;
  set_headers_clickable(setting: boolean): void;
  set_headers_visible(headers_visible: boolean): void;
  set_hover_expand(expand: boolean): void;
  set_hover_selection(hover: boolean): void;
  set_level_indentation(indentation: number): void;
  set_model(model?: TreeModel | null): void;
  set_reorderable(reorderable: boolean): void;
  set_row_separator_func(
    func?: TreeViewRowSeparatorFunc | null,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_rubber_banding(enable: boolean): void;
  set_search_column(column: number): void;
  set_search_entry(entry?: Editable | null): void;
  set_search_equal_func(
    search_equal_func: TreeViewSearchEqualFunc,
    search_destroy?: GLib.DestroyNotify | null
  ): void;
  set_show_expanders(enabled: boolean): void;
  set_tooltip_cell(
    tooltip: Tooltip,
    path?: TreePath | null,
    column?: TreeViewColumn | null,
    cell?: CellRenderer | null
  ): void;
  set_tooltip_column(column: number): void;
  set_tooltip_row(tooltip: Tooltip, path: TreePath): void;
  unset_rows_drag_dest(): void;
  unset_rows_drag_source(): void;
  vfunc_columns_changed(): void;
  vfunc_cursor_changed(): void;
  vfunc_expand_collapse_cursor_row(
    logical: boolean,
    expand: boolean,
    open_all: boolean
  ): boolean;
  vfunc_move_cursor(
    step: MovementStep,
    count: number,
    extend: boolean,
    modify: boolean
  ): boolean;
  vfunc_row_activated(path: TreePath, column?: TreeViewColumn | null): void;
  vfunc_row_collapsed(iter: TreeIter, path: TreePath): void;
  vfunc_row_expanded(iter: TreeIter, path: TreePath): void;
  vfunc_select_all(): boolean;
  vfunc_select_cursor_parent(): boolean;
  vfunc_select_cursor_row(start_editing: boolean): boolean;
  vfunc_start_interactive_search(): boolean;
  vfunc_test_collapse_row(iter: TreeIter, path: TreePath): boolean;
  vfunc_test_expand_row(iter: TreeIter, path: TreePath): boolean;
  vfunc_toggle_cursor_row(): boolean;
  vfunc_unselect_all(): boolean;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module TreeViewColumn {
  export interface ConstructorProperties
    extends GObject.InitiallyUnowned.ConstructorProperties {
    [key: string]: any;
    alignment: number;
    cell_area: CellArea;
    clickable: boolean;
    expand: boolean;
    fixed_width: number;
    max_width: number;
    min_width: number;
    reorderable: boolean;
    resizable: boolean;
    sizing: TreeViewColumnSizing;
    sort_column_id: number;
    sort_indicator: boolean;
    sort_order: SortType;
    spacing: number;
    title: string;
    visible: boolean;
    widget: Widget;
    width: number;
    x_offset: number;
  }
}
export class TreeViewColumn
  extends GObject.InitiallyUnowned
  implements Buildable, CellLayout
{
  static $gtype: GObject.GType<TreeViewColumn>;

  constructor(
    properties?: Partial<TreeViewColumn.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<TreeViewColumn.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get alignment(): number;
  set alignment(val: number);
  get cell_area(): CellArea;
  get clickable(): boolean;
  set clickable(val: boolean);
  get expand(): boolean;
  set expand(val: boolean);
  get fixed_width(): number;
  set fixed_width(val: number);
  get max_width(): number;
  set max_width(val: number);
  get min_width(): number;
  set min_width(val: number);
  get reorderable(): boolean;
  set reorderable(val: boolean);
  get resizable(): boolean;
  set resizable(val: boolean);
  get sizing(): TreeViewColumnSizing;
  set sizing(val: TreeViewColumnSizing);
  get sort_column_id(): number;
  set sort_column_id(val: number);
  get sort_indicator(): boolean;
  set sort_indicator(val: boolean);
  get sort_order(): SortType;
  set sort_order(val: SortType);
  get spacing(): number;
  set spacing(val: number);
  get title(): string;
  set title(val: string);
  get visible(): boolean;
  set visible(val: boolean);
  get widget(): Widget;
  set widget(val: Widget);
  get width(): number;
  get x_offset(): number;

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "clicked", callback: (_source: this) => void): number;
  connect_after(signal: "clicked", callback: (_source: this) => void): number;
  emit(signal: "clicked"): void;

  // Constructors

  static ["new"](): TreeViewColumn;
  static new_with_area(area: CellArea): TreeViewColumn;

  // Members

  add_attribute(
    cell_renderer: CellRenderer,
    attribute: string,
    column: number
  ): void;
  cell_get_position(cell_renderer: CellRenderer): [boolean, number, number];
  cell_get_size(): [number, number, number, number];
  cell_is_visible(): boolean;
  cell_set_cell_data(
    tree_model: TreeModel,
    iter: TreeIter,
    is_expander: boolean,
    is_expanded: boolean
  ): void;
  clear(): void;
  clear_attributes(cell_renderer: CellRenderer): void;
  clicked(): void;
  focus_cell(cell: CellRenderer): void;
  get_alignment(): number;
  get_button(): Widget;
  get_clickable(): boolean;
  get_expand(): boolean;
  get_fixed_width(): number;
  get_max_width(): number;
  get_min_width(): number;
  get_reorderable(): boolean;
  get_resizable(): boolean;
  get_sizing(): TreeViewColumnSizing;
  get_sort_column_id(): number;
  get_sort_indicator(): boolean;
  get_sort_order(): SortType;
  get_spacing(): number;
  get_title(): string;
  get_tree_view(): Widget | null;
  get_visible(): boolean;
  get_widget(): Widget | null;
  get_width(): number;
  get_x_offset(): number;
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  queue_resize(): void;
  set_alignment(xalign: number): void;
  set_cell_data_func(
    cell_renderer: CellRenderer,
    func?: TreeCellDataFunc | null
  ): void;
  // Conflicted with Gtk.CellLayout.set_cell_data_func
  set_cell_data_func(...args: never[]): any;
  set_clickable(clickable: boolean): void;
  set_expand(expand: boolean): void;
  set_fixed_width(fixed_width: number): void;
  set_max_width(max_width: number): void;
  set_min_width(min_width: number): void;
  set_reorderable(reorderable: boolean): void;
  set_resizable(resizable: boolean): void;
  set_sizing(type: TreeViewColumnSizing): void;
  set_sort_column_id(sort_column_id: number): void;
  set_sort_indicator(setting: boolean): void;
  set_sort_order(order: SortType): void;
  set_spacing(spacing: number): void;
  set_title(title: string): void;
  set_visible(visible: boolean): void;
  set_widget(widget?: Widget | null): void;

  // Implemented Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  reorder(cell: CellRenderer, position: number): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
}
export module UriLauncher {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    uri: string;
  }
}
export class UriLauncher extends GObject.Object {
  static $gtype: GObject.GType<UriLauncher>;

  constructor(
    properties?: Partial<UriLauncher.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<UriLauncher.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get uri(): string;
  set uri(val: string);

  // Constructors

  static ["new"](uri?: string | null): UriLauncher;

  // Members

  get_uri(): string | null;
  launch(parent?: Window | null, cancellable?: Gio.Cancellable | null): void;
  launch_finish(result: Gio.AsyncResult): boolean;
  set_uri(uri?: string | null): void;
}
export module Video {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    autoplay: boolean;
    file: Gio.File;
    loop: boolean;
    media_stream: MediaStream;
  }
}
export class Video
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Video>;

  constructor(
    properties?: Partial<Video.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Video.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get autoplay(): boolean;
  set autoplay(val: boolean);
  get file(): Gio.File;
  set file(val: Gio.File);
  get loop(): boolean;
  set loop(val: boolean);
  get media_stream(): MediaStream;
  set media_stream(val: MediaStream);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Video;
  static new_for_file(file?: Gio.File | null): Video;
  static new_for_filename(filename?: string | null): Video;
  static new_for_media_stream(stream?: MediaStream | null): Video;
  static new_for_resource(resource_path?: string | null): Video;

  // Members

  get_autoplay(): boolean;
  get_file(): Gio.File | null;
  get_loop(): boolean;
  get_media_stream(): MediaStream | null;
  set_autoplay(autoplay: boolean): void;
  set_file(file?: Gio.File | null): void;
  set_filename(filename?: string | null): void;
  set_loop(loop: boolean): void;
  set_media_stream(stream?: MediaStream | null): void;
  set_resource(resource_path?: string | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module Viewport {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
    scroll_to_focus: boolean;
  }
}
export class Viewport
  extends Widget
  implements Accessible, Buildable, ConstraintTarget, Scrollable
{
  static $gtype: GObject.GType<Viewport>;

  constructor(
    properties?: Partial<Viewport.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Viewport.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);
  get scroll_to_focus(): boolean;
  set scroll_to_focus(val: boolean);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);
  get hadjustment(): Adjustment;
  set hadjustment(val: Adjustment);
  get hscroll_policy(): ScrollablePolicy;
  set hscroll_policy(val: ScrollablePolicy);
  get vadjustment(): Adjustment;
  set vadjustment(val: Adjustment);
  get vscroll_policy(): ScrollablePolicy;
  set vscroll_policy(val: ScrollablePolicy);

  // Constructors

  static ["new"](
    hadjustment?: Adjustment | null,
    vadjustment?: Adjustment | null
  ): Viewport;

  // Members

  get_child(): Widget | null;
  get_scroll_to_focus(): boolean;
  set_child(child?: Widget | null): void;
  set_scroll_to_focus(scroll_to_focus: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}
export module VolumeButton {
  export interface ConstructorProperties
    extends ScaleButton.ConstructorProperties {
    [key: string]: any;
    use_symbolic: boolean;
  }
}
export class VolumeButton
  extends ScaleButton
  implements
    Accessible,
    AccessibleRange,
    Buildable,
    ConstraintTarget,
    Orientable
{
  static $gtype: GObject.GType<VolumeButton>;

  constructor(
    properties?: Partial<VolumeButton.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<VolumeButton.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get use_symbolic(): boolean;
  set use_symbolic(val: boolean);

  // Implemented Properties

  get orientation(): Orientation;
  set orientation(val: Orientation);

  // Constructors

  static ["new"](): VolumeButton;

  // Implemented Members

  vfunc_set_current_value(value: number): boolean;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export module Widget {
  export interface ConstructorProperties
    extends GObject.InitiallyUnowned.ConstructorProperties {
    [key: string]: any;
    can_focus: boolean;
    can_target: boolean;
    css_classes: string[];
    css_name: string;
    cursor: Gdk.Cursor;
    focus_on_click: boolean;
    focusable: boolean;
    halign: Align;
    has_default: boolean;
    has_focus: boolean;
    has_tooltip: boolean;
    height_request: number;
    hexpand: boolean;
    hexpand_set: boolean;
    layout_manager: LayoutManager;
    margin_bottom: number;
    margin_end: number;
    margin_start: number;
    margin_top: number;
    name: string;
    opacity: number;
    overflow: Overflow;
    receives_default: boolean;
    root: Root;
    scale_factor: number;
    sensitive: boolean;
    tooltip_markup: string;
    tooltip_text: string;
    valign: Align;
    vexpand: boolean;
    vexpand_set: boolean;
    visible: boolean;
    width_request: number;
  }
}
export abstract class Widget
  extends GObject.InitiallyUnowned
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<Widget>;

  constructor(
    properties?: Partial<Widget.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Widget.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get can_focus(): boolean;
  set can_focus(val: boolean);
  get can_target(): boolean;
  set can_target(val: boolean);
  get css_classes(): string[];
  set css_classes(val: string[]);
  get css_name(): string;
  get cursor(): Gdk.Cursor;
  set cursor(val: Gdk.Cursor);
  get focus_on_click(): boolean;
  set focus_on_click(val: boolean);
  get focusable(): boolean;
  set focusable(val: boolean);
  get halign(): Align;
  set halign(val: Align);
  get has_default(): boolean;
  get has_focus(): boolean;
  get has_tooltip(): boolean;
  set has_tooltip(val: boolean);
  get height_request(): number;
  set height_request(val: number);
  get hexpand(): boolean;
  set hexpand(val: boolean);
  get hexpand_set(): boolean;
  set hexpand_set(val: boolean);
  get layout_manager(): LayoutManager;
  set layout_manager(val: LayoutManager);
  get margin_bottom(): number;
  set margin_bottom(val: number);
  get margin_end(): number;
  set margin_end(val: number);
  get margin_start(): number;
  set margin_start(val: number);
  get margin_top(): number;
  set margin_top(val: number);
  get name(): string;
  set name(val: string);
  get opacity(): number;
  set opacity(val: number);
  get overflow(): Overflow;
  set overflow(val: Overflow);
  get receives_default(): boolean;
  set receives_default(val: boolean);
  get root(): Root;
  get scale_factor(): number;
  get sensitive(): boolean;
  set sensitive(val: boolean);
  get tooltip_markup(): string;
  set tooltip_markup(val: string);
  get tooltip_text(): string;
  set tooltip_text(val: string);
  get valign(): Align;
  set valign(val: Align);
  get vexpand(): boolean;
  set vexpand(val: boolean);
  get vexpand_set(): boolean;
  set vexpand_set(val: boolean);
  get visible(): boolean;
  set visible(val: boolean);
  get width_request(): number;
  set width_request(val: number);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(signal: "destroy", callback: (_source: this) => void): number;
  connect_after(signal: "destroy", callback: (_source: this) => void): number;
  emit(signal: "destroy"): void;
  connect(
    signal: "direction-changed",
    callback: (_source: this, previous_direction: TextDirection) => void
  ): number;
  connect_after(
    signal: "direction-changed",
    callback: (_source: this, previous_direction: TextDirection) => void
  ): number;
  emit(signal: "direction-changed", previous_direction: TextDirection): void;
  connect(signal: "hide", callback: (_source: this) => void): number;
  connect_after(signal: "hide", callback: (_source: this) => void): number;
  emit(signal: "hide"): void;
  connect(
    signal: "keynav-failed",
    callback: (_source: this, direction: DirectionType) => boolean
  ): number;
  connect_after(
    signal: "keynav-failed",
    callback: (_source: this, direction: DirectionType) => boolean
  ): number;
  emit(signal: "keynav-failed", direction: DirectionType): void;
  connect(signal: "map", callback: (_source: this) => void): number;
  connect_after(signal: "map", callback: (_source: this) => void): number;
  emit(signal: "map"): void;
  connect(
    signal: "mnemonic-activate",
    callback: (_source: this, group_cycling: boolean) => boolean
  ): number;
  connect_after(
    signal: "mnemonic-activate",
    callback: (_source: this, group_cycling: boolean) => boolean
  ): number;
  emit(signal: "mnemonic-activate", group_cycling: boolean): void;
  connect(
    signal: "move-focus",
    callback: (_source: this, direction: DirectionType) => void
  ): number;
  connect_after(
    signal: "move-focus",
    callback: (_source: this, direction: DirectionType) => void
  ): number;
  emit(signal: "move-focus", direction: DirectionType): void;
  connect(
    signal: "query-tooltip",
    callback: (
      _source: this,
      x: number,
      y: number,
      keyboard_mode: boolean,
      tooltip: Tooltip
    ) => boolean
  ): number;
  connect_after(
    signal: "query-tooltip",
    callback: (
      _source: this,
      x: number,
      y: number,
      keyboard_mode: boolean,
      tooltip: Tooltip
    ) => boolean
  ): number;
  emit(
    signal: "query-tooltip",
    x: number,
    y: number,
    keyboard_mode: boolean,
    tooltip: Tooltip
  ): void;
  connect(signal: "realize", callback: (_source: this) => void): number;
  connect_after(signal: "realize", callback: (_source: this) => void): number;
  emit(signal: "realize"): void;
  connect(signal: "show", callback: (_source: this) => void): number;
  connect_after(signal: "show", callback: (_source: this) => void): number;
  emit(signal: "show"): void;
  connect(
    signal: "state-flags-changed",
    callback: (_source: this, flags: StateFlags) => void
  ): number;
  connect_after(
    signal: "state-flags-changed",
    callback: (_source: this, flags: StateFlags) => void
  ): number;
  emit(signal: "state-flags-changed", flags: StateFlags): void;
  connect(signal: "unmap", callback: (_source: this) => void): number;
  connect_after(signal: "unmap", callback: (_source: this) => void): number;
  emit(signal: "unmap"): void;
  connect(signal: "unrealize", callback: (_source: this) => void): number;
  connect_after(signal: "unrealize", callback: (_source: this) => void): number;
  emit(signal: "unrealize"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Members

  action_set_enabled(action_name: string, enabled: boolean): void;
  activate(): boolean;
  activate_action(name: string, args?: GLib.Variant | null): boolean;
  activate_default(): void;
  add_controller(controller: EventController): void;
  add_css_class(css_class: string): void;
  add_mnemonic_label(label: Widget): void;
  add_tick_callback(callback: TickCallback): number;
  allocate(
    width: number,
    height: number,
    baseline: number,
    transform?: Gsk.Transform | null
  ): void;
  child_focus(direction: DirectionType): boolean;
  compute_bounds(target: Widget): [boolean, Graphene.Rect];
  compute_expand(orientation: Orientation): boolean;
  compute_point(
    target: Widget,
    point: Graphene.Point
  ): [boolean, Graphene.Point];
  compute_transform(target: Widget): [boolean, Graphene.Matrix];
  contains(x: number, y: number): boolean;
  create_pango_context(): Pango.Context;
  create_pango_layout(text?: string | null): Pango.Layout;
  dispose_template(widget_type: GObject.GType): void;
  drag_check_threshold(
    start_x: number,
    start_y: number,
    current_x: number,
    current_y: number
  ): boolean;
  error_bell(): void;
  get_allocated_baseline(): number;
  get_allocated_height(): number;
  get_allocated_width(): number;
  get_allocation(): Allocation;
  get_ancestor(widget_type: GObject.GType): Widget | null;
  get_can_focus(): boolean;
  get_can_target(): boolean;
  get_child_visible(): boolean;
  get_clipboard(): Gdk.Clipboard;
  get_color(): Gdk.RGBA;
  get_css_classes(): string[];
  get_css_name(): string;
  get_cursor(): Gdk.Cursor | null;
  get_direction(): TextDirection;
  get_display(): Gdk.Display;
  get_first_child(): Widget | null;
  get_focus_child(): Widget | null;
  get_focus_on_click(): boolean;
  get_focusable(): boolean;
  get_font_map(): Pango.FontMap | null;
  get_font_options(): cairo.FontOptions | null;
  get_frame_clock(): Gdk.FrameClock | null;
  get_halign(): Align;
  get_has_tooltip(): boolean;
  get_height(): number;
  get_hexpand(): boolean;
  get_hexpand_set(): boolean;
  get_last_child(): Widget | null;
  get_layout_manager(): LayoutManager | null;
  get_mapped(): boolean;
  get_margin_bottom(): number;
  get_margin_end(): number;
  get_margin_start(): number;
  get_margin_top(): number;
  get_name(): string;
  get_native(): Native | null;
  get_next_sibling(): Widget | null;
  get_opacity(): number;
  get_overflow(): Overflow;
  get_pango_context(): Pango.Context;
  get_parent(): Widget | null;
  get_preferred_size(): [Requisition | null, Requisition | null];
  get_prev_sibling(): Widget | null;
  get_primary_clipboard(): Gdk.Clipboard;
  get_realized(): boolean;
  get_receives_default(): boolean;
  get_request_mode(): SizeRequestMode;
  get_root(): Root | null;
  get_scale_factor(): number;
  get_sensitive(): boolean;
  get_settings(): Settings;
  get_size(orientation: Orientation): number;
  get_size_request(): [number, number];
  get_state_flags(): StateFlags;
  get_style_context(): StyleContext;
  get_template_child<T = GObject.Object>(
    widget_type: GObject.GType,
    name: string
  ): T;
  get_tooltip_markup(): string | null;
  get_tooltip_text(): string | null;
  get_valign(): Align;
  get_vexpand(): boolean;
  get_vexpand_set(): boolean;
  get_visible(): boolean;
  get_width(): number;
  grab_focus(): boolean;
  has_css_class(css_class: string): boolean;
  has_visible_focus(): boolean;
  hide(): void;
  in_destruction(): boolean;
  init_template(): void;
  insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
  insert_after(parent: Widget, previous_sibling?: Widget | null): void;
  insert_before(parent: Widget, next_sibling?: Widget | null): void;
  is_ancestor(ancestor: Widget): boolean;
  is_drawable(): boolean;
  is_focus(): boolean;
  is_sensitive(): boolean;
  is_visible(): boolean;
  keynav_failed(direction: DirectionType): boolean;
  list_mnemonic_labels(): Widget[];
  map(): void;
  measure(
    orientation: Orientation,
    for_size: number
  ): [number, number, number, number];
  mnemonic_activate(group_cycling: boolean): boolean;
  observe_children(): Gio.ListModel;
  observe_controllers(): Gio.ListModel;
  pick(x: number, y: number, flags: PickFlags): Widget | null;
  queue_allocate(): void;
  queue_draw(): void;
  queue_resize(): void;
  realize(): void;
  remove_controller(controller: EventController): void;
  remove_css_class(css_class: string): void;
  remove_mnemonic_label(label: Widget): void;
  remove_tick_callback(id: number): void;
  set_can_focus(can_focus: boolean): void;
  set_can_target(can_target: boolean): void;
  set_child_visible(child_visible: boolean): void;
  set_css_classes(classes: string[]): void;
  set_cursor(cursor?: Gdk.Cursor | null): void;
  set_cursor_from_name(name?: string | null): void;
  set_direction(dir: TextDirection): void;
  set_focus_child(child?: Widget | null): void;
  set_focus_on_click(focus_on_click: boolean): void;
  set_focusable(focusable: boolean): void;
  set_font_map(font_map?: Pango.FontMap | null): void;
  set_font_options(options?: cairo.FontOptions | null): void;
  set_halign(align: Align): void;
  set_has_tooltip(has_tooltip: boolean): void;
  set_hexpand(expand: boolean): void;
  set_hexpand_set(set: boolean): void;
  set_layout_manager(layout_manager?: LayoutManager | null): void;
  set_margin_bottom(margin: number): void;
  set_margin_end(margin: number): void;
  set_margin_start(margin: number): void;
  set_margin_top(margin: number): void;
  set_name(name: string): void;
  set_opacity(opacity: number): void;
  set_overflow(overflow: Overflow): void;
  set_parent(parent: Widget): void;
  set_receives_default(receives_default: boolean): void;
  set_sensitive(sensitive: boolean): void;
  set_size_request(width: number, height: number): void;
  set_state_flags(flags: StateFlags, clear: boolean): void;
  set_tooltip_markup(markup?: string | null): void;
  set_tooltip_text(text?: string | null): void;
  set_valign(align: Align): void;
  set_vexpand(expand: boolean): void;
  set_vexpand_set(set: boolean): void;
  set_visible(visible: boolean): void;
  should_layout(): boolean;
  show(): void;
  size_allocate(allocation: Allocation, baseline: number): void;
  snapshot_child(child: Widget, snapshot: Snapshot): void;
  translate_coordinates(
    dest_widget: Widget,
    src_x: number,
    src_y: number
  ): [boolean, number, number];
  trigger_tooltip_query(): void;
  unmap(): void;
  unparent(): void;
  unrealize(): void;
  unset_state_flags(flags: StateFlags): void;
  vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
  vfunc_contains(x: number, y: number): boolean;
  vfunc_css_changed(change: CssStyleChange): void;
  vfunc_direction_changed(previous_direction: TextDirection): void;
  vfunc_focus(direction: DirectionType): boolean;
  vfunc_get_request_mode(): SizeRequestMode;
  vfunc_grab_focus(): boolean;
  vfunc_hide(): void;
  vfunc_keynav_failed(direction: DirectionType): boolean;
  vfunc_map(): void;
  vfunc_measure(
    orientation: Orientation,
    for_size: number
  ): [number, number, number, number];
  vfunc_mnemonic_activate(group_cycling: boolean): boolean;
  vfunc_move_focus(direction: DirectionType): void;
  vfunc_query_tooltip(
    x: number,
    y: number,
    keyboard_tooltip: boolean,
    tooltip: Tooltip
  ): boolean;
  vfunc_realize(): void;
  vfunc_root(): void;
  vfunc_set_focus_child(child?: Widget | null): void;
  vfunc_show(): void;
  vfunc_size_allocate(width: number, height: number, baseline: number): void;
  vfunc_snapshot(snapshot: Snapshot): void;
  vfunc_state_flags_changed(previous_state_flags: StateFlags): void;
  vfunc_system_setting_changed(settings: SystemSetting): void;
  vfunc_unmap(): void;
  vfunc_unrealize(): void;
  vfunc_unroot(): void;
  static get_default_direction(): TextDirection;
  static set_default_direction(dir: TextDirection): void;
  static add_shortcut(shortcut: Shortcut): void;
  static bind_template_callback_full(
    callback_name: string,
    callback_symbol: GObject.Callback
  ): void;
  static bind_template_child_full(
    name: string,
    internal_child: boolean,
    struct_offset: number
  ): void;
  static get_accessible_role(): AccessibleRole;
  static get_activate_signal(): number;
  static get_css_name(): string;
  static get_layout_manager_type(): GObject.GType;
  static install_action(
    action_name: string,
    parameter_type: string | null,
    activate: WidgetActionActivateFunc
  ): void;
  static install_property_action(
    action_name: string,
    property_name: string
  ): void;
  static query_action(
    index_: number
  ): [boolean, GObject.GType, string, GLib.VariantType | null, string];
  static set_accessible_role(accessible_role: AccessibleRole): void;
  static set_activate_signal(signal_id: number): void;
  static set_activate_signal_from_name(signal_name: string): void;
  static set_css_name(name: string): void;
  static set_layout_manager_type(type: GObject.GType): void;
  static set_template(template_bytes: GLib.Bytes | Uint8Array): void;
  static set_template_from_resource(resource_name: string): void;
  static set_template_scope(scope: BuilderScope): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module WidgetPaintable {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
    widget: Widget;
  }
}
export class WidgetPaintable extends GObject.Object implements Gdk.Paintable {
  static $gtype: GObject.GType<WidgetPaintable>;

  constructor(
    properties?: Partial<WidgetPaintable.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<WidgetPaintable.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get widget(): Widget;
  set widget(val: Widget);

  // Constructors

  static ["new"](widget?: Widget | null): WidgetPaintable;

  // Members

  get_widget(): Widget | null;
  set_widget(widget?: Widget | null): void;

  // Implemented Members

  compute_concrete_size(
    specified_width: number,
    specified_height: number,
    default_width: number,
    default_height: number
  ): [number, number];
  get_current_image(): Gdk.Paintable;
  get_flags(): Gdk.PaintableFlags;
  get_intrinsic_aspect_ratio(): number;
  get_intrinsic_height(): number;
  get_intrinsic_width(): number;
  invalidate_contents(): void;
  invalidate_size(): void;
  snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
  vfunc_get_current_image(): Gdk.Paintable;
  vfunc_get_flags(): Gdk.PaintableFlags;
  vfunc_get_intrinsic_aspect_ratio(): number;
  vfunc_get_intrinsic_height(): number;
  vfunc_get_intrinsic_width(): number;
  vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
}
export module Window {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    application: Application;
    child: Widget;
    decorated: boolean;
    default_height: number;
    default_widget: Widget;
    default_width: number;
    deletable: boolean;
    destroy_with_parent: boolean;
    display: Gdk.Display;
    focus_visible: boolean;
    focus_widget: Widget;
    fullscreened: boolean;
    handle_menubar_accel: boolean;
    hide_on_close: boolean;
    icon_name: string;
    is_active: boolean;
    maximized: boolean;
    mnemonics_visible: boolean;
    modal: boolean;
    resizable: boolean;
    startup_id: string;
    title: string;
    titlebar: Widget;
    transient_for: Window;
  }
}
export class Window
  extends Widget
  implements
    Accessible,
    Buildable,
    ConstraintTarget,
    Native,
    Root,
    ShortcutManager
{
  static $gtype: GObject.GType<Window>;

  constructor(
    properties?: Partial<Window.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<Window.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get application(): Application;
  set application(val: Application);
  get child(): Widget;
  set child(val: Widget);
  get decorated(): boolean;
  set decorated(val: boolean);
  get default_height(): number;
  set default_height(val: number);
  get default_widget(): Widget;
  set default_widget(val: Widget);
  get default_width(): number;
  set default_width(val: number);
  get deletable(): boolean;
  set deletable(val: boolean);
  get destroy_with_parent(): boolean;
  set destroy_with_parent(val: boolean);
  get display(): Gdk.Display;
  set display(val: Gdk.Display);
  get focus_visible(): boolean;
  set focus_visible(val: boolean);
  get focus_widget(): Widget;
  set focus_widget(val: Widget);
  get fullscreened(): boolean;
  set fullscreened(val: boolean);
  get handle_menubar_accel(): boolean;
  set handle_menubar_accel(val: boolean);
  get hide_on_close(): boolean;
  set hide_on_close(val: boolean);
  get icon_name(): string;
  set icon_name(val: string);
  get is_active(): boolean;
  get maximized(): boolean;
  set maximized(val: boolean);
  get mnemonics_visible(): boolean;
  set mnemonics_visible(val: boolean);
  get modal(): boolean;
  set modal(val: boolean);
  get resizable(): boolean;
  set resizable(val: boolean);
  set startup_id(val: string);
  get title(): string;
  set title(val: string);
  get titlebar(): Widget;
  set titlebar(val: Widget);
  get transient_for(): Window;
  set transient_for(val: Window);

  // Signals

  connect(id: string, callback: (...args: any[]) => any): number;
  connect_after(id: string, callback: (...args: any[]) => any): number;
  emit(id: string, ...args: any[]): void;
  connect(
    signal: "activate-default",
    callback: (_source: this) => void
  ): number;
  connect_after(
    signal: "activate-default",
    callback: (_source: this) => void
  ): number;
  emit(signal: "activate-default"): void;
  connect(signal: "activate-focus", callback: (_source: this) => void): number;
  connect_after(
    signal: "activate-focus",
    callback: (_source: this) => void
  ): number;
  emit(signal: "activate-focus"): void;
  connect(
    signal: "close-request",
    callback: (_source: this) => boolean
  ): number;
  connect_after(
    signal: "close-request",
    callback: (_source: this) => boolean
  ): number;
  emit(signal: "close-request"): void;
  connect(
    signal: "enable-debugging",
    callback: (_source: this, toggle: boolean) => boolean
  ): number;
  connect_after(
    signal: "enable-debugging",
    callback: (_source: this, toggle: boolean) => boolean
  ): number;
  emit(signal: "enable-debugging", toggle: boolean): void;
  connect(signal: "keys-changed", callback: (_source: this) => void): number;
  connect_after(
    signal: "keys-changed",
    callback: (_source: this) => void
  ): number;
  emit(signal: "keys-changed"): void;

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): Window;

  // Members

  close(): void;
  destroy(): void;
  fullscreen(): void;
  fullscreen_on_monitor(monitor: Gdk.Monitor): void;
  get_application(): Application | null;
  get_child(): Widget | null;
  get_decorated(): boolean;
  get_default_size(): [number, number];
  get_default_widget(): Widget | null;
  get_deletable(): boolean;
  get_destroy_with_parent(): boolean;
  get_focus(): Widget | null;
  get_focus_visible(): boolean;
  get_group(): WindowGroup;
  get_handle_menubar_accel(): boolean;
  get_hide_on_close(): boolean;
  get_icon_name(): string | null;
  get_mnemonics_visible(): boolean;
  get_modal(): boolean;
  get_resizable(): boolean;
  get_title(): string | null;
  get_titlebar(): Widget | null;
  get_transient_for(): Window | null;
  has_group(): boolean;
  is_fullscreen(): boolean;
  is_maximized(): boolean;
  maximize(): void;
  minimize(): void;
  present(): void;
  present_with_time(timestamp: number): void;
  set_application(application?: Application | null): void;
  set_child(child?: Widget | null): void;
  set_decorated(setting: boolean): void;
  set_default_size(width: number, height: number): void;
  set_default_widget(default_widget?: Widget | null): void;
  set_deletable(setting: boolean): void;
  set_destroy_with_parent(setting: boolean): void;
  set_display(display: Gdk.Display): void;
  set_focus(focus?: Widget | null): void;
  set_focus_visible(setting: boolean): void;
  set_handle_menubar_accel(handle_menubar_accel: boolean): void;
  set_hide_on_close(setting: boolean): void;
  set_icon_name(name?: string | null): void;
  set_mnemonics_visible(setting: boolean): void;
  set_modal(modal: boolean): void;
  set_resizable(resizable: boolean): void;
  set_startup_id(startup_id: string): void;
  set_title(title?: string | null): void;
  set_titlebar(titlebar?: Widget | null): void;
  set_transient_for(parent?: Window | null): void;
  unfullscreen(): void;
  unmaximize(): void;
  unminimize(): void;
  vfunc_activate_default(): void;
  vfunc_activate_focus(): void;
  vfunc_close_request(): boolean;
  vfunc_enable_debugging(toggle: boolean): boolean;
  vfunc_keys_changed(): void;
  static get_default_icon_name(): string | null;
  static get_toplevels(): Gio.ListModel;
  static list_toplevels(): Widget[];
  static set_auto_startup_notification(setting: boolean): void;
  static set_default_icon_name(name: string): void;
  static set_interactive_debugging(enable: boolean): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
  get_display(): Gdk.Display;
  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}
export module WindowControls {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    decoration_layout: string;
    empty: boolean;
    side: PackType;
  }
}
export class WindowControls
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<WindowControls>;

  constructor(
    properties?: Partial<WindowControls.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<WindowControls.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get decoration_layout(): string;
  set decoration_layout(val: string);
  get empty(): boolean;
  get side(): PackType;
  set side(val: PackType);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](side: PackType): WindowControls;

  // Members

  get_decoration_layout(): string | null;
  get_empty(): boolean;
  get_side(): PackType;
  set_decoration_layout(layout?: string | null): void;
  set_side(side: PackType): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}
export module WindowGroup {
  export interface ConstructorProperties
    extends GObject.Object.ConstructorProperties {
    [key: string]: any;
  }
}
export class WindowGroup extends GObject.Object {
  static $gtype: GObject.GType<WindowGroup>;

  constructor(
    properties?: Partial<WindowGroup.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<WindowGroup.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Fields
  priv: WindowGroupPrivate;

  // Constructors

  static ["new"](): WindowGroup;

  // Members

  add_window(window: Window): void;
  list_windows(): Window[];
  remove_window(window: Window): void;
}
export module WindowHandle {
  export interface ConstructorProperties extends Widget.ConstructorProperties {
    [key: string]: any;
    child: Widget;
  }
}
export class WindowHandle
  extends Widget
  implements Accessible, Buildable, ConstraintTarget
{
  static $gtype: GObject.GType<WindowHandle>;

  constructor(
    properties?: Partial<WindowHandle.ConstructorProperties>,
    ...args: any[]
  );
  _init(
    properties?: Partial<WindowHandle.ConstructorProperties>,
    ...args: any[]
  ): void;

  // Properties
  get child(): Widget;
  set child(val: Widget);

  // Implemented Properties

  get accessible_role(): AccessibleRole;
  set accessible_role(val: AccessibleRole);

  // Constructors

  static ["new"](): WindowHandle;

  // Members

  get_child(): Widget | null;
  set_child(child?: Widget | null): void;

  // Implemented Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}

export class Bitset {
  static $gtype: GObject.GType<Bitset>;

  constructor();
  constructor(properties?: Partial<{}>);
  constructor(copy: Bitset);

  // Constructors
  static new_empty(): Bitset;
  static new_range(start: number, n_items: number): Bitset;

  // Members
  add(value: number): boolean;
  add_range(start: number, n_items: number): void;
  add_range_closed(first: number, last: number): void;
  add_rectangle(
    start: number,
    width: number,
    height: number,
    stride: number
  ): void;
  contains(value: number): boolean;
  copy(): Bitset;
  difference(other: Bitset): void;
  equals(other: Bitset): boolean;
  get_maximum(): number;
  get_minimum(): number;
  get_nth(nth: number): number;
  get_size(): number;
  get_size_in_range(first: number, last: number): number;
  intersect(other: Bitset): void;
  is_empty(): boolean;
  ref(): Bitset;
  remove(value: number): boolean;
  remove_all(): void;
  remove_range(start: number, n_items: number): void;
  remove_range_closed(first: number, last: number): void;
  remove_rectangle(
    start: number,
    width: number,
    height: number,
    stride: number
  ): void;
  shift_left(amount: number): void;
  shift_right(amount: number): void;
  splice(position: number, removed: number, added: number): void;
  subtract(other: Bitset): void;
  union(other: Bitset): void;
  unref(): void;
}

export class BitsetIter {
  static $gtype: GObject.GType<BitsetIter>;

  constructor(copy: BitsetIter);

  // Members
  get_value(): number;
  is_valid(): boolean;
  next(): [boolean, number];
  previous(): [boolean, number];
  static init_at(set: Bitset, target: number): [boolean, BitsetIter, number];
  static init_first(set: Bitset): [boolean, BitsetIter, number];
  static init_last(set: Bitset): [boolean, BitsetIter, number];
}

export class Border {
  static $gtype: GObject.GType<Border>;

  constructor();
  constructor(
    properties?: Partial<{
      left?: number;
      right?: number;
      top?: number;
      bottom?: number;
    }>
  );
  constructor(copy: Border);

  // Fields
  left: number;
  right: number;
  top: number;
  bottom: number;

  // Constructors
  static ["new"](): Border;

  // Members
  copy(): Border;
  free(): void;
}

export class BuildableParseContext {
  static $gtype: GObject.GType<BuildableParseContext>;

  constructor(copy: BuildableParseContext);

  // Members
  get_element(): string | null;
  get_element_stack(): string[];
  get_position(): [number, number];
  pop(): any | null;
  push(parser: BuildableParser, user_data?: any | null): void;
}

export class BuildableParser {
  static $gtype: GObject.GType<BuildableParser>;

  constructor(copy: BuildableParser);
}

export class ButtonPrivate {
  static $gtype: GObject.GType<ButtonPrivate>;

  constructor(copy: ButtonPrivate);
}

export class CellAreaContextPrivate {
  static $gtype: GObject.GType<CellAreaContextPrivate>;

  constructor(copy: CellAreaContextPrivate);
}

export class CellRendererClassPrivate {
  static $gtype: GObject.GType<CellRendererClassPrivate>;

  constructor(copy: CellRendererClassPrivate);
}

export class CellRendererPrivate {
  static $gtype: GObject.GType<CellRendererPrivate>;

  constructor(copy: CellRendererPrivate);
}

export class CssLocation {
  static $gtype: GObject.GType<CssLocation>;

  constructor(
    properties?: Partial<{
      bytes?: number;
      chars?: number;
      lines?: number;
      line_bytes?: number;
      line_chars?: number;
    }>
  );
  constructor(copy: CssLocation);

  // Fields
  bytes: number;
  chars: number;
  lines: number;
  line_bytes: number;
  line_chars: number;
}

export class CssProviderPrivate {
  static $gtype: GObject.GType<CssProviderPrivate>;

  constructor(copy: CssProviderPrivate);
}

export class CssSection {
  static $gtype: GObject.GType<CssSection>;

  constructor(file: Gio.File | null, start: CssLocation, end: CssLocation);
  constructor(copy: CssSection);

  // Constructors
  static ["new"](
    file: Gio.File | null,
    start: CssLocation,
    end: CssLocation
  ): CssSection;

  // Members
  get_end_location(): CssLocation;
  get_file(): Gio.File | null;
  get_parent(): CssSection | null;
  get_start_location(): CssLocation;
  print(string: GLib.String): void;
  ref(): CssSection;
  to_string(): string;
  unref(): void;
}

export class CssStyleChange {
  static $gtype: GObject.GType<CssStyleChange>;

  constructor(copy: CssStyleChange);
}

export class ExpressionWatch {
  static $gtype: GObject.GType<ExpressionWatch>;

  constructor(copy: ExpressionWatch);

  // Members
  evaluate(value: GObject.Value | any): boolean;
  ref(): ExpressionWatch;
  unref(): void;
  unwatch(): void;
}

export class IMContextSimplePrivate {
  static $gtype: GObject.GType<IMContextSimplePrivate>;

  constructor(copy: IMContextSimplePrivate);
}

export class IMMulticontextPrivate {
  static $gtype: GObject.GType<IMMulticontextPrivate>;

  constructor(copy: IMMulticontextPrivate);
}

export class ListStorePrivate {
  static $gtype: GObject.GType<ListStorePrivate>;

  constructor(copy: ListStorePrivate);
}

export class MountOperationPrivate {
  static $gtype: GObject.GType<MountOperationPrivate>;

  constructor(copy: MountOperationPrivate);
}

export class PadActionEntry {
  static $gtype: GObject.GType<PadActionEntry>;

  constructor(copy: PadActionEntry);

  // Fields
  type: PadActionType;
  index: number;
  mode: number;
  label: string;
  action_name: string;
}

export class PageRange {
  static $gtype: GObject.GType<PageRange>;

  constructor(
    properties?: Partial<{
      start?: number;
      end?: number;
    }>
  );
  constructor(copy: PageRange);

  // Fields
  start: number;
  end: number;
}

export class PaperSize {
  static $gtype: GObject.GType<PaperSize>;

  constructor(name?: string | null);
  constructor(copy: PaperSize);

  // Constructors
  static ["new"](name?: string | null): PaperSize;
  static new_custom(
    name: string,
    display_name: string,
    width: number,
    height: number,
    unit: Unit
  ): PaperSize;
  static new_from_gvariant(variant: GLib.Variant): PaperSize;
  static new_from_ipp(
    ipp_name: string,
    width: number,
    height: number
  ): PaperSize;
  static new_from_key_file(
    key_file: GLib.KeyFile,
    group_name?: string | null
  ): PaperSize;
  static new_from_ppd(
    ppd_name: string,
    ppd_display_name: string,
    width: number,
    height: number
  ): PaperSize;

  // Members
  copy(): PaperSize;
  free(): void;
  get_default_bottom_margin(unit: Unit): number;
  get_default_left_margin(unit: Unit): number;
  get_default_right_margin(unit: Unit): number;
  get_default_top_margin(unit: Unit): number;
  get_display_name(): string;
  get_height(unit: Unit): number;
  get_name(): string;
  get_ppd_name(): string;
  get_width(unit: Unit): number;
  is_custom(): boolean;
  is_equal(size2: PaperSize): boolean;
  is_ipp(): boolean;
  set_size(width: number, height: number, unit: Unit): void;
  to_gvariant(): GLib.Variant;
  to_key_file(key_file: GLib.KeyFile, group_name: string): void;
  static get_default(): string;
  static get_paper_sizes(include_custom: boolean): PaperSize[];
}

export class PrintBackend {
  static $gtype: GObject.GType<PrintBackend>;

  constructor(copy: PrintBackend);
}

export class PrintOperationPrivate {
  static $gtype: GObject.GType<PrintOperationPrivate>;

  constructor(copy: PrintOperationPrivate);
}

export class RecentData {
  static $gtype: GObject.GType<RecentData>;

  constructor(copy: RecentData);

  // Fields
  display_name: string;
  description: string;
  mime_type: string;
  app_name: string;
  app_exec: string;
  groups: string[];
  is_private: boolean;
}

export class RecentInfo {
  static $gtype: GObject.GType<RecentInfo>;

  constructor(copy: RecentInfo);

  // Members
  create_app_info(app_name?: string | null): Gio.AppInfo | null;
  exists(): boolean;
  get_added(): GLib.DateTime;
  get_age(): number;
  get_application_info(
    app_name: string
  ): [boolean, string, number, GLib.DateTime];
  get_applications(): string[];
  get_description(): string;
  get_display_name(): string;
  get_gicon(): Gio.Icon | null;
  get_groups(): string[];
  get_mime_type(): string;
  get_modified(): GLib.DateTime;
  get_private_hint(): boolean;
  get_short_name(): string;
  get_uri(): string;
  get_uri_display(): string | null;
  get_visited(): GLib.DateTime;
  has_application(app_name: string): boolean;
  has_group(group_name: string): boolean;
  is_local(): boolean;
  last_application(): string;
  match(info_b: RecentInfo): boolean;
  ref(): RecentInfo;
  unref(): void;
}

export class RecentManagerPrivate {
  static $gtype: GObject.GType<RecentManagerPrivate>;

  constructor(copy: RecentManagerPrivate);
}

export class RequestedSize {
  static $gtype: GObject.GType<RequestedSize>;

  constructor(
    properties?: Partial<{
      data?: any;
      minimum_size?: number;
      natural_size?: number;
    }>
  );
  constructor(copy: RequestedSize);

  // Fields
  data: any;
  minimum_size: number;
  natural_size: number;
}

export class Requisition {
  static $gtype: GObject.GType<Requisition>;

  constructor();
  constructor(
    properties?: Partial<{
      width?: number;
      height?: number;
    }>
  );
  constructor(copy: Requisition);

  // Fields
  width: number;
  height: number;

  // Constructors
  static ["new"](): Requisition;

  // Members
  copy(): Requisition;
  free(): void;
}

export class TextBufferPrivate {
  static $gtype: GObject.GType<TextBufferPrivate>;

  constructor(copy: TextBufferPrivate);
}

export class TextIter {
  static $gtype: GObject.GType<TextIter>;

  constructor(copy: TextIter);

  // Members
  assign(other: TextIter): void;
  backward_char(): boolean;
  backward_chars(count: number): boolean;
  backward_cursor_position(): boolean;
  backward_cursor_positions(count: number): boolean;
  backward_find_char(pred: TextCharPredicate, limit?: TextIter | null): boolean;
  backward_line(): boolean;
  backward_lines(count: number): boolean;
  backward_search(
    str: string,
    flags: TextSearchFlags,
    limit?: TextIter | null
  ): [boolean, TextIter | null, TextIter | null];
  backward_sentence_start(): boolean;
  backward_sentence_starts(count: number): boolean;
  backward_to_tag_toggle(tag?: TextTag | null): boolean;
  backward_visible_cursor_position(): boolean;
  backward_visible_cursor_positions(count: number): boolean;
  backward_visible_line(): boolean;
  backward_visible_lines(count: number): boolean;
  backward_visible_word_start(): boolean;
  backward_visible_word_starts(count: number): boolean;
  backward_word_start(): boolean;
  backward_word_starts(count: number): boolean;
  can_insert(default_editability: boolean): boolean;
  compare(rhs: TextIter): number;
  copy(): TextIter;
  editable(default_setting: boolean): boolean;
  ends_line(): boolean;
  ends_sentence(): boolean;
  ends_tag(tag?: TextTag | null): boolean;
  ends_word(): boolean;
  equal(rhs: TextIter): boolean;
  forward_char(): boolean;
  forward_chars(count: number): boolean;
  forward_cursor_position(): boolean;
  forward_cursor_positions(count: number): boolean;
  forward_find_char(pred: TextCharPredicate, limit?: TextIter | null): boolean;
  forward_line(): boolean;
  forward_lines(count: number): boolean;
  forward_search(
    str: string,
    flags: TextSearchFlags,
    limit?: TextIter | null
  ): [boolean, TextIter | null, TextIter | null];
  forward_sentence_end(): boolean;
  forward_sentence_ends(count: number): boolean;
  forward_to_end(): void;
  forward_to_line_end(): boolean;
  forward_to_tag_toggle(tag?: TextTag | null): boolean;
  forward_visible_cursor_position(): boolean;
  forward_visible_cursor_positions(count: number): boolean;
  forward_visible_line(): boolean;
  forward_visible_lines(count: number): boolean;
  forward_visible_word_end(): boolean;
  forward_visible_word_ends(count: number): boolean;
  forward_word_end(): boolean;
  forward_word_ends(count: number): boolean;
  free(): void;
  get_buffer(): TextBuffer;
  get_bytes_in_line(): number;
  get_char(): number;
  get_chars_in_line(): number;
  get_child_anchor(): TextChildAnchor | null;
  get_language(): Pango.Language;
  get_line(): number;
  get_line_index(): number;
  get_line_offset(): number;
  get_marks(): TextMark[];
  get_offset(): number;
  get_paintable(): Gdk.Paintable | null;
  get_slice(end: TextIter): string;
  get_tags(): TextTag[];
  get_text(end: TextIter): string;
  get_toggled_tags(toggled_on: boolean): TextTag[];
  get_visible_line_index(): number;
  get_visible_line_offset(): number;
  get_visible_slice(end: TextIter): string;
  get_visible_text(end: TextIter): string;
  has_tag(tag: TextTag): boolean;
  in_range(start: TextIter, end: TextIter): boolean;
  inside_sentence(): boolean;
  inside_word(): boolean;
  is_cursor_position(): boolean;
  is_end(): boolean;
  is_start(): boolean;
  order(second: TextIter): void;
  set_line(line_number: number): void;
  set_line_index(byte_on_line: number): void;
  set_line_offset(char_on_line: number): void;
  set_offset(char_offset: number): void;
  set_visible_line_index(byte_on_line: number): void;
  set_visible_line_offset(char_on_line: number): void;
  starts_line(): boolean;
  starts_sentence(): boolean;
  starts_tag(tag?: TextTag | null): boolean;
  starts_word(): boolean;
  toggles_tag(tag?: TextTag | null): boolean;
}

export class TextTagPrivate {
  static $gtype: GObject.GType<TextTagPrivate>;

  constructor(copy: TextTagPrivate);
}

export class TextViewPrivate {
  static $gtype: GObject.GType<TextViewPrivate>;

  constructor(copy: TextViewPrivate);
}

export class TreeIter {
  static $gtype: GObject.GType<TreeIter>;

  constructor(
    properties?: Partial<{
      stamp?: number;
      user_data?: any;
      user_data2?: any;
      user_data3?: any;
    }>
  );
  constructor(copy: TreeIter);

  // Fields
  stamp: number;
  user_data: any;
  user_data2: any;
  user_data3: any;

  // Members
  copy(): TreeIter;
  free(): void;
}

export class TreeModelFilterPrivate {
  static $gtype: GObject.GType<TreeModelFilterPrivate>;

  constructor(copy: TreeModelFilterPrivate);
}

export class TreeModelSortPrivate {
  static $gtype: GObject.GType<TreeModelSortPrivate>;

  constructor(copy: TreeModelSortPrivate);
}

export class TreePath {
  static $gtype: GObject.GType<TreePath>;

  constructor();
  constructor(properties?: Partial<{}>);
  constructor(copy: TreePath);

  // Constructors
  static ["new"](): TreePath;
  static new_first(): TreePath;
  static new_from_indices(indices: number[]): TreePath;
  static new_from_string(path: string): TreePath;

  // Members
  append_index(index_: number): void;
  compare(b: TreePath): number;
  copy(): TreePath;
  down(): void;
  free(): void;
  get_depth(): number;
  get_indices(): number[] | null;
  is_ancestor(descendant: TreePath): boolean;
  is_descendant(ancestor: TreePath): boolean;
  next(): void;
  prepend_index(index_: number): void;
  prev(): boolean;
  to_string(): string | null;
  up(): boolean;
}

export class TreeRowReference {
  static $gtype: GObject.GType<TreeRowReference>;

  constructor(model: TreeModel, path: TreePath);
  constructor(copy: TreeRowReference);

  // Constructors
  static ["new"](model: TreeModel, path: TreePath): TreeRowReference;
  static new_proxy(
    proxy: GObject.Object,
    model: TreeModel,
    path: TreePath
  ): TreeRowReference;

  // Members
  copy(): TreeRowReference;
  free(): void;
  get_model(): TreeModel;
  get_path(): TreePath | null;
  valid(): boolean;
  static deleted(proxy: GObject.Object, path: TreePath): void;
  static inserted(proxy: GObject.Object, path: TreePath): void;
}

export class TreeStorePrivate {
  static $gtype: GObject.GType<TreeStorePrivate>;

  constructor(copy: TreeStorePrivate);
}

export class WidgetClassPrivate {
  static $gtype: GObject.GType<WidgetClassPrivate>;

  constructor(copy: WidgetClassPrivate);
}

export class WidgetPrivate {
  static $gtype: GObject.GType<WidgetPrivate>;

  constructor(copy: WidgetPrivate);
}

export class WindowGroupPrivate {
  static $gtype: GObject.GType<WindowGroupPrivate>;

  constructor(copy: WindowGroupPrivate);
}

export interface AccessibleNamespace {
  $gtype: GObject.GType<Accessible>;
  prototype: AccessiblePrototype;
}
export type Accessible = AccessiblePrototype;
export interface AccessiblePrototype extends GObject.Object {
  // Properties
  accessible_role: AccessibleRole;

  // Members

  get_accessible_parent(): Accessible | null;
  get_accessible_role(): AccessibleRole;
  get_at_context(): ATContext;
  get_bounds(): [boolean, number, number, number, number];
  get_first_accessible_child(): Accessible | null;
  get_next_accessible_sibling(): Accessible | null;
  get_platform_state(state: AccessiblePlatformState): boolean;
  reset_property(property: AccessibleProperty): void;
  reset_relation(relation: AccessibleRelation): void;
  reset_state(state: AccessibleState): void;
  set_accessible_parent(
    parent?: Accessible | null,
    next_sibling?: Accessible | null
  ): void;
  update_next_accessible_sibling(new_sibling?: Accessible | null): void;
  update_property(
    properties: AccessibleProperty[],
    values: GObject.Value[]
  ): void;
  update_relation(
    relations: AccessibleRelation[],
    values: GObject.Value[]
  ): void;
  update_state(states: AccessibleState[], values: GObject.Value[]): void;
  vfunc_get_accessible_parent(): Accessible | null;
  vfunc_get_at_context(): ATContext | null;
  vfunc_get_bounds(): [boolean, number, number, number, number];
  vfunc_get_first_accessible_child(): Accessible | null;
  vfunc_get_next_accessible_sibling(): Accessible | null;
  vfunc_get_platform_state(state: AccessiblePlatformState): boolean;
}

export const Accessible: AccessibleNamespace;

export interface AccessibleRangeNamespace {
  $gtype: GObject.GType<AccessibleRange>;
  prototype: AccessibleRangePrototype;
}
export type AccessibleRange = AccessibleRangePrototype;
export interface AccessibleRangePrototype extends Accessible {
  // Members

  vfunc_set_current_value(value: number): boolean;
}

export const AccessibleRange: AccessibleRangeNamespace;

export interface ActionableNamespace {
  $gtype: GObject.GType<Actionable>;
  prototype: ActionablePrototype;
}
export type Actionable = ActionablePrototype;
export interface ActionablePrototype extends Widget {
  // Properties
  action_name: string;
  action_target: GLib.Variant;

  // Members

  get_action_name(): string | null;
  get_action_target_value(): GLib.Variant | null;
  set_action_name(action_name?: string | null): void;
  set_action_target_value(target_value?: GLib.Variant | null): void;
  set_detailed_action_name(detailed_action_name: string): void;
  vfunc_get_action_name(): string | null;
  vfunc_get_action_target_value(): GLib.Variant | null;
  vfunc_set_action_name(action_name?: string | null): void;
  vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}

export const Actionable: ActionableNamespace;

export interface AppChooserNamespace {
  $gtype: GObject.GType<AppChooser>;
  prototype: AppChooserPrototype;
}
export type AppChooser = AppChooserPrototype;
export interface AppChooserPrototype extends Widget {
  // Properties
  readonly content_type: string;

  // Members

  get_app_info(): Gio.AppInfo | null;
  get_content_type(): string;
  refresh(): void;
}

export const AppChooser: AppChooserNamespace;

export interface BuildableNamespace {
  $gtype: GObject.GType<Buildable>;
  prototype: BuildablePrototype;
}
export type Buildable = BuildablePrototype;
export interface BuildablePrototype extends GObject.Object {
  // Members

  get_buildable_id(): string | null;
  vfunc_add_child(
    builder: Builder,
    child: GObject.Object,
    type?: string | null
  ): void;
  vfunc_custom_finished(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_end(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string,
    data?: any | null
  ): void;
  vfunc_custom_tag_start(
    builder: Builder,
    child: GObject.Object | null,
    tagname: string
  ): [boolean, BuildableParser, any];
  vfunc_get_id(): string;
  vfunc_get_internal_child<T = GObject.Object>(
    builder: Builder,
    childname: string
  ): T;
  vfunc_parser_finished(builder: Builder): void;
  vfunc_set_buildable_property(
    builder: Builder,
    name: string,
    value: GObject.Value | any
  ): void;
  vfunc_set_id(id: string): void;
}

export const Buildable: BuildableNamespace;

export interface BuilderScopeNamespace {
  $gtype: GObject.GType<BuilderScope>;
  prototype: BuilderScopePrototype;
}
export type BuilderScope = BuilderScopePrototype;
export interface BuilderScopePrototype extends GObject.Object {
  // Members

  vfunc_create_closure(
    builder: Builder,
    function_name: string,
    flags: BuilderClosureFlags,
    object: GObject.Object
  ): GObject.Closure;
  vfunc_get_type_from_function(
    builder: Builder,
    function_name: string
  ): GObject.GType;
  vfunc_get_type_from_name(builder: Builder, type_name: string): GObject.GType;
}

export const BuilderScope: BuilderScopeNamespace;

export interface CellEditableNamespace {
  $gtype: GObject.GType<CellEditable>;
  prototype: CellEditablePrototype;
}
export type CellEditable = CellEditablePrototype;
export interface CellEditablePrototype extends Widget {
  // Properties
  editing_canceled: boolean;

  // Members

  editing_done(): void;
  remove_widget(): void;
  start_editing(event?: Gdk.Event | null): void;
  vfunc_editing_done(): void;
  vfunc_remove_widget(): void;
  vfunc_start_editing(event?: Gdk.Event | null): void;
}

export const CellEditable: CellEditableNamespace;

export interface CellLayoutNamespace {
  $gtype: GObject.GType<CellLayout>;
  prototype: CellLayoutPrototype;
}
export type CellLayout = CellLayoutPrototype;
export interface CellLayoutPrototype extends GObject.Object {
  // Members

  add_attribute(cell: CellRenderer, attribute: string, column: number): void;
  clear(): void;
  clear_attributes(cell: CellRenderer): void;
  get_area(): CellArea | null;
  get_cells(): CellRenderer[];
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  reorder(cell: CellRenderer, position: number): void;
  set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
  vfunc_add_attribute(
    cell: CellRenderer,
    attribute: string,
    column: number
  ): void;
  vfunc_clear(): void;
  vfunc_clear_attributes(cell: CellRenderer): void;
  vfunc_get_area(): CellArea | null;
  vfunc_get_cells(): CellRenderer[];
  vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
  vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
  vfunc_reorder(cell: CellRenderer, position: number): void;
  vfunc_set_cell_data_func(
    cell: CellRenderer,
    func?: CellLayoutDataFunc | null
  ): void;
}

export const CellLayout: CellLayoutNamespace;

export interface ColorChooserNamespace {
  $gtype: GObject.GType<ColorChooser>;
  prototype: ColorChooserPrototype;
}
export type ColorChooser = ColorChooserPrototype;
export interface ColorChooserPrototype extends GObject.Object {
  // Properties
  rgba: Gdk.RGBA;
  use_alpha: boolean;

  // Members

  add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  get_rgba(): Gdk.RGBA;
  get_use_alpha(): boolean;
  set_rgba(color: Gdk.RGBA): void;
  set_use_alpha(use_alpha: boolean): void;
  vfunc_add_palette(
    orientation: Orientation,
    colors_per_line: number,
    colors?: Gdk.RGBA[] | null
  ): void;
  vfunc_color_activated(color: Gdk.RGBA): void;
  vfunc_get_rgba(): Gdk.RGBA;
  vfunc_set_rgba(color: Gdk.RGBA): void;
}

export const ColorChooser: ColorChooserNamespace;

export interface ConstraintTargetNamespace {
  $gtype: GObject.GType<ConstraintTarget>;
  prototype: ConstraintTargetPrototype;
}
export type ConstraintTarget = ConstraintTargetPrototype;
export interface ConstraintTargetPrototype extends GObject.Object {}

export const ConstraintTarget: ConstraintTargetNamespace;

export interface EditableNamespace {
  $gtype: GObject.GType<Editable>;
  prototype: EditablePrototype;

  delegate_get_property(
    object: GObject.Object,
    prop_id: number,
    value: GObject.Value | any,
    pspec: GObject.ParamSpec
  ): boolean;
  delegate_set_property(
    object: GObject.Object,
    prop_id: number,
    value: GObject.Value | any,
    pspec: GObject.ParamSpec
  ): boolean;
  install_properties(object_class: GObject.Object, first_prop: number): number;
  // Conflicted with GObject.Object.install_properties
  install_properties(...args: never[]): any;
}
export type Editable = EditablePrototype;
export interface EditablePrototype extends Widget {
  // Properties
  readonly cursor_position: number;
  editable: boolean;
  enable_undo: boolean;
  max_width_chars: number;
  readonly selection_bound: number;
  text: string;
  width_chars: number;
  xalign: number;

  // Members

  delegate_get_accessible_platform_state(
    state: AccessiblePlatformState
  ): boolean;
  delete_selection(): void;
  delete_text(start_pos: number, end_pos: number): void;
  finish_delegate(): void;
  get_alignment(): number;
  get_chars(start_pos: number, end_pos: number): string;
  get_delegate(): Editable | null;
  get_editable(): boolean;
  get_enable_undo(): boolean;
  get_max_width_chars(): number;
  get_position(): number;
  get_selection_bounds(): [boolean, number, number];
  get_text(): string;
  get_width_chars(): number;
  init_delegate(): void;
  insert_text(text: string, length: number, position: number): number;
  select_region(start_pos: number, end_pos: number): void;
  set_alignment(xalign: number): void;
  set_editable(is_editable: boolean): void;
  set_enable_undo(enable_undo: boolean): void;
  set_max_width_chars(n_chars: number): void;
  set_position(position: number): void;
  set_text(text: string): void;
  set_width_chars(n_chars: number): void;
  vfunc_changed(): void;
  vfunc_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_delete_text(start_pos: number, end_pos: number): void;
  vfunc_do_insert_text(text: string, length: number, position: number): number;
  vfunc_get_delegate(): Editable | null;
  vfunc_get_selection_bounds(): [boolean, number, number];
  vfunc_get_text(): string;
  vfunc_insert_text(text: string, length: number, position: number): number;
  vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export const Editable: EditableNamespace;

export interface FileChooserNamespace {
  $gtype: GObject.GType<FileChooser>;
  prototype: FileChooserPrototype;
}
export type FileChooser = FileChooserPrototype;
export interface FileChooserPrototype extends GObject.Object {
  // Properties
  action: FileChooserAction;
  create_folders: boolean;
  filter: FileFilter;
  readonly filters: Gio.ListModel;
  select_multiple: boolean;
  readonly shortcut_folders: Gio.ListModel;

  // Members

  add_choice(
    id: string,
    label: string,
    options?: string[] | null,
    option_labels?: string[] | null
  ): void;
  add_filter(filter: FileFilter): void;
  add_shortcut_folder(folder: Gio.File): boolean;
  get_action(): FileChooserAction;
  get_choice(id: string): string | null;
  get_create_folders(): boolean;
  get_current_folder(): Gio.File | null;
  get_current_name(): string | null;
  get_file(): Gio.File | null;
  get_files(): Gio.ListModel;
  get_filter(): FileFilter | null;
  get_filters(): Gio.ListModel;
  get_select_multiple(): boolean;
  get_shortcut_folders(): Gio.ListModel;
  remove_choice(id: string): void;
  remove_filter(filter: FileFilter): void;
  remove_shortcut_folder(folder: Gio.File): boolean;
  set_action(action: FileChooserAction): void;
  set_choice(id: string, option: string): void;
  set_create_folders(create_folders: boolean): void;
  set_current_folder(file?: Gio.File | null): boolean;
  set_current_name(name: string): void;
  set_file(file: Gio.File): boolean;
  set_filter(filter: FileFilter): void;
  set_select_multiple(select_multiple: boolean): void;
}

export const FileChooser: FileChooserNamespace;

export interface FontChooserNamespace {
  $gtype: GObject.GType<FontChooser>;
  prototype: FontChooserPrototype;
}
export type FontChooser = FontChooserPrototype;
export interface FontChooserPrototype extends GObject.Object {
  // Properties
  font: string;
  font_desc: Pango.FontDescription;
  readonly font_features: string;
  language: string;
  level: FontChooserLevel;
  preview_text: string;
  show_preview_entry: boolean;

  // Members

  get_font(): string | null;
  get_font_desc(): Pango.FontDescription | null;
  get_font_face(): Pango.FontFace | null;
  get_font_family(): Pango.FontFamily | null;
  get_font_features(): string;
  get_font_map(): Pango.FontMap | null;
  get_font_size(): number;
  get_language(): string;
  get_level(): FontChooserLevel;
  get_preview_text(): string;
  get_show_preview_entry(): boolean;
  set_filter_func(filter?: FontFilterFunc | null): void;
  set_font(fontname: string): void;
  set_font_desc(font_desc: Pango.FontDescription): void;
  set_font_map(fontmap?: Pango.FontMap | null): void;
  set_language(language: string): void;
  set_level(level: FontChooserLevel): void;
  set_preview_text(text: string): void;
  set_show_preview_entry(show_preview_entry: boolean): void;
  vfunc_font_activated(fontname: string): void;
  vfunc_get_font_face(): Pango.FontFace | null;
  vfunc_get_font_family(): Pango.FontFamily | null;
  vfunc_get_font_map(): Pango.FontMap | null;
  vfunc_get_font_size(): number;
  vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
  vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}

export const FontChooser: FontChooserNamespace;

export interface NativeNamespace {
  $gtype: GObject.GType<Native>;
  prototype: NativePrototype;

  get_for_surface(surface: Gdk.Surface): Native | null;
}
export type Native = NativePrototype;
export interface NativePrototype extends Widget {
  // Members

  get_renderer(): Gsk.Renderer;
  get_surface(): Gdk.Surface;
  get_surface_transform(): [number, number];
  realize(): void;
  unrealize(): void;
}

export const Native: NativeNamespace;

export interface OrientableNamespace {
  $gtype: GObject.GType<Orientable>;
  prototype: OrientablePrototype;
}
export type Orientable = OrientablePrototype;
export interface OrientablePrototype extends GObject.Object {
  // Properties
  orientation: Orientation;

  // Members

  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}

export const Orientable: OrientableNamespace;

export interface PrintOperationPreviewNamespace {
  $gtype: GObject.GType<PrintOperationPreview>;
  prototype: PrintOperationPreviewPrototype;
}
export type PrintOperationPreview = PrintOperationPreviewPrototype;
export interface PrintOperationPreviewPrototype extends GObject.Object {
  // Members

  end_preview(): void;
  is_selected(page_nr: number): boolean;
  render_page(page_nr: number): void;
  vfunc_end_preview(): void;
  vfunc_got_page_size(context: PrintContext, page_setup: PageSetup): void;
  vfunc_is_selected(page_nr: number): boolean;
  vfunc_ready(context: PrintContext): void;
  vfunc_render_page(page_nr: number): void;
}

export const PrintOperationPreview: PrintOperationPreviewNamespace;

export interface RootNamespace {
  $gtype: GObject.GType<Root>;
  prototype: RootPrototype;
}
export type Root = RootPrototype;
export interface RootPrototype extends Native {
  // Members

  get_display(): Gdk.Display;
  get_focus(): Widget | null;
  set_focus(focus?: Widget | null): void;
}

export const Root: RootNamespace;

export interface ScrollableNamespace {
  $gtype: GObject.GType<Scrollable>;
  prototype: ScrollablePrototype;
}
export type Scrollable = ScrollablePrototype;
export interface ScrollablePrototype extends GObject.Object {
  // Properties
  hadjustment: Adjustment;
  hscroll_policy: ScrollablePolicy;
  vadjustment: Adjustment;
  vscroll_policy: ScrollablePolicy;

  // Members

  get_border(): [boolean, Border];
  get_hadjustment(): Adjustment | null;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment | null;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment?: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment?: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
  vfunc_get_border(): [boolean, Border];
}

export const Scrollable: ScrollableNamespace;

export interface SelectionModelNamespace {
  $gtype: GObject.GType<SelectionModel>;
  prototype: SelectionModelPrototype;
}
export type SelectionModel<A extends GObject.Object = GObject.Object> =
  SelectionModelPrototype<A>;
export interface SelectionModelPrototype<
  A extends GObject.Object = GObject.Object
> extends Gio.ListModel<A> {
  // Members

  get_selection(): Bitset;
  get_selection_in_range(position: number, n_items: number): Bitset;
  is_selected(position: number): boolean;
  select_all(): boolean;
  select_item(position: number, unselect_rest: boolean): boolean;
  select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  selection_changed(position: number, n_items: number): void;
  set_selection(selected: Bitset, mask: Bitset): boolean;
  unselect_all(): boolean;
  unselect_item(position: number): boolean;
  unselect_range(position: number, n_items: number): boolean;
  vfunc_get_selection_in_range(position: number, n_items: number): Bitset;
  vfunc_is_selected(position: number): boolean;
  vfunc_select_all(): boolean;
  vfunc_select_item(position: number, unselect_rest: boolean): boolean;
  vfunc_select_range(
    position: number,
    n_items: number,
    unselect_rest: boolean
  ): boolean;
  vfunc_set_selection(selected: Bitset, mask: Bitset): boolean;
  vfunc_unselect_all(): boolean;
  vfunc_unselect_item(position: number): boolean;
  vfunc_unselect_range(position: number, n_items: number): boolean;
}

export const SelectionModel: SelectionModelNamespace;

export interface ShortcutManagerNamespace {
  $gtype: GObject.GType<ShortcutManager>;
  prototype: ShortcutManagerPrototype;
}
export type ShortcutManager = ShortcutManagerPrototype;
export interface ShortcutManagerPrototype extends GObject.Object {
  // Members

  vfunc_add_controller(controller: ShortcutController): void;
  vfunc_remove_controller(controller: ShortcutController): void;
}

export const ShortcutManager: ShortcutManagerNamespace;

export interface StyleProviderNamespace {
  $gtype: GObject.GType<StyleProvider>;
  prototype: StyleProviderPrototype;
}
export type StyleProvider = StyleProviderPrototype;
export interface StyleProviderPrototype extends GObject.Object {}

export const StyleProvider: StyleProviderNamespace;

export interface SymbolicPaintableNamespace {
  $gtype: GObject.GType<SymbolicPaintable>;
  prototype: SymbolicPaintablePrototype;
}
export type SymbolicPaintable = SymbolicPaintablePrototype;
export interface SymbolicPaintablePrototype extends Gdk.Paintable {
  // Members

  snapshot_symbolic(
    snapshot: Gdk.Snapshot,
    width: number,
    height: number,
    colors: Gdk.RGBA[]
  ): void;
  vfunc_snapshot_symbolic(
    snapshot: Gdk.Snapshot,
    width: number,
    height: number,
    colors: Gdk.RGBA[]
  ): void;
}

export const SymbolicPaintable: SymbolicPaintableNamespace;

export interface TreeDragDestNamespace {
  $gtype: GObject.GType<TreeDragDest>;
  prototype: TreeDragDestPrototype;
}
export type TreeDragDest = TreeDragDestPrototype;
export interface TreeDragDestPrototype extends GObject.Object {
  // Members

  drag_data_received(dest: TreePath, value: GObject.Value | any): boolean;
  row_drop_possible(dest_path: TreePath, value: GObject.Value | any): boolean;
  vfunc_drag_data_received(dest: TreePath, value: GObject.Value | any): boolean;
  vfunc_row_drop_possible(
    dest_path: TreePath,
    value: GObject.Value | any
  ): boolean;
}

export const TreeDragDest: TreeDragDestNamespace;

export interface TreeDragSourceNamespace {
  $gtype: GObject.GType<TreeDragSource>;
  prototype: TreeDragSourcePrototype;
}
export type TreeDragSource = TreeDragSourcePrototype;
export interface TreeDragSourcePrototype extends GObject.Object {
  // Members

  drag_data_delete(path: TreePath): boolean;
  drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  row_draggable(path: TreePath): boolean;
  vfunc_drag_data_delete(path: TreePath): boolean;
  vfunc_drag_data_get(path: TreePath): Gdk.ContentProvider | null;
  vfunc_row_draggable(path: TreePath): boolean;
}

export const TreeDragSource: TreeDragSourceNamespace;

export interface TreeModelNamespace {
  $gtype: GObject.GType<TreeModel>;
  prototype: TreeModelPrototype;
}
export type TreeModel = TreeModelPrototype;
export interface TreeModelPrototype extends GObject.Object {
  // Members

  filter_new(root?: TreePath | null): TreeModel;
  foreach(func: TreeModelForeachFunc): void;
  get_column_type(index_: number): GObject.GType;
  get_flags(): TreeModelFlags;
  get_iter(path: TreePath): [boolean, TreeIter];
  get_iter_first(): [boolean, TreeIter];
  get_iter_from_string(path_string: string): [boolean, TreeIter];
  get_n_columns(): number;
  get_path(iter: TreeIter): TreePath;
  get_string_from_iter(iter: TreeIter): string | null;
  get_value(iter: TreeIter, column: number): unknown;
  iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  iter_has_child(iter: TreeIter): boolean;
  iter_n_children(iter?: TreeIter | null): number;
  iter_next(iter: TreeIter): boolean;
  iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  iter_parent(child: TreeIter): [boolean, TreeIter];
  iter_previous(iter: TreeIter): boolean;
  ref_node(iter: TreeIter): void;
  row_changed(path: TreePath, iter: TreeIter): void;
  row_deleted(path: TreePath): void;
  row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  row_inserted(path: TreePath, iter: TreeIter): void;
  rows_reordered(
    path: TreePath,
    iter: TreeIter | null,
    new_order: number[]
  ): void;
  unref_node(iter: TreeIter): void;
  vfunc_get_column_type(index_: number): GObject.GType;
  vfunc_get_flags(): TreeModelFlags;
  vfunc_get_iter(path: TreePath): [boolean, TreeIter];
  vfunc_get_n_columns(): number;
  vfunc_get_path(iter: TreeIter): TreePath;
  vfunc_get_value(iter: TreeIter, column: number): unknown;
  vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
  vfunc_iter_has_child(iter: TreeIter): boolean;
  vfunc_iter_n_children(iter?: TreeIter | null): number;
  vfunc_iter_next(iter: TreeIter): boolean;
  vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
  vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
  vfunc_iter_previous(iter: TreeIter): boolean;
  vfunc_ref_node(iter: TreeIter): void;
  vfunc_row_changed(path: TreePath, iter: TreeIter): void;
  vfunc_row_deleted(path: TreePath): void;
  vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
  vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
  vfunc_unref_node(iter: TreeIter): void;
}

export const TreeModel: TreeModelNamespace;

export interface TreeSortableNamespace {
  $gtype: GObject.GType<TreeSortable>;
  prototype: TreeSortablePrototype;
}
export type TreeSortable = TreeSortablePrototype;
export interface TreeSortablePrototype extends TreeModel {
  // Members

  get_sort_column_id(): [boolean, number, SortType];
  has_default_sort_func(): boolean;
  set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  set_sort_column_id(sort_column_id: number, order: SortType): void;
  set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  sort_column_changed(): void;
  vfunc_get_sort_column_id(): [boolean, number, SortType];
  vfunc_has_default_sort_func(): boolean;
  vfunc_set_default_sort_func(
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
  vfunc_set_sort_func(
    sort_column_id: number,
    sort_func: TreeIterCompareFunc,
    destroy?: GLib.DestroyNotify | null
  ): void;
  vfunc_sort_column_changed(): void;
}

export const TreeSortable: TreeSortableNamespace;

export type Allocation = Gdk.Rectangle;
