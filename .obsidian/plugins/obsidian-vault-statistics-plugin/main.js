'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    return Formatter;
}());
/**
 * {@link DecimalUnitFormatter} provides an implementation of {@link Formatter}
 * that outputs a integers in a standard decimal format with grouped thousands.
 */
var DecimalUnitFormatter = /** @class */ (function (_super) {
    __extends(DecimalUnitFormatter, _super);
    /**
     * @param unit the unit of the value being formatted.
     * @constructor
     */
    function DecimalUnitFormatter(unit) {
        var _this = _super.call(this) || this;
        _this.unit = unit;
        _this.numberFormat = Intl.NumberFormat('en-US', { style: 'decimal' });
        return _this;
    }
    DecimalUnitFormatter.prototype.format = function (value) {
        return "".concat(this.numberFormat.format(value), " ").concat(this.unit);
    };
    return DecimalUnitFormatter;
}(Formatter));
/**
 * {@link ScalingUnitFormatter}
 */
var ScalingUnitFormatter = /** @class */ (function (_super) {
    __extends(ScalingUnitFormatter, _super);
    /**
     * @param numberFormat An instance of {@link Intl.NumberFormat} to use to
     * format the scaled value.
     */
    function ScalingUnitFormatter(numberFormat) {
        var _this = _super.call(this) || this;
        _this.numberFormat = numberFormat;
        return _this;
    }
    ScalingUnitFormatter.prototype.format = function (value) {
        var _a = this.scale(value), scaledValue = _a[0], scaledUnit = _a[1];
        return "".concat(this.numberFormat.format(scaledValue), " ").concat(scaledUnit);
    };
    return ScalingUnitFormatter;
}(Formatter));
/**
 * {@link BytesFormatter} formats values that represent a size in bytes as a
 * value in bytes, kilobytes, megabytes, gigabytes, etc.
 */
var BytesFormatter = /** @class */ (function (_super) {
    __extends(BytesFormatter, _super);
    function BytesFormatter() {
        return _super.call(this, Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })) || this;
    }
    BytesFormatter.prototype.scale = function (value) {
        var units = ["bytes", "KB", "MB", "GB", "TB", "PB"];
        while (value > 1024 && units.length > 0) {
            value = value / 1024;
            units.shift();
        }
        return [value, units[0]];
    };
    return BytesFormatter;
}(ScalingUnitFormatter));

var VaultMetrics = /** @class */ (function (_super) {
    __extends(VaultMetrics, _super);
    function VaultMetrics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.files = 0;
        _this.notes = 0;
        _this.attachments = 0;
        _this.size = 0;
        _this.links = 0;
        _this.words = 0;
        return _this;
    }
    VaultMetrics.prototype.reset = function () {
        this.files = 0;
        this.notes = 0;
        this.attachments = 0;
        this.size = 0;
        this.links = 0;
        this.words = 0;
    };
    VaultMetrics.prototype.dec = function (metrics) {
        this.files -= (metrics === null || metrics === void 0 ? void 0 : metrics.files) || 0;
        this.notes -= (metrics === null || metrics === void 0 ? void 0 : metrics.notes) || 0;
        this.attachments -= (metrics === null || metrics === void 0 ? void 0 : metrics.attachments) || 0;
        this.size -= (metrics === null || metrics === void 0 ? void 0 : metrics.size) || 0;
        this.links -= (metrics === null || metrics === void 0 ? void 0 : metrics.links) || 0;
        this.words -= (metrics === null || metrics === void 0 ? void 0 : metrics.words) || 0;
        this.trigger("updated");
    };
    VaultMetrics.prototype.inc = function (metrics) {
        this.files += (metrics === null || metrics === void 0 ? void 0 : metrics.files) || 0;
        this.notes += (metrics === null || metrics === void 0 ? void 0 : metrics.notes) || 0;
        this.attachments += (metrics === null || metrics === void 0 ? void 0 : metrics.attachments) || 0;
        this.size += (metrics === null || metrics === void 0 ? void 0 : metrics.size) || 0;
        this.links += (metrics === null || metrics === void 0 ? void 0 : metrics.links) || 0;
        this.words += (metrics === null || metrics === void 0 ? void 0 : metrics.words) || 0;
        this.trigger("updated");
    };
    VaultMetrics.prototype.on = function (name, callback, ctx) {
        return _super.prototype.on.call(this, "updated", callback, ctx);
    };
    return VaultMetrics;
}(obsidian.Events));

/**
 * The {@link UnitTokenizer} is a constant tokenizer that always returns an
 * empty list.
 */
var UnitTokenizer = /** @class */ (function () {
    function UnitTokenizer() {
    }
    UnitTokenizer.prototype.tokenize = function (_) {
        return [];
    };
    return UnitTokenizer;
}());
/**
 * {@link MarkdownTokenizer} understands how to tokenize markdown text into word
 * tokens.
 */
var MarkdownTokenizer = /** @class */ (function () {
    function MarkdownTokenizer() {
    }
    MarkdownTokenizer.prototype.isNonWord = function (token) {
        var NON_WORDS = /^\W+$/;
        return !!NON_WORDS.exec(token);
    };
    MarkdownTokenizer.prototype.isNumber = function (token) {
        var NUMBER = /^\d+(\.\d+)?$/;
        return !!NUMBER.exec(token);
    };
    MarkdownTokenizer.prototype.isCodeBlockHeader = function (token) {
        var CODE_BLOCK_HEADER = /^```\w+$/;
        return !!CODE_BLOCK_HEADER.exec(token);
    };
    MarkdownTokenizer.prototype.stripHighlights = function (token) {
        var STRIP_HIGHLIGHTS = /^(==)?(.*?)(==)?$/;
        return STRIP_HIGHLIGHTS.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripFormatting = function (token) {
        var STRIP_FORMATTING = /^(_+|\*+)?(.*?)(_+|\*+)?$/;
        return STRIP_FORMATTING.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripPunctuation = function (token) {
        var STRIP_PUNCTUATION = /^(`|\.|:|"|,|!|\?)?(.*?)(`|\.|:|"|,|!|\?)?$/;
        return STRIP_PUNCTUATION.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripWikiLinks = function (token) {
        var STRIP_WIKI_LINKS = /^(\[\[)?(.*?)(\]\])?$/;
        return STRIP_WIKI_LINKS.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripAll = function (token) {
        if (token === "") {
            return token;
        }
        var isFixedPoint = false;
        while (!isFixedPoint) {
            var prev = token;
            token = [token].
                map(this.stripHighlights).
                map(this.stripFormatting).
                map(this.stripPunctuation).
                map(this.stripWikiLinks)[0];
            isFixedPoint = isFixedPoint || prev === token;
        }
        return token;
    };
    MarkdownTokenizer.prototype.tokenize = function (content) {
        var _this = this;
        if (content.trim() === "") {
            return [];
        }
        else {
            var WORD_BOUNDARY = /[ \n\r\t\"\|,\(\)\[\]/]+/;
            var words = content.
                split(WORD_BOUNDARY).
                filter(function (token) { return !_this.isNonWord(token); }).
                filter(function (token) { return !_this.isNumber(token); }).
                filter(function (token) { return !_this.isCodeBlockHeader(token); }).
                map(function (token) { return _this.stripAll(token); }).
                filter(function (token) { return token.length > 0; });
            return words;
        }
    };
    return MarkdownTokenizer;
}());
var UNIT_TOKENIZER = new UnitTokenizer();
var MARKDOWN_TOKENIZER = new MarkdownTokenizer();

var FileType;
(function (FileType) {
    FileType[FileType["Unknown"] = 0] = "Unknown";
    FileType[FileType["Note"] = 1] = "Note";
    FileType[FileType["Attachment"] = 2] = "Attachment";
})(FileType || (FileType = {}));
var VaultMetricsCollector = /** @class */ (function () {
    function VaultMetricsCollector(owner) {
        this.data = new Map();
        this.backlog = new Array();
        this.vaultMetrics = new VaultMetrics();
        this.owner = owner;
    }
    VaultMetricsCollector.prototype.setVault = function (vault) {
        this.vault = vault;
        return this;
    };
    VaultMetricsCollector.prototype.setMetadataCache = function (metadataCache) {
        this.metadataCache = metadataCache;
        return this;
    };
    VaultMetricsCollector.prototype.setVaultMetrics = function (vaultMetrics) {
        this.vaultMetrics = vaultMetrics;
        return this;
    };
    VaultMetricsCollector.prototype.start = function () {
        var _this = this;
        var _a;
        this.owner.registerEvent(this.vault.on("create", function (file) { _this.onfilecreated(file); }));
        this.owner.registerEvent(this.vault.on("modify", function (file) { _this.onfilemodified(file); }));
        this.owner.registerEvent(this.vault.on("delete", function (file) { _this.onfiledeleted(file); }));
        this.owner.registerEvent(this.vault.on("rename", function (file, oldPath) { _this.onfilerenamed(file, oldPath); }));
        this.owner.registerEvent(this.metadataCache.on("resolve", function (file) { _this.onfilemodified(file); }));
        this.owner.registerEvent(this.metadataCache.on("changed", function (file) { _this.onfilemodified(file); }));
        this.data.clear();
        this.backlog = new Array();
        (_a = this.vaultMetrics) === null || _a === void 0 ? void 0 : _a.reset();
        this.vault.getFiles().forEach(function (file) {
            if (!(file instanceof obsidian.TFolder)) {
                _this.push(file);
            }
        });
        this.owner.registerInterval(+setInterval(function () { _this.processBacklog(); }, 2000));
        return this;
    };
    VaultMetricsCollector.prototype.push = function (fileOrPath) {
        if (fileOrPath instanceof obsidian.TFolder) {
            return;
        }
        var path = (fileOrPath instanceof obsidian.TFile) ? fileOrPath.path : fileOrPath;
        if (!this.backlog.contains(path)) {
            this.backlog.push(path);
        }
    };
    VaultMetricsCollector.prototype.processBacklog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, file, metrics;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.backlog.length > 0)) return [3 /*break*/, 2];
                        path = this.backlog.shift();
                        file = this.vault.getAbstractFileByPath(path);
                        return [4 /*yield*/, this.collect(file)];
                    case 1:
                        metrics = _a.sent();
                        this.update(path, metrics);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    VaultMetricsCollector.prototype.onfilecreated = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfilecreated(${file?.path})`);
                this.push(file);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.onfilemodified = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfilemodified(${file?.path})`)
                this.push(file);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.onfiledeleted = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfiledeleted(${file?.path})`)
                this.push(file);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.onfilerenamed = function (file, oldPath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfilerenamed(${file?.path})`)
                this.push(file);
                this.push(oldPath);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.getFileType = function (file) {
        var _a;
        if (((_a = file.extension) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "md") {
            return FileType.Note;
        }
        else {
            return FileType.Attachment;
        }
    };
    VaultMetricsCollector.prototype.collect = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata;
            return __generator(this, function (_a) {
                try {
                    metadata = this.metadataCache.getFileCache(file);
                }
                catch (e) {
                    // getFileCache indicates that it should return either an instance
                    // of CachedMetadata or null.  The conditions under which a null 
                    // is returned are unspecified.  Empirically, if the file does not
                    // exist, e.g. it's been deleted or renamed then getFileCache will 
                    // throw an exception instead of returning null.
                    metadata = null;
                }
                if (metadata == null) {
                    return [2 /*return*/, Promise.resolve(null)];
                }
                switch (this.getFileType(file)) {
                    case FileType.Note:
                        return [2 /*return*/, new NoteMetricsCollector(this.vault).collect(file, metadata)];
                    case FileType.Attachment:
                        return [2 /*return*/, new FileMetricsCollector().collect(file, metadata)];
                }
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.update = function (fileOrPath, metrics) {
        var _a, _b;
        var key = (fileOrPath instanceof obsidian.TFile) ? fileOrPath.path : fileOrPath;
        // Remove the existing values for the passed file if present, update the
        // raw values, then add the values for the passed file to the totals.
        (_a = this.vaultMetrics) === null || _a === void 0 ? void 0 : _a.dec(this.data.get(key));
        if (metrics == null) {
            this.data.delete(key);
        }
        else {
            this.data.set(key, metrics);
        }
        (_b = this.vaultMetrics) === null || _b === void 0 ? void 0 : _b.inc(metrics);
    };
    return VaultMetricsCollector;
}());
var NoteMetricsCollector = /** @class */ (function () {
    function NoteMetricsCollector(vault) {
        this.vault = vault;
    }
    NoteMetricsCollector.prototype.collect = function (file, metadata) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var metrics, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metrics = new VaultMetrics();
                        metrics.files = 1;
                        metrics.notes = 1;
                        metrics.attachments = 0;
                        metrics.size = (_a = file.stat) === null || _a === void 0 ? void 0 : _a.size;
                        metrics.links = ((_b = metadata === null || metadata === void 0 ? void 0 : metadata.links) === null || _b === void 0 ? void 0 : _b.length) || 0;
                        metrics.words = 0;
                        _c = metrics;
                        return [4 /*yield*/, this.vault.cachedRead(file).then(function (content) {
                                var _a;
                                return (_a = metadata.sections) === null || _a === void 0 ? void 0 : _a.map(function (section) {
                                    var _a, _b, _c, _d;
                                    var sectionType = section.type;
                                    var startOffset = (_b = (_a = section.position) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.offset;
                                    var endOffset = (_d = (_c = section.position) === null || _c === void 0 ? void 0 : _c.end) === null || _d === void 0 ? void 0 : _d.offset;
                                    var tokenizer = NoteMetricsCollector.TOKENIZERS.get(sectionType);
                                    if (!tokenizer) {
                                        console.log("".concat(file.path, ": no tokenizer, section.type=").concat(section.type));
                                        return 0;
                                    }
                                    else {
                                        var tokens = tokenizer.tokenize(content.substring(startOffset, endOffset));
                                        return tokens.length;
                                    }
                                }).reduce(function (a, b) { return a + b; }, 0);
                            }).catch(function (e) {
                                console.log("".concat(file.path, " ").concat(e));
                                return 0;
                            })];
                    case 1:
                        _c.words = _d.sent();
                        return [2 /*return*/, metrics];
                }
            });
        });
    };
    NoteMetricsCollector.TOKENIZERS = new Map([
        ["paragraph", MARKDOWN_TOKENIZER],
        ["heading", MARKDOWN_TOKENIZER],
        ["list", MARKDOWN_TOKENIZER],
        ["table", UNIT_TOKENIZER],
        ["yaml", UNIT_TOKENIZER],
        ["code", UNIT_TOKENIZER],
        ["blockquote", MARKDOWN_TOKENIZER],
        ["math", UNIT_TOKENIZER],
        ["thematicBreak", UNIT_TOKENIZER],
        ["html", UNIT_TOKENIZER],
        ["text", UNIT_TOKENIZER],
        ["element", UNIT_TOKENIZER],
        ["footnoteDefinition", UNIT_TOKENIZER],
        ["definition", UNIT_TOKENIZER],
        ["callout", MARKDOWN_TOKENIZER],
    ]);
    return NoteMetricsCollector;
}());
var FileMetricsCollector = /** @class */ (function () {
    function FileMetricsCollector() {
    }
    FileMetricsCollector.prototype.collect = function (file, metadata) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var metrics;
            return __generator(this, function (_b) {
                metrics = new VaultMetrics();
                metrics.files = 1;
                metrics.notes = 0;
                metrics.attachments = 1;
                metrics.size = (_a = file.stat) === null || _a === void 0 ? void 0 : _a.size;
                metrics.links = 0;
                metrics.words = 0;
                return [2 /*return*/, metrics];
            });
        });
    };
    return FileMetricsCollector;
}());

var StatisticsPluginSettingTab = /** @class */ (function (_super) {
    __extends(StatisticsPluginSettingTab, _super);
    function StatisticsPluginSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    StatisticsPluginSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Show individual items")
            .setDesc("Whether to show multiple items at once or cycle them with a click")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.displayIndividualItems)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.displayIndividualItems = value;
                            this.display();
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        if (!this.plugin.settings.displayIndividualItems) {
            return;
        }
        new obsidian.Setting(containerEl)
            .setName("Show notes")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showNotes)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showNotes = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show attachments")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showAttachments)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showAttachments = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show files")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showFiles)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showFiles = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show links")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showLinks)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showLinks = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show words")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showWords)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showWords = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show size")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showSize)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showSize = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return StatisticsPluginSettingTab;
}(obsidian.PluginSettingTab));

var DEFAULT_SETTINGS = {
    displayIndividualItems: false,
    showNotes: false,
    showAttachments: false,
    showFiles: false,
    showLinks: false,
    showWords: false,
    showSize: false,
};
var StatisticsPlugin = /** @class */ (function (_super) {
    __extends(StatisticsPlugin, _super);
    function StatisticsPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusBarItem = null;
        return _this;
    }
    StatisticsPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Loading vault-statistics Plugin');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.vaultMetrics = new VaultMetrics();
                        this.vaultMetricsCollector = new VaultMetricsCollector(this).
                            setVault(this.app.vault).
                            setMetadataCache(this.app.metadataCache).
                            setVaultMetrics(this.vaultMetrics).
                            start();
                        this.statusBarItem = new StatisticsStatusBarItem(this, this.addStatusBarItem()).
                            setVaultMetrics(this.vaultMetrics);
                        this.addSettingTab(new StatisticsPluginSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.statusBarItem.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    return StatisticsPlugin;
}(obsidian.Plugin));
/**
 * {@link StatisticView} is responsible for maintaining the DOM representation
 * of a given statistic.
 */
var StatisticView = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param containerEl The parent element for the view.
     */
    function StatisticView(containerEl) {
        this.containerEl = containerEl.createSpan({ cls: ["obsidian-vault-statistics--item"] });
        this.setActive(false);
    }
    /**
     * Sets the name of the statistic.
     */
    StatisticView.prototype.setStatisticName = function (name) {
        this.containerEl.addClass("obsidian-vault-statistics--item-".concat(name));
        return this;
    };
    /**
     * Sets the formatter to use to produce the content of the view.
     */
    StatisticView.prototype.setFormatter = function (formatter) {
        this.formatter = formatter;
        return this;
    };
    /**
     * Updates the view with the desired active status.
     *
     * Active views have the CSS class `obsidian-vault-statistics--item-active`
     * applied, inactive views have the CSS class
     * `obsidian-vault-statistics--item-inactive` applied. These classes are
     * mutually exclusive.
     */
    StatisticView.prototype.setActive = function (isActive) {
        this.containerEl.removeClass("obsidian-vault-statistics--item--active");
        this.containerEl.removeClass("obsidian-vault-statistics--item--inactive");
        if (isActive) {
            this.containerEl.addClass("obsidian-vault-statistics--item--active");
        }
        else {
            this.containerEl.addClass("obsidian-vault-statistics--item--inactive");
        }
        return this;
    };
    /**
     * Refreshes the content of the view with content from the passed {@link
     * Statistics}.
     */
    StatisticView.prototype.refresh = function (s) {
        this.containerEl.setText(this.formatter(s));
    };
    /**
     * Returns the text content of the view.
     */
    StatisticView.prototype.getText = function () {
        return this.containerEl.getText();
    };
    return StatisticView;
}());
var StatisticsStatusBarItem = /** @class */ (function () {
    function StatisticsStatusBarItem(owner, statusBarItem) {
        var _this = this;
        // index of the currently displayed stat.
        this.displayedStatisticIndex = 0;
        this.statisticViews = [];
        this.refreshSoon = obsidian.debounce(function () { _this.refresh(); }, 2000, false);
        this.owner = owner;
        this.statusBarItem = statusBarItem;
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("notes").
            setFormatter(function (s) { return new DecimalUnitFormatter("notes").format(s.notes); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("attachments").
            setFormatter(function (s) { return new DecimalUnitFormatter("attachments").format(s.attachments); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("files").
            setFormatter(function (s) { return new DecimalUnitFormatter("files").format(s.files); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("links").
            setFormatter(function (s) { return new DecimalUnitFormatter("links").format(s.links); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("words").
            setFormatter(function (s) { return new DecimalUnitFormatter("words").format(s.words); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("size").
            setFormatter(function (s) { return new BytesFormatter().format(s.size); }));
        this.statusBarItem.onClickEvent(function () { _this.onclick(); });
    }
    StatisticsStatusBarItem.prototype.setVaultMetrics = function (vaultMetrics) {
        var _a;
        this.vaultMetrics = vaultMetrics;
        this.owner.registerEvent((_a = this.vaultMetrics) === null || _a === void 0 ? void 0 : _a.on("updated", this.refreshSoon));
        this.refreshSoon();
        return this;
    };
    StatisticsStatusBarItem.prototype.refresh = function () {
        var _this = this;
        if (this.owner.settings.displayIndividualItems) {
            this.statisticViews[0].setActive(this.owner.settings.showNotes).refresh(this.vaultMetrics);
            this.statisticViews[1].setActive(this.owner.settings.showAttachments).refresh(this.vaultMetrics);
            this.statisticViews[2].setActive(this.owner.settings.showFiles).refresh(this.vaultMetrics);
            this.statisticViews[3].setActive(this.owner.settings.showLinks).refresh(this.vaultMetrics);
            this.statisticViews[4].setActive(this.owner.settings.showWords).refresh(this.vaultMetrics);
            this.statisticViews[5].setActive(this.owner.settings.showSize).refresh(this.vaultMetrics);
        }
        else {
            this.statisticViews.forEach(function (view, i) {
                view.setActive(_this.displayedStatisticIndex == i).refresh(_this.vaultMetrics);
            });
        }
        this.statusBarItem.title = this.statisticViews.map(function (view) { return view.getText(); }).join("\n");
    };
    StatisticsStatusBarItem.prototype.onclick = function () {
        if (!this.owner.settings.displayIndividualItems) {
            this.displayedStatisticIndex = (this.displayedStatisticIndex + 1) % this.statisticViews.length;
        }
        this.refresh();
    };
    return StatisticsStatusBarItem;
}());

module.exports = StatisticsPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9mb3JtYXQudHMiLCJzcmMvbWV0cmljcy50cyIsInNyYy90ZXh0LnRzIiwic3JjL2NvbGxlY3QudHMiLCJzcmMvc2V0dGluZ3MudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcclxuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XHJcbiAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1hdHRlciB7XG4gIHB1YmxpYyBhYnN0cmFjdCBmb3JtYXQodmFsdWU6IG51bWJlcik6IHN0cmluZztcbn1cblxuLyoqXG4gKiB7QGxpbmsgRGVjaW1hbFVuaXRGb3JtYXR0ZXJ9IHByb3ZpZGVzIGFuIGltcGxlbWVudGF0aW9uIG9mIHtAbGluayBGb3JtYXR0ZXJ9XG4gKiB0aGF0IG91dHB1dHMgYSBpbnRlZ2VycyBpbiBhIHN0YW5kYXJkIGRlY2ltYWwgZm9ybWF0IHdpdGggZ3JvdXBlZCB0aG91c2FuZHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpbWFsVW5pdEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XG4gIHByaXZhdGUgdW5pdDogc3RyaW5nO1xuICBwcml2YXRlIG51bWJlckZvcm1hdDogSW50bC5OdW1iZXJGb3JtYXQ7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB1bml0IHRoZSB1bml0IG9mIHRoZSB2YWx1ZSBiZWluZyBmb3JtYXR0ZWQuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IodW5pdDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudW5pdCA9IHVuaXQ7XG4gICAgdGhpcy5udW1iZXJGb3JtYXQgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7IHN0eWxlOiAnZGVjaW1hbCcgfSk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLm51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUpfSAke3RoaXMudW5pdH1gXG4gIH1cbn1cblxuLyoqXG4gKiB7QGxpbmsgU2NhbGluZ1VuaXRGb3JtYXR0ZXJ9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2FsaW5nVW5pdEZvcm1hdHRlciBleHRlbmRzIEZvcm1hdHRlciB7XG5cbiAgcHJpdmF0ZSBudW1iZXJGb3JtYXQ6IEludGwuTnVtYmVyRm9ybWF0O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gbnVtYmVyRm9ybWF0IEFuIGluc3RhbmNlIG9mIHtAbGluayBJbnRsLk51bWJlckZvcm1hdH0gdG8gdXNlIHRvXG4gICAqIGZvcm1hdCB0aGUgc2NhbGVkIHZhbHVlLlxuICAgKi9cbiAgY29uc3RydWN0b3IobnVtYmVyRm9ybWF0OiBJbnRsLk51bWJlckZvcm1hdCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5udW1iZXJGb3JtYXQgPSBudW1iZXJGb3JtYXQ7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGVzIHRoZSBwYXNzZWQgcmF3IHZhbHVlIChpbiBhIGJhc2UgdW5pdCkgdG8gYW4gYXBwcm9wcmlhdGUgdmFsdWUgZm9yXG4gICAqIHByZXNlbnRhdGlvbiBhbmQgcmV0dXJucyB0aGUgc2NhbGVkIHZhbHVlIGFzIHdlbGwgYXMgdGhlIG5hbWUgb2YgdGhlIHVuaXRcbiAgICogdGhhdCB0aGUgcmV0dXJuZWQgdmFsdWUgaXMgaW4uXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gYmUgc2NhbGVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyLHN0cmluZ30gYW4gYXJyYXktbGlrZSBjb250YWluaW5nIHRoZSBudW1lcmljYWwgdmFsdWUgYW5kXG4gICAqIHRoZSBuYW1lIG9mIHRoZSB1bml0IHRoYXQgdGhlIHZhbHVlIHJlcHJlc2VudHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2NhbGUodmFsdWU6IG51bWJlcik6IFtudW1iZXIsIHN0cmluZ107XG5cbiAgcHVibGljIGZvcm1hdCh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgW3NjYWxlZFZhbHVlLCBzY2FsZWRVbml0XSA9IHRoaXMuc2NhbGUodmFsdWUpO1xuICAgIHJldHVybiBgJHt0aGlzLm51bWJlckZvcm1hdC5mb3JtYXQoc2NhbGVkVmFsdWUpfSAke3NjYWxlZFVuaXR9YFxuICB9XG5cbn1cblxuLyoqXG4gKiB7QGxpbmsgQnl0ZXNGb3JtYXR0ZXJ9IGZvcm1hdHMgdmFsdWVzIHRoYXQgcmVwcmVzZW50IGEgc2l6ZSBpbiBieXRlcyBhcyBhXG4gKiB2YWx1ZSBpbiBieXRlcywga2lsb2J5dGVzLCBtZWdhYnl0ZXMsIGdpZ2FieXRlcywgZXRjLlxuICovXG5leHBvcnQgY2xhc3MgQnl0ZXNGb3JtYXR0ZXIgZXh0ZW5kcyBTY2FsaW5nVW5pdEZvcm1hdHRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdkZWNpbWFsJyxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxuICAgIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzY2FsZSh2YWx1ZTogbnVtYmVyKTogW251bWJlciwgc3RyaW5nXSB7XG4gICAgbGV0IHVuaXRzID0gW1wiYnl0ZXNcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCJdXG4gICAgd2hpbGUgKHZhbHVlID4gMTAyNCAmJiB1bml0cy5sZW5ndGggPiAwKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNFxuICAgICAgdW5pdHMuc2hpZnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIFt2YWx1ZSwgdW5pdHNbMF1dO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudHMsIEV2ZW50UmVmIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhdWx0TWV0cmljcyB7XG4gIGZpbGVzOiBudW1iZXI7XG4gIG5vdGVzOiBudW1iZXI7XG4gIGF0dGFjaG1lbnRzOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbiAgbGlua3M6IG51bWJlcjtcbiAgd29yZHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFZhdWx0TWV0cmljcyBleHRlbmRzIEV2ZW50cyBpbXBsZW1lbnRzIFZhdWx0TWV0cmljcyB7XG5cbiAgZmlsZXM6IG51bWJlciA9IDA7XG4gIG5vdGVzOiBudW1iZXIgPSAwO1xuICBhdHRhY2htZW50czogbnVtYmVyID0gMDtcbiAgc2l6ZTogbnVtYmVyID0gMDtcbiAgbGlua3M6IG51bWJlciA9IDA7XG4gIHdvcmRzOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmZpbGVzID0gMDtcbiAgICB0aGlzLm5vdGVzID0gMDtcbiAgICB0aGlzLmF0dGFjaG1lbnRzID0gMDtcbiAgICB0aGlzLnNpemUgPSAwO1xuICAgIHRoaXMubGlua3MgPSAwO1xuICAgIHRoaXMud29yZHMgPSAwO1xuICB9XG5cbiAgcHVibGljIGRlYyhtZXRyaWNzOiBWYXVsdE1ldHJpY3MpIHtcbiAgICB0aGlzLmZpbGVzIC09IG1ldHJpY3M/LmZpbGVzIHx8IDA7XG4gICAgdGhpcy5ub3RlcyAtPSBtZXRyaWNzPy5ub3RlcyB8fCAwO1xuICAgIHRoaXMuYXR0YWNobWVudHMgLT0gbWV0cmljcz8uYXR0YWNobWVudHMgfHwgMDtcbiAgICB0aGlzLnNpemUgLT0gbWV0cmljcz8uc2l6ZSB8fCAwO1xuICAgIHRoaXMubGlua3MgLT0gbWV0cmljcz8ubGlua3MgfHwgMDtcbiAgICB0aGlzLndvcmRzIC09IG1ldHJpY3M/LndvcmRzIHx8IDA7XG4gICAgdGhpcy50cmlnZ2VyKFwidXBkYXRlZFwiKTtcbiAgfVxuXG4gIHB1YmxpYyBpbmMobWV0cmljczogVmF1bHRNZXRyaWNzKSB7XG4gICAgdGhpcy5maWxlcyArPSBtZXRyaWNzPy5maWxlcyB8fCAwO1xuICAgIHRoaXMubm90ZXMgKz0gbWV0cmljcz8ubm90ZXMgfHwgMDtcbiAgICB0aGlzLmF0dGFjaG1lbnRzICs9IG1ldHJpY3M/LmF0dGFjaG1lbnRzIHx8IDA7XG4gICAgdGhpcy5zaXplICs9IG1ldHJpY3M/LnNpemUgfHwgMDtcbiAgICB0aGlzLmxpbmtzICs9IG1ldHJpY3M/LmxpbmtzIHx8IDA7XG4gICAgdGhpcy53b3JkcyArPSBtZXRyaWNzPy53b3JkcyB8fCAwO1xuICAgIHRoaXMudHJpZ2dlcihcInVwZGF0ZWRcIik7XG4gIH1cblxuICBwdWJsaWMgb24obmFtZTogXCJ1cGRhdGVkXCIsIGNhbGxiYWNrOiAodmF1bHRNZXRyaWNzOiBWYXVsdE1ldHJpY3MpID0+IGFueSwgY3R4PzogYW55KTogRXZlbnRSZWYge1xuICAgIHJldHVybiBzdXBlci5vbihcInVwZGF0ZWRcIiwgY2FsbGJhY2ssIGN0eCk7XG4gIH1cblxufVxuIiwiXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuaXplciB7XG4gIHRva2VuaXplKGNvbnRlbnQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz47XG59XG5cbi8qKlxuICogVGhlIHtAbGluayBVbml0VG9rZW5pemVyfSBpcyBhIGNvbnN0YW50IHRva2VuaXplciB0aGF0IGFsd2F5cyByZXR1cm5zIGFuXG4gKiBlbXB0eSBsaXN0LlxuICovXG5jbGFzcyBVbml0VG9rZW5pemVyIGltcGxlbWVudHMgVG9rZW5pemVyIHtcbiAgcHVibGljIHRva2VuaXplKF86IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG4vKipcbiAqIHtAbGluayBNYXJrZG93blRva2VuaXplcn0gdW5kZXJzdGFuZHMgaG93IHRvIHRva2VuaXplIG1hcmtkb3duIHRleHQgaW50byB3b3JkXG4gKiB0b2tlbnMuXG4gKi9cbmNsYXNzIE1hcmtkb3duVG9rZW5pemVyIGltcGxlbWVudHMgVG9rZW5pemVyIHtcblxuICBwcml2YXRlIGlzTm9uV29yZCh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgTk9OX1dPUkRTID0gL15cXFcrJC87XG4gICAgcmV0dXJuICEhTk9OX1dPUkRTLmV4ZWModG9rZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc051bWJlcih0b2tlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgTlVNQkVSID0gL15cXGQrKFxcLlxcZCspPyQvO1xuICAgIHJldHVybiAhIU5VTUJFUi5leGVjKHRva2VuKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDb2RlQmxvY2tIZWFkZXIodG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IENPREVfQkxPQ0tfSEVBREVSID0gL15gYGBcXHcrJC87XG4gICAgcmV0dXJuICEhQ09ERV9CTE9DS19IRUFERVIuZXhlYyh0b2tlbik7XG4gIH1cblxuICBwcml2YXRlIHN0cmlwSGlnaGxpZ2h0cyh0b2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBTVFJJUF9ISUdITElHSFRTID0gL14oPT0pPyguKj8pKD09KT8kLztcbiAgICByZXR1cm4gU1RSSVBfSElHSExJR0hUUy5leGVjKHRva2VuKVsyXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RyaXBGb3JtYXR0aW5nKHRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IFNUUklQX0ZPUk1BVFRJTkcgPSAvXihfK3xcXCorKT8oLio/KShfK3xcXCorKT8kLztcbiAgICByZXR1cm4gU1RSSVBfRk9STUFUVElORy5leGVjKHRva2VuKVsyXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RyaXBQdW5jdHVhdGlvbih0b2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBTVFJJUF9QVU5DVFVBVElPTiA9IC9eKGB8XFwufDp8XCJ8LHwhfFxcPyk/KC4qPykoYHxcXC58OnxcInwsfCF8XFw/KT8kLztcbiAgICByZXR1cm4gU1RSSVBfUFVOQ1RVQVRJT04uZXhlYyh0b2tlbilbMl07XG4gIH1cblxuICBwcml2YXRlIHN0cmlwV2lraUxpbmtzKHRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IFNUUklQX1dJS0lfTElOS1MgPSAvXihcXFtcXFspPyguKj8pKFxcXVxcXSk/JC87XG4gICAgcmV0dXJuIFNUUklQX1dJS0lfTElOS1MuZXhlYyh0b2tlbilbMl07XG4gIH1cblxuICBwcml2YXRlIHN0cmlwQWxsKHRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0b2tlbiA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGxldCBpc0ZpeGVkUG9pbnQgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWlzRml4ZWRQb2ludCkge1xuICAgICAgbGV0IHByZXYgPSB0b2tlbjtcbiAgICAgIHRva2VuID0gW3Rva2VuXS5cbiAgICAgICAgbWFwKHRoaXMuc3RyaXBIaWdobGlnaHRzKS5cbiAgICAgICAgbWFwKHRoaXMuc3RyaXBGb3JtYXR0aW5nKS5cbiAgICAgICAgbWFwKHRoaXMuc3RyaXBQdW5jdHVhdGlvbikuXG4gICAgICAgIG1hcCh0aGlzLnN0cmlwV2lraUxpbmtzKVswXTtcbiAgICAgIGlzRml4ZWRQb2ludCA9IGlzRml4ZWRQb2ludCB8fCBwcmV2ID09PSB0b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcHVibGljIHRva2VuaXplKGNvbnRlbnQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgIGlmIChjb250ZW50LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBXT1JEX0JPVU5EQVJZID0gL1sgXFxuXFxyXFx0XFxcIlxcfCxcXChcXClcXFtcXF0vXSsvO1xuICAgICAgbGV0IHdvcmRzID0gY29udGVudC5cbiAgICAgICAgc3BsaXQoV09SRF9CT1VOREFSWSkuXG4gICAgICAgIGZpbHRlcih0b2tlbiA9PiAhdGhpcy5pc05vbldvcmQodG9rZW4pKS5cbiAgICAgICAgZmlsdGVyKHRva2VuID0+ICF0aGlzLmlzTnVtYmVyKHRva2VuKSkuXG4gICAgICAgIGZpbHRlcih0b2tlbiA9PiAhdGhpcy5pc0NvZGVCbG9ja0hlYWRlcih0b2tlbikpLlxuICAgICAgICBtYXAodG9rZW4gPT4gdGhpcy5zdHJpcEFsbCh0b2tlbikpLlxuICAgICAgICBmaWx0ZXIodG9rZW4gPT4gdG9rZW4ubGVuZ3RoID4gMCk7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBVTklUX1RPS0VOSVpFUiA9IG5ldyBVbml0VG9rZW5pemVyKCk7XG5leHBvcnQgY29uc3QgTUFSS0RPV05fVE9LRU5JWkVSID0gbmV3IE1hcmtkb3duVG9rZW5pemVyKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0X3Rva2VuaXplKF86IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICByZXR1cm4gVU5JVF9UT0tFTklaRVIudG9rZW5pemUoXyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93bl90b2tlbml6ZShjb250ZW50OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgcmV0dXJuIE1BUktET1dOX1RPS0VOSVpFUi50b2tlbml6ZShjb250ZW50KTtcbn1cblxuZXhwb3J0IHsgfTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmF1bHQsIE1ldGFkYXRhQ2FjaGUsIFRGaWxlLCBURm9sZGVyLCBDYWNoZWRNZXRhZGF0YSB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7IFZhdWx0TWV0cmljcyB9IGZyb20gJy4vbWV0cmljcyc7XG5pbXBvcnQgeyBNQVJLRE9XTl9UT0tFTklaRVIsIFVOSVRfVE9LRU5JWkVSIH0gZnJvbSAnLi90ZXh0JztcblxuXG5lbnVtIEZpbGVUeXBlIHtcbiAgVW5rbm93biA9IDAsXG4gIE5vdGUsXG4gIEF0dGFjaG1lbnQsXG59XG5cbmV4cG9ydCBjbGFzcyBWYXVsdE1ldHJpY3NDb2xsZWN0b3Ige1xuXG4gIHByaXZhdGUgb3duZXI6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSB2YXVsdDogVmF1bHQ7XG4gIHByaXZhdGUgbWV0YWRhdGFDYWNoZTogTWV0YWRhdGFDYWNoZTtcbiAgcHJpdmF0ZSBkYXRhOiBNYXA8c3RyaW5nLCBWYXVsdE1ldHJpY3M+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIGJhY2tsb2c6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXkoKTtcbiAgcHJpdmF0ZSB2YXVsdE1ldHJpY3M6IFZhdWx0TWV0cmljcyA9IG5ldyBWYXVsdE1ldHJpY3MoKTtcblxuICBjb25zdHJ1Y3Rvcihvd25lcjogQ29tcG9uZW50KSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICB9XG5cbiAgcHVibGljIHNldFZhdWx0KHZhdWx0OiBWYXVsdCkge1xuICAgIHRoaXMudmF1bHQgPSB2YXVsdDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZXRhZGF0YUNhY2hlKG1ldGFkYXRhQ2FjaGU6IE1ldGFkYXRhQ2FjaGUpIHtcbiAgICB0aGlzLm1ldGFkYXRhQ2FjaGUgPSBtZXRhZGF0YUNhY2hlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldFZhdWx0TWV0cmljcyh2YXVsdE1ldHJpY3M6IFZhdWx0TWV0cmljcykge1xuICAgIHRoaXMudmF1bHRNZXRyaWNzID0gdmF1bHRNZXRyaWNzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMub3duZXIucmVnaXN0ZXJFdmVudCh0aGlzLnZhdWx0Lm9uKFwiY3JlYXRlXCIsIChmaWxlOiBURmlsZSkgPT4geyB0aGlzLm9uZmlsZWNyZWF0ZWQoZmlsZSkgfSkpO1xuICAgIHRoaXMub3duZXIucmVnaXN0ZXJFdmVudCh0aGlzLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlOiBURmlsZSkgPT4geyB0aGlzLm9uZmlsZW1vZGlmaWVkKGZpbGUpIH0pKTtcbiAgICB0aGlzLm93bmVyLnJlZ2lzdGVyRXZlbnQodGhpcy52YXVsdC5vbihcImRlbGV0ZVwiLCAoZmlsZTogVEZpbGUpID0+IHsgdGhpcy5vbmZpbGVkZWxldGVkKGZpbGUpIH0pKTtcbiAgICB0aGlzLm93bmVyLnJlZ2lzdGVyRXZlbnQodGhpcy52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZTogVEZpbGUsIG9sZFBhdGg6IHN0cmluZykgPT4geyB0aGlzLm9uZmlsZXJlbmFtZWQoZmlsZSwgb2xkUGF0aCkgfSkpO1xuICAgIHRoaXMub3duZXIucmVnaXN0ZXJFdmVudCh0aGlzLm1ldGFkYXRhQ2FjaGUub24oXCJyZXNvbHZlXCIsIChmaWxlOiBURmlsZSkgPT4geyB0aGlzLm9uZmlsZW1vZGlmaWVkKGZpbGUpIH0pKTtcbiAgICB0aGlzLm93bmVyLnJlZ2lzdGVyRXZlbnQodGhpcy5tZXRhZGF0YUNhY2hlLm9uKFwiY2hhbmdlZFwiLCAoZmlsZTogVEZpbGUpID0+IHsgdGhpcy5vbmZpbGVtb2RpZmllZChmaWxlKSB9KSk7XG5cbiAgICB0aGlzLmRhdGEuY2xlYXIoKTtcbiAgICB0aGlzLmJhY2tsb2cgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLnZhdWx0TWV0cmljcz8ucmVzZXQoKTtcbiAgICB0aGlzLnZhdWx0LmdldEZpbGVzKCkuZm9yRWFjaCgoZmlsZTogVEZpbGUpID0+IHtcbiAgICAgIGlmICghKGZpbGUgaW5zdGFuY2VvZiBURm9sZGVyKSkge1xuICAgICAgICB0aGlzLnB1c2goZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vd25lci5yZWdpc3RlckludGVydmFsKCtzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMucHJvY2Vzc0JhY2tsb2coKSB9LCAyMDAwKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgcHVzaChmaWxlT3JQYXRoOiBURmlsZSB8IHN0cmluZykge1xuICAgIGlmIChmaWxlT3JQYXRoIGluc3RhbmNlb2YgVEZvbGRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwYXRoID0gKGZpbGVPclBhdGggaW5zdGFuY2VvZiBURmlsZSkgPyBmaWxlT3JQYXRoLnBhdGggOiBmaWxlT3JQYXRoO1xuICAgIGlmICghdGhpcy5iYWNrbG9nLmNvbnRhaW5zKHBhdGgpKSB7XG4gICAgICB0aGlzLmJhY2tsb2cucHVzaChwYXRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHByb2Nlc3NCYWNrbG9nKCkge1xuICAgIHdoaWxlICh0aGlzLmJhY2tsb2cubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHBhdGggPSB0aGlzLmJhY2tsb2cuc2hpZnQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBwcm9jZXNzaW5nICR7cGF0aH1gKTtcbiAgICAgIGxldCBmaWxlID0gdGhpcy52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCkgYXMgVEZpbGU7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgcGF0aCA9ICR7cGF0aH07IGZpbGUgPSAke2ZpbGV9YCk7XG4gICAgICBsZXQgbWV0cmljcyA9IGF3YWl0IHRoaXMuY29sbGVjdChmaWxlKTtcbiAgICAgIHRoaXMudXBkYXRlKHBhdGgsIG1ldHJpY3MpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uZmlsZWNyZWF0ZWQoZmlsZTogVEZpbGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgb25maWxlY3JlYXRlZCgke2ZpbGU/LnBhdGh9KWApO1xuICAgIHRoaXMucHVzaChmaWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb25maWxlbW9kaWZpZWQoZmlsZTogVEZpbGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgb25maWxlbW9kaWZpZWQoJHtmaWxlPy5wYXRofSlgKVxuICAgIHRoaXMucHVzaChmaWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb25maWxlZGVsZXRlZChmaWxlOiBURmlsZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGBvbmZpbGVkZWxldGVkKCR7ZmlsZT8ucGF0aH0pYClcbiAgICB0aGlzLnB1c2goZmlsZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uZmlsZXJlbmFtZWQoZmlsZTogVEZpbGUsIG9sZFBhdGg6IHN0cmluZykge1xuICAgIC8vIGNvbnNvbGUubG9nKGBvbmZpbGVyZW5hbWVkKCR7ZmlsZT8ucGF0aH0pYClcbiAgICB0aGlzLnB1c2goZmlsZSk7XG4gICAgdGhpcy5wdXNoKG9sZFBhdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlVHlwZShmaWxlOiBURmlsZSk6IEZpbGVUeXBlIHtcbiAgICBpZiAoZmlsZS5leHRlbnNpb24/LnRvTG93ZXJDYXNlKCkgPT09IFwibWRcIikge1xuICAgICAgcmV0dXJuIEZpbGVUeXBlLk5vdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBGaWxlVHlwZS5BdHRhY2htZW50O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjb2xsZWN0KGZpbGU6IFRGaWxlKTogUHJvbWlzZTxWYXVsdE1ldHJpY3M+IHtcbiAgICBsZXQgbWV0YWRhdGE6IENhY2hlZE1ldGFkYXRhO1xuICAgIHRyeSB7XG4gICAgICBtZXRhZGF0YSA9IHRoaXMubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZ2V0RmlsZUNhY2hlIGluZGljYXRlcyB0aGF0IGl0IHNob3VsZCByZXR1cm4gZWl0aGVyIGFuIGluc3RhbmNlXG4gICAgICAvLyBvZiBDYWNoZWRNZXRhZGF0YSBvciBudWxsLiAgVGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggYSBudWxsIFxuICAgICAgLy8gaXMgcmV0dXJuZWQgYXJlIHVuc3BlY2lmaWVkLiAgRW1waXJpY2FsbHksIGlmIHRoZSBmaWxlIGRvZXMgbm90XG4gICAgICAvLyBleGlzdCwgZS5nLiBpdCdzIGJlZW4gZGVsZXRlZCBvciByZW5hbWVkIHRoZW4gZ2V0RmlsZUNhY2hlIHdpbGwgXG4gICAgICAvLyB0aHJvdyBhbiBleGNlcHRpb24gaW5zdGVhZCBvZiByZXR1cm5pbmcgbnVsbC5cbiAgICAgIG1ldGFkYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWV0YWRhdGEgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuZ2V0RmlsZVR5cGUoZmlsZSkpIHtcbiAgICAgIGNhc2UgRmlsZVR5cGUuTm90ZTpcbiAgICAgICAgcmV0dXJuIG5ldyBOb3RlTWV0cmljc0NvbGxlY3Rvcih0aGlzLnZhdWx0KS5jb2xsZWN0KGZpbGUsIG1ldGFkYXRhKTtcbiAgICAgIGNhc2UgRmlsZVR5cGUuQXR0YWNobWVudDpcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlTWV0cmljc0NvbGxlY3RvcigpLmNvbGxlY3QoZmlsZSwgbWV0YWRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZmlsZU9yUGF0aDogVEZpbGUgfCBzdHJpbmcsIG1ldHJpY3M6IFZhdWx0TWV0cmljcykge1xuICAgIGxldCBrZXkgPSAoZmlsZU9yUGF0aCBpbnN0YW5jZW9mIFRGaWxlKSA/IGZpbGVPclBhdGgucGF0aCA6IGZpbGVPclBhdGg7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGV4aXN0aW5nIHZhbHVlcyBmb3IgdGhlIHBhc3NlZCBmaWxlIGlmIHByZXNlbnQsIHVwZGF0ZSB0aGVcbiAgICAvLyByYXcgdmFsdWVzLCB0aGVuIGFkZCB0aGUgdmFsdWVzIGZvciB0aGUgcGFzc2VkIGZpbGUgdG8gdGhlIHRvdGFscy5cbiAgICB0aGlzLnZhdWx0TWV0cmljcz8uZGVjKHRoaXMuZGF0YS5nZXQoa2V5KSk7XG5cbiAgICBpZiAobWV0cmljcyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRhdGEuZGVsZXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YS5zZXQoa2V5LCBtZXRyaWNzKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhdWx0TWV0cmljcz8uaW5jKG1ldHJpY3MpO1xuICB9XG5cbn1cblxuY2xhc3MgTm90ZU1ldHJpY3NDb2xsZWN0b3Ige1xuXG4gIHN0YXRpYyBUT0tFTklaRVJTID0gbmV3IE1hcChbXG4gICAgW1wicGFyYWdyYXBoXCIsIE1BUktET1dOX1RPS0VOSVpFUl0sXG4gICAgW1wiaGVhZGluZ1wiLCBNQVJLRE9XTl9UT0tFTklaRVJdLFxuICAgIFtcImxpc3RcIiwgTUFSS0RPV05fVE9LRU5JWkVSXSxcbiAgICBbXCJ0YWJsZVwiLCBVTklUX1RPS0VOSVpFUl0sXG4gICAgW1wieWFtbFwiLCBVTklUX1RPS0VOSVpFUl0sXG4gICAgW1wiY29kZVwiLCBVTklUX1RPS0VOSVpFUl0sXG4gICAgW1wiYmxvY2txdW90ZVwiLCBNQVJLRE9XTl9UT0tFTklaRVJdLFxuICAgIFtcIm1hdGhcIiwgVU5JVF9UT0tFTklaRVJdLFxuICAgIFtcInRoZW1hdGljQnJlYWtcIiwgVU5JVF9UT0tFTklaRVJdLFxuICAgIFtcImh0bWxcIiwgVU5JVF9UT0tFTklaRVJdLFxuICAgIFtcInRleHRcIiwgVU5JVF9UT0tFTklaRVJdLFxuICAgIFtcImVsZW1lbnRcIiwgVU5JVF9UT0tFTklaRVJdLFxuICAgIFtcImZvb3Rub3RlRGVmaW5pdGlvblwiLCBVTklUX1RPS0VOSVpFUl0sXG4gICAgW1wiZGVmaW5pdGlvblwiLCBVTklUX1RPS0VOSVpFUl0sXG4gICAgW1wiY2FsbG91dFwiLCBNQVJLRE9XTl9UT0tFTklaRVJdLFxuICBdKTtcblxuICBwcml2YXRlIHZhdWx0OiBWYXVsdDtcblxuICBjb25zdHJ1Y3Rvcih2YXVsdDogVmF1bHQpIHtcbiAgICB0aGlzLnZhdWx0ID0gdmF1bHQ7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY29sbGVjdChmaWxlOiBURmlsZSwgbWV0YWRhdGE6IENhY2hlZE1ldGFkYXRhKTogUHJvbWlzZTxWYXVsdE1ldHJpY3M+IHtcbiAgICBsZXQgbWV0cmljcyA9IG5ldyBWYXVsdE1ldHJpY3MoKTtcblxuICAgIG1ldHJpY3MuZmlsZXMgPSAxO1xuICAgIG1ldHJpY3Mubm90ZXMgPSAxO1xuICAgIG1ldHJpY3MuYXR0YWNobWVudHMgPSAwO1xuICAgIG1ldHJpY3Muc2l6ZSA9IGZpbGUuc3RhdD8uc2l6ZTtcbiAgICBtZXRyaWNzLmxpbmtzID0gbWV0YWRhdGE/LmxpbmtzPy5sZW5ndGggfHwgMDtcbiAgICBtZXRyaWNzLndvcmRzID0gMDtcbiAgICBtZXRyaWNzLndvcmRzID0gYXdhaXQgdGhpcy52YXVsdC5jYWNoZWRSZWFkKGZpbGUpLnRoZW4oKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIG1ldGFkYXRhLnNlY3Rpb25zPy5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25UeXBlID0gc2VjdGlvbi50eXBlO1xuICAgICAgICBjb25zdCBzdGFydE9mZnNldCA9IHNlY3Rpb24ucG9zaXRpb24/LnN0YXJ0Py5vZmZzZXQ7XG4gICAgICAgIGNvbnN0IGVuZE9mZnNldCA9IHNlY3Rpb24ucG9zaXRpb24/LmVuZD8ub2Zmc2V0O1xuICAgICAgICBjb25zdCB0b2tlbml6ZXIgPSBOb3RlTWV0cmljc0NvbGxlY3Rvci5UT0tFTklaRVJTLmdldChzZWN0aW9uVHlwZSk7XG4gICAgICAgIGlmICghdG9rZW5pemVyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7ZmlsZS5wYXRofTogbm8gdG9rZW5pemVyLCBzZWN0aW9uLnR5cGU9JHtzZWN0aW9uLnR5cGV9YCk7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdG9rZW5zID0gdG9rZW5pemVyLnRva2VuaXplKGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQpKTtcbiAgICAgICAgICByZXR1cm4gdG9rZW5zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2ZpbGUucGF0aH0gJHtlfWApO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0cmljcztcbiAgfVxufVxuXG5jbGFzcyBGaWxlTWV0cmljc0NvbGxlY3RvciB7XG5cbiAgcHVibGljIGFzeW5jIGNvbGxlY3QoZmlsZTogVEZpbGUsIG1ldGFkYXRhOiBDYWNoZWRNZXRhZGF0YSk6IFByb21pc2U8VmF1bHRNZXRyaWNzPiB7XG4gICAgbGV0IG1ldHJpY3MgPSBuZXcgVmF1bHRNZXRyaWNzKCk7XG4gICAgbWV0cmljcy5maWxlcyA9IDE7XG4gICAgbWV0cmljcy5ub3RlcyA9IDA7XG4gICAgbWV0cmljcy5hdHRhY2htZW50cyA9IDE7XG4gICAgbWV0cmljcy5zaXplID0gZmlsZS5zdGF0Py5zaXplO1xuICAgIG1ldHJpY3MubGlua3MgPSAwO1xuICAgIG1ldHJpY3Mud29yZHMgPSAwO1xuICAgIHJldHVybiBtZXRyaWNzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tIFwib2JzaWRpYW5cIjtcblxuaW1wb3J0IFN0YXRpc3RpY3NQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRpc3RpY3NQbHVnaW5TZXR0aW5ncyB7XG4gIGRpc3BsYXlJbmRpdmlkdWFsSXRlbXM6IGJvb2xlYW4sXG4gIHNob3dOb3RlczogYm9vbGVhbixcbiAgc2hvd0F0dGFjaG1lbnRzOiBib29sZWFuLFxuICBzaG93RmlsZXM6IGJvb2xlYW4sXG4gIHNob3dMaW5rczogYm9vbGVhbixcbiAgc2hvd1dvcmRzOiBib29sZWFuLFxuICBzaG93U2l6ZTogYm9vbGVhbixcbn1cblxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NQbHVnaW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogU3RhdGlzdGljc1BsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBTdGF0aXN0aWNzUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBsZXQgeyBjb250YWluZXJFbCB9ID0gdGhpcztcblxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgaW5kaXZpZHVhbCBpdGVtc1wiKVxuICAgICAgLnNldERlc2MoXCJXaGV0aGVyIHRvIHNob3cgbXVsdGlwbGUgaXRlbXMgYXQgb25jZSBvciBjeWNsZSB0aGVtIHdpdGggYSBjbGlja1wiKVxuICAgICAgLmFkZFRvZ2dsZSgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzcGxheUluZGl2aWR1YWxJdGVtcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5SW5kaXZpZHVhbEl0ZW1zID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucGx1Z2luLnNldHRpbmdzLmRpc3BsYXlJbmRpdmlkdWFsSXRlbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBub3Rlc1wiKVxuICAgICAgLmFkZFRvZ2dsZSgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd05vdGVzKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dOb3RlcyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTaG93IGF0dGFjaG1lbnRzXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93QXR0YWNobWVudHMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd0F0dGFjaG1lbnRzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgZmlsZXNcIilcbiAgICAgIC5hZGRUb2dnbGUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dGaWxlcylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93RmlsZXMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBsaW5rc1wiKVxuICAgICAgLmFkZFRvZ2dsZSgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd0xpbmtzKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dMaW5rcyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJTaG93IHdvcmRzXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB2YWx1ZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93V29yZHMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1dvcmRzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgc2l6ZVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1NpemUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1NpemUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmF1bHQsIFRGaWxlLCBQbHVnaW4sIGRlYm91bmNlLCBNZXRhZGF0YUNhY2hlLCBDYWNoZWRNZXRhZGF0YSwgVEZvbGRlciB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB7IEJ5dGVzRm9ybWF0dGVyLCBEZWNpbWFsVW5pdEZvcm1hdHRlciB9IGZyb20gJy4vZm9ybWF0JztcbmltcG9ydCB7IFZhdWx0TWV0cmljcyB9IGZyb20gJy4vbWV0cmljcyc7XG5pbXBvcnQgeyBWYXVsdE1ldHJpY3NDb2xsZWN0b3IgfSBmcm9tICcuL2NvbGxlY3QnO1xuaW1wb3J0IHsgU3RhdGlzdGljc1BsdWdpblNldHRpbmdzLCBTdGF0aXN0aWNzUGx1Z2luU2V0dGluZ1RhYiB9IGZyb20gJy4vc2V0dGluZ3MnO1xuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBQYXJ0aWFsPFN0YXRpc3RpY3NQbHVnaW5TZXR0aW5ncz4gPSB7XG4gIGRpc3BsYXlJbmRpdmlkdWFsSXRlbXM6IGZhbHNlLFxuICBzaG93Tm90ZXM6IGZhbHNlLFxuICBzaG93QXR0YWNobWVudHM6IGZhbHNlLFxuICBzaG93RmlsZXM6IGZhbHNlLFxuICBzaG93TGlua3M6IGZhbHNlLFxuICBzaG93V29yZHM6IGZhbHNlLFxuICBzaG93U2l6ZTogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0aXN0aWNzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICBwcml2YXRlIHN0YXR1c0Jhckl0ZW06IFN0YXRpc3RpY3NTdGF0dXNCYXJJdGVtID0gbnVsbDtcblxuICBwdWJsaWMgdmF1bHRNZXRyaWNzQ29sbGVjdG9yOiBWYXVsdE1ldHJpY3NDb2xsZWN0b3I7XG4gIHB1YmxpYyB2YXVsdE1ldHJpY3M6IFZhdWx0TWV0cmljcztcblxuICBzZXR0aW5nczogU3RhdGlzdGljc1BsdWdpblNldHRpbmdzO1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyB2YXVsdC1zdGF0aXN0aWNzIFBsdWdpbicpO1xuICAgIFxuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICB0aGlzLnZhdWx0TWV0cmljcyA9IG5ldyBWYXVsdE1ldHJpY3MoKTtcblxuICAgIHRoaXMudmF1bHRNZXRyaWNzQ29sbGVjdG9yID0gbmV3IFZhdWx0TWV0cmljc0NvbGxlY3Rvcih0aGlzKS5cbiAgICAgIHNldFZhdWx0KHRoaXMuYXBwLnZhdWx0KS5cbiAgICAgIHNldE1ldGFkYXRhQ2FjaGUodGhpcy5hcHAubWV0YWRhdGFDYWNoZSkuXG4gICAgICBzZXRWYXVsdE1ldHJpY3ModGhpcy52YXVsdE1ldHJpY3MpLlxuICAgICAgc3RhcnQoKTtcblxuICAgIHRoaXMuc3RhdHVzQmFySXRlbSA9IG5ldyBTdGF0aXN0aWNzU3RhdHVzQmFySXRlbSh0aGlzLCB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKSkuXG4gICAgICBzZXRWYXVsdE1ldHJpY3ModGhpcy52YXVsdE1ldHJpY3MpO1xuXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTdGF0aXN0aWNzUGx1Z2luU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuICB9XG4gIFxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB0aGlzLnN0YXR1c0Jhckl0ZW0ucmVmcmVzaCgpO1xuICB9XG59XG5cbi8qKlxuICoge0BsaW5rIFN0YXRpc3RpY1ZpZXd9IGlzIHJlc3BvbnNpYmxlIGZvciBtYWludGFpbmluZyB0aGUgRE9NIHJlcHJlc2VudGF0aW9uXG4gKiBvZiBhIGdpdmVuIHN0YXRpc3RpYy5cbiAqL1xuY2xhc3MgU3RhdGlzdGljVmlldyB7XG5cbiAgLyoqIFJvb3Qgbm9kZSBmb3IgdGhlIHtAbGluayBTdGF0aXN0aWNWaWV3fS4gKi9cbiAgcHJpdmF0ZSBjb250YWluZXJFbDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqIEZvcm1hdHRlciB0aGF0IGV4dHJhY3RzIGFuZCBmb3JtYXRzIGEgdmFsdWUgZnJvbSBhIHtAbGluayBTdGF0aXN0aWNzfSBpbnN0YW5jZS4gKi9cbiAgcHJpdmF0ZSBmb3JtYXR0ZXI6IChzOiBWYXVsdE1ldHJpY3MpID0+IHN0cmluZztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCBUaGUgcGFyZW50IGVsZW1lbnQgZm9yIHRoZSB2aWV3LlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29udGFpbmVyRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsLmNyZWF0ZVNwYW4oeyBjbHM6IFtcIm9ic2lkaWFuLXZhdWx0LXN0YXRpc3RpY3MtLWl0ZW1cIl0gfSk7XG4gICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5hbWUgb2YgdGhlIHN0YXRpc3RpYy5cbiAgICovXG4gIHNldFN0YXRpc3RpY05hbWUobmFtZTogc3RyaW5nKTogU3RhdGlzdGljVmlldyB7XG4gICAgdGhpcy5jb250YWluZXJFbC5hZGRDbGFzcyhgb2JzaWRpYW4tdmF1bHQtc3RhdGlzdGljcy0taXRlbS0ke25hbWV9YCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZm9ybWF0dGVyIHRvIHVzZSB0byBwcm9kdWNlIHRoZSBjb250ZW50IG9mIHRoZSB2aWV3LlxuICAgKi9cbiAgc2V0Rm9ybWF0dGVyKGZvcm1hdHRlcjogKHM6IFZhdWx0TWV0cmljcykgPT4gc3RyaW5nKTogU3RhdGlzdGljVmlldyB7XG4gICAgdGhpcy5mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmlldyB3aXRoIHRoZSBkZXNpcmVkIGFjdGl2ZSBzdGF0dXMuXG4gICAqXG4gICAqIEFjdGl2ZSB2aWV3cyBoYXZlIHRoZSBDU1MgY2xhc3MgYG9ic2lkaWFuLXZhdWx0LXN0YXRpc3RpY3MtLWl0ZW0tYWN0aXZlYFxuICAgKiBhcHBsaWVkLCBpbmFjdGl2ZSB2aWV3cyBoYXZlIHRoZSBDU1MgY2xhc3NcbiAgICogYG9ic2lkaWFuLXZhdWx0LXN0YXRpc3RpY3MtLWl0ZW0taW5hY3RpdmVgIGFwcGxpZWQuIFRoZXNlIGNsYXNzZXMgYXJlXG4gICAqIG11dHVhbGx5IGV4Y2x1c2l2ZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc0FjdGl2ZTogYm9vbGVhbik6IFN0YXRpc3RpY1ZpZXcge1xuICAgIHRoaXMuY29udGFpbmVyRWwucmVtb3ZlQ2xhc3MoXCJvYnNpZGlhbi12YXVsdC1zdGF0aXN0aWNzLS1pdGVtLS1hY3RpdmVcIik7XG4gICAgdGhpcy5jb250YWluZXJFbC5yZW1vdmVDbGFzcyhcIm9ic2lkaWFuLXZhdWx0LXN0YXRpc3RpY3MtLWl0ZW0tLWluYWN0aXZlXCIpO1xuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsLmFkZENsYXNzKFwib2JzaWRpYW4tdmF1bHQtc3RhdGlzdGljcy0taXRlbS0tYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lckVsLmFkZENsYXNzKFwib2JzaWRpYW4tdmF1bHQtc3RhdGlzdGljcy0taXRlbS0taW5hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIHRoZSBjb250ZW50IG9mIHRoZSB2aWV3IHdpdGggY29udGVudCBmcm9tIHRoZSBwYXNzZWQge0BsaW5rXG4gICAqIFN0YXRpc3RpY3N9LlxuICAgKi9cbiAgcmVmcmVzaChzOiBWYXVsdE1ldHJpY3MpIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsLnNldFRleHQodGhpcy5mb3JtYXR0ZXIocykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgdmlldy5cbiAgICovXG4gIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJFbC5nZXRUZXh0KCk7XG4gIH1cbn1cblxuY2xhc3MgU3RhdGlzdGljc1N0YXR1c0Jhckl0ZW0ge1xuXG4gIHByaXZhdGUgb3duZXI6IFN0YXRpc3RpY3NQbHVnaW47XG5cbiAgLy8gaGFuZGxlIG9mIHRoZSBzdGF0dXMgYmFyIGl0ZW0gdG8gZHJhdyBpbnRvLlxuICBwcml2YXRlIHN0YXR1c0Jhckl0ZW06IEhUTUxFbGVtZW50O1xuXG4gIC8vIHJhdyBzdGF0c1xuICBwcml2YXRlIHZhdWx0TWV0cmljczogVmF1bHRNZXRyaWNzO1xuXG4gIC8vIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHN0YXQuXG4gIHByaXZhdGUgZGlzcGxheWVkU3RhdGlzdGljSW5kZXggPSAwO1xuXG4gIHByaXZhdGUgc3RhdGlzdGljVmlld3M6IEFycmF5PFN0YXRpc3RpY1ZpZXc+ID0gW107XG5cbiAgY29uc3RydWN0b3Iob3duZXI6IFN0YXRpc3RpY3NQbHVnaW4sIHN0YXR1c0Jhckl0ZW06IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMuc3RhdHVzQmFySXRlbSA9IHN0YXR1c0Jhckl0ZW07XG5cbiAgICB0aGlzLnN0YXRpc3RpY1ZpZXdzLnB1c2gobmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5zdGF0dXNCYXJJdGVtKS5cbiAgICAgIHNldFN0YXRpc3RpY05hbWUoXCJub3Rlc1wiKS5cbiAgICAgIHNldEZvcm1hdHRlcigoczogVmF1bHRNZXRyaWNzKSA9PiB7IHJldHVybiBuZXcgRGVjaW1hbFVuaXRGb3JtYXR0ZXIoXCJub3Rlc1wiKS5mb3JtYXQocy5ub3RlcykgfSkpO1xuICAgIHRoaXMuc3RhdGlzdGljVmlld3MucHVzaChuZXcgU3RhdGlzdGljVmlldyh0aGlzLnN0YXR1c0Jhckl0ZW0pLlxuICAgICAgc2V0U3RhdGlzdGljTmFtZShcImF0dGFjaG1lbnRzXCIpLlxuICAgICAgc2V0Rm9ybWF0dGVyKChzOiBWYXVsdE1ldHJpY3MpID0+IHsgcmV0dXJuIG5ldyBEZWNpbWFsVW5pdEZvcm1hdHRlcihcImF0dGFjaG1lbnRzXCIpLmZvcm1hdChzLmF0dGFjaG1lbnRzKSB9KSk7XG4gICAgdGhpcy5zdGF0aXN0aWNWaWV3cy5wdXNoKG5ldyBTdGF0aXN0aWNWaWV3KHRoaXMuc3RhdHVzQmFySXRlbSkuXG4gICAgICBzZXRTdGF0aXN0aWNOYW1lKFwiZmlsZXNcIikuXG4gICAgICBzZXRGb3JtYXR0ZXIoKHM6IFZhdWx0TWV0cmljcykgPT4geyByZXR1cm4gbmV3IERlY2ltYWxVbml0Rm9ybWF0dGVyKFwiZmlsZXNcIikuZm9ybWF0KHMuZmlsZXMpIH0pKTtcbiAgICB0aGlzLnN0YXRpc3RpY1ZpZXdzLnB1c2gobmV3IFN0YXRpc3RpY1ZpZXcodGhpcy5zdGF0dXNCYXJJdGVtKS5cbiAgICAgIHNldFN0YXRpc3RpY05hbWUoXCJsaW5rc1wiKS5cbiAgICAgIHNldEZvcm1hdHRlcigoczogVmF1bHRNZXRyaWNzKSA9PiB7IHJldHVybiBuZXcgRGVjaW1hbFVuaXRGb3JtYXR0ZXIoXCJsaW5rc1wiKS5mb3JtYXQocy5saW5rcykgfSkpO1xuICAgIHRoaXMuc3RhdGlzdGljVmlld3MucHVzaChuZXcgU3RhdGlzdGljVmlldyh0aGlzLnN0YXR1c0Jhckl0ZW0pLlxuICAgICAgc2V0U3RhdGlzdGljTmFtZShcIndvcmRzXCIpLlxuICAgICAgc2V0Rm9ybWF0dGVyKChzOiBWYXVsdE1ldHJpY3MpID0+IHsgcmV0dXJuIG5ldyBEZWNpbWFsVW5pdEZvcm1hdHRlcihcIndvcmRzXCIpLmZvcm1hdChzLndvcmRzKSB9KSk7XG4gICAgdGhpcy5zdGF0aXN0aWNWaWV3cy5wdXNoKG5ldyBTdGF0aXN0aWNWaWV3KHRoaXMuc3RhdHVzQmFySXRlbSkuXG4gICAgICBzZXRTdGF0aXN0aWNOYW1lKFwic2l6ZVwiKS5cbiAgICAgIHNldEZvcm1hdHRlcigoczogVmF1bHRNZXRyaWNzKSA9PiB7IHJldHVybiBuZXcgQnl0ZXNGb3JtYXR0ZXIoKS5mb3JtYXQocy5zaXplKSB9KSk7XG5cbiAgICB0aGlzLnN0YXR1c0Jhckl0ZW0ub25DbGlja0V2ZW50KCgpID0+IHsgdGhpcy5vbmNsaWNrKCkgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmF1bHRNZXRyaWNzKHZhdWx0TWV0cmljczogVmF1bHRNZXRyaWNzKSB7XG4gICAgdGhpcy52YXVsdE1ldHJpY3MgPSB2YXVsdE1ldHJpY3M7XG4gICAgdGhpcy5vd25lci5yZWdpc3RlckV2ZW50KHRoaXMudmF1bHRNZXRyaWNzPy5vbihcInVwZGF0ZWRcIiwgdGhpcy5yZWZyZXNoU29vbikpO1xuICAgIHRoaXMucmVmcmVzaFNvb24oKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaFNvb24gPSBkZWJvdW5jZSgoKSA9PiB7IHRoaXMucmVmcmVzaCgpOyB9LCAyMDAwLCBmYWxzZSk7XG5cbiAgcHVibGljIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMub3duZXIuc2V0dGluZ3MuZGlzcGxheUluZGl2aWR1YWxJdGVtcykge1xuICAgICAgdGhpcy5zdGF0aXN0aWNWaWV3c1swXS5zZXRBY3RpdmUodGhpcy5vd25lci5zZXR0aW5ncy5zaG93Tm90ZXMpLnJlZnJlc2godGhpcy52YXVsdE1ldHJpY3MpO1xuICAgICAgdGhpcy5zdGF0aXN0aWNWaWV3c1sxXS5zZXRBY3RpdmUodGhpcy5vd25lci5zZXR0aW5ncy5zaG93QXR0YWNobWVudHMpLnJlZnJlc2godGhpcy52YXVsdE1ldHJpY3MpO1xuICAgICAgdGhpcy5zdGF0aXN0aWNWaWV3c1syXS5zZXRBY3RpdmUodGhpcy5vd25lci5zZXR0aW5ncy5zaG93RmlsZXMpLnJlZnJlc2godGhpcy52YXVsdE1ldHJpY3MpO1xuICAgICAgdGhpcy5zdGF0aXN0aWNWaWV3c1szXS5zZXRBY3RpdmUodGhpcy5vd25lci5zZXR0aW5ncy5zaG93TGlua3MpLnJlZnJlc2godGhpcy52YXVsdE1ldHJpY3MpO1xuICAgICAgdGhpcy5zdGF0aXN0aWNWaWV3c1s0XS5zZXRBY3RpdmUodGhpcy5vd25lci5zZXR0aW5ncy5zaG93V29yZHMpLnJlZnJlc2godGhpcy52YXVsdE1ldHJpY3MpO1xuICAgICAgdGhpcy5zdGF0aXN0aWNWaWV3c1s1XS5zZXRBY3RpdmUodGhpcy5vd25lci5zZXR0aW5ncy5zaG93U2l6ZSkucmVmcmVzaCh0aGlzLnZhdWx0TWV0cmljcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGlzdGljVmlld3MuZm9yRWFjaCgodmlldywgaSkgPT4ge1xuICAgICAgICB2aWV3LnNldEFjdGl2ZSh0aGlzLmRpc3BsYXllZFN0YXRpc3RpY0luZGV4ID09IGkpLnJlZnJlc2godGhpcy52YXVsdE1ldHJpY3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0dXNCYXJJdGVtLnRpdGxlID0gdGhpcy5zdGF0aXN0aWNWaWV3cy5tYXAodmlldyA9PiB2aWV3LmdldFRleHQoKSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHByaXZhdGUgb25jbGljaygpIHtcbiAgICBpZiAoIXRoaXMub3duZXIuc2V0dGluZ3MuZGlzcGxheUluZGl2aWR1YWxJdGVtcykge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRTdGF0aXN0aWNJbmRleCA9ICh0aGlzLmRpc3BsYXllZFN0YXRpc3RpY0luZGV4ICsgMSkgJSB0aGlzLnN0YXRpc3RpY1ZpZXdzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudHMiLCJURm9sZGVyIiwiVEZpbGUiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlBsdWdpbiIsImRlYm91bmNlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FB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RSxLQUFLLEtBQUksQ0FBQyxDQUFDO0FBQ2xDLFFBQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFBLE9BQU8sS0FBQSxJQUFBLElBQVAsT0FBTyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFQLE9BQU8sQ0FBRSxLQUFLLEtBQUksQ0FBQyxDQUFDO0FBQ2xDLFFBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6QixDQUFBO0lBRU0sWUFBRyxDQUFBLFNBQUEsQ0FBQSxHQUFBLEdBQVYsVUFBVyxPQUFxQixFQUFBO0FBQzlCLFFBQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFBLE9BQU8sS0FBQSxJQUFBLElBQVAsT0FBTyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFQLE9BQU8sQ0FBRSxLQUFLLEtBQUksQ0FBQyxDQUFDO0FBQ2xDLFFBQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFBLE9BQU8sS0FBQSxJQUFBLElBQVAsT0FBTyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFQLE9BQU8sQ0FBRSxLQUFLLEtBQUksQ0FBQyxDQUFDO0FBQ2xDLFFBQUEsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFBLE9BQU8sS0FBQSxJQUFBLElBQVAsT0FBTyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFQLE9BQU8sQ0FBRSxXQUFXLEtBQUksQ0FBQyxDQUFDO0FBQzlDLFFBQUEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFBLE9BQU8sS0FBQSxJQUFBLElBQVAsT0FBTyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFQLE9BQU8sQ0FBRSxJQUFJLEtBQUksQ0FBQyxDQUFDO0FBQ2hDLFFBQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFBLE9BQU8sS0FBQSxJQUFBLElBQVAsT0FBTyxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFQLE9BQU8sQ0FBRSxLQUFLLEtBQUksQ0FBQyxDQUFDO0FBQ2xDLFFBQUEsSUFB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
