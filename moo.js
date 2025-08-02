var Ye = 4294967295;
function Ko(e, t, i) {
	var s = i / 4294967296,
		n = i;
	e.setUint32(t, s),
		e.setUint32(t + 4, n);
}
function Or(e, t, i) {
	var s = Math.floor(i / 4294967296),
		n = i;
	e.setUint32(t, s),
		e.setUint32(t + 4, n);
}
function Rr(e, t) {
	var i = e.getInt32(t),
		s = e.getUint32(t + 4);
	return i * 4294967296 + s
}
function Jo(e, t) {
	var i = e.getUint32(t),
		s = e.getUint32(t + 4);
	return i * 4294967296 + s
}
var Ki, Ji, Qi, Ai = (typeof process > "u" || ((Ki = process == null ? void 0 : process.env) === null || Ki === void 0 ? void 0 : Ki.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
function Es(e) {
	for (var t = e.length, i = 0, s = 0; s < t;) {
		var n = e.charCodeAt(s++);
		if (n & 4294967168)
			if (!(n & 4294965248))
				i += 2;
			else {
				if (n >= 55296 && n <= 56319 && s < t) {
					var r = e.charCodeAt(s);
					(r & 64512) === 56320 && (++s,
						n = ((n & 1023) << 10) + (r & 1023) + 65536);
				}
				n & 4294901760 ? i += 4 : i += 3
			}
		else {
			i++;
			continue;
		}
	}
	return i
}
function Qo(e, t, i) {
	for (var s = e.length, n = i, r = 0; r < s;) {
		var o = e.charCodeAt(r++);
		if (o & 4294967168)
			if (!(o & 4294965248))
				t[n++] = o >> 6 & 31 | 192;
			else {
				if (o >= 55296 && o <= 56319 && r < s) {
					var l = e.charCodeAt(r);
					(l & 64512) === 56320 && (++r,
						o = ((o & 1023) << 10) + (l & 1023) + 65536);
				}
				o & 4294901760 ? (t[n++] = o >> 18 & 7 | 240,
					t[n++] = o >> 12 & 63 | 128,
					t[n++] = o >> 6 & 63 | 128) : (t[n++] = o >> 12 & 15 | 224,
						t[n++] = o >> 6 & 63 | 128);
			}
		else {
			t[n++] = o;
			continue;
		}
		t[n++] = o & 63 | 128
	}
}
var Lt = Ai ? new TextEncoder : void 0,
	Zo = Ai ? typeof process < "u" && ((Ji = process == null ? void 0 : process.env) === null || Ji === void 0 ? void 0 : Ji.TEXT_ENCODING) !== "force" ? 200 : 0 : Ye;
function jo(e, t, i) {
	t.set(Lt.encode(e), i);
}
function ea(e, t, i) {
	Lt.encodeInto(e, t.subarray(i));
}
var ta = Lt != null && Lt.encodeInto ? ea : jo,
	ia = 4096;
function _r(e, t, i) {
	for (var s = t, n = s + i, r = [], o = ""; s < n;) {
		var l = e[s++];
		if (!(l & 128))
			r.push(l);
		else if ((l & 224) === 192) {
			var c = e[s++] & 63;
			r.push((l & 31) << 6 | c);
		} else if ((l & 240) === 224) {
			var c = e[s++] & 63,
				a = e[s++] & 63;
			r.push((l & 31) << 12 | c << 6 | a);
		} else if ((l & 248) === 240) {
			var c = e[s++] & 63,
				a = e[s++] & 63,
				u = e[s++] & 63,
				p = (l & 7) << 18 | c << 12 | a << 6 | u;
			p > 65535 && (p -= 65536,
				r.push(p >>> 10 & 1023 | 55296),
				p = 56320 | p & 1023),
				r.push(p);
		} else r.push(l);
		r.length >= ia && (o += String.fromCharCode.apply(String, r),
			r.length = 0);
	}
	return r.length > 0 && (o += String.fromCharCode.apply(String, r)),
		o
}
var na = Ai ? new TextDecoder : null,
	sa = Ai ? typeof process < "u" && ((Qi = process == null ? void 0 : process.env) === null || Qi === void 0 ? void 0 : Qi.TEXT_DECODER) !== "force" ? 200 : 0 : Ye;
function ra(e, t, i) {
	var s = e.subarray(t, t + i);
	return na.decode(s);
}
var ii = function () {
	function e(t, i) {
		this.type = t,
			this.data = i
	}
	return e
}(),
	oa = globalThis && globalThis.__extends || function () {
		var e = function (t, i) {
			return e = Object.setPrototypeOf || {
				__proto__: []
			} instanceof Array && function (s, n) {
				s.__proto__ = n
			}
				|| function (s, n) {
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (s[r] = n[r]);
				},
				e(t, i);
		};
		return function (t, i) {
			if (typeof i != "function" && i !== null)
				throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
			e(t, i);
			function s() {
				this.constructor = t
			}
			t.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype,
				new s);
		}
	}(),
	Pe = function (e) {
		oa(t, e);
		function t(i) {
			var s = e.call(this, i) || this,
				n = Object.create(t.prototype);
			return Object.setPrototypeOf(s, n),
				Object.defineProperty(s, "name", {
					configurable: true,
					enumerable: false,
					value: t.name
				}),
				s
		}
		return t
	}(Error),
	aa = -1,
	la = 4294967296 - 1,
	ca = 17179869184 - 1;
function ha(e) {
	var t = e.sec,
		i = e.nsec;
	if (t >= 0 && i >= 0 && t <= ca)
		if (i === 0 && t <= la) {
			var s = new Uint8Array(4),
				n = new DataView(s.buffer);
			return n.setUint32(0, t),
				s
		} else {
			var r = t / 4294967296,
				o = t & 4294967295,
				s = new Uint8Array(8),
				n = new DataView(s.buffer);
			return n.setUint32(0, i << 2 | r & 3),
				n.setUint32(4, o),
				s
		}
	else {
		var s = new Uint8Array(12),
			n = new DataView(s.buffer);
		return n.setUint32(0, i),
			Or(n, 4, t),
			s
	}
}
function fa(e) {
	var t = e.getTime(),
		i = Math.floor(t / 1e3),
		s = (t - i * 1e3) * 1e6,
		n = Math.floor(s / 1e9);
	return {
		sec: i + n,
		nsec: s - n * 1e9
	}
}
function ua(e) {
	if (e instanceof Date) {
		var t = fa(e);
		return ha(t);
	} else return null
}
function da(e) {
	var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
	switch (e.byteLength) {
		case 4: {
			var i = t.getUint32(0),
				s = 0;
			return {
				sec: i,
				nsec: s
			}
		}
		case 8: {
			var n = t.getUint32(0),
				r = t.getUint32(4),
				i = (n & 3) * 4294967296 + r,
				s = n >>> 2;
			return {
				sec: i,
				nsec: s
			}
		}
		case 12: {
			var i = Rr(t, 4),
				s = t.getUint32(0);
			return {
				sec: i,
				nsec: s
			}
		}
		default: throw new Pe("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(e.length));
	}
}
function pa(e) {
	var t = da(e);
	return new Date(t.sec * 1e3 + t.nsec / 1e6);
}
var ma = {
	type: aa,
	encode: ua,
	decode: pa
},
	Br = function () {
		function e() {
			this.builtInEncoders = [],
				this.builtInDecoders = [],
				this.encoders = [],
				this.decoders = [],
				this.register(ma);
		}
		return e.prototype.register = function (t) {
			var i = t.type,
				s = t.encode,
				n = t.decode;
			if (i >= 0)
				this.encoders[i] = s,
					this.decoders[i] = n;
			else {
				var r = 1 + i;
				this.builtInEncoders[r] = s,
					this.builtInDecoders[r] = n
			}
		},
			e.prototype.tryToEncode = function (t, i) {
				for (var s = 0; s < this.builtInEncoders.length; s++) {
					var n = this.builtInEncoders[s];
					if (n != null) {
						var r = n(t, i);
						if (r != null) {
							var o = -1 - s;
							return new ii(o, r);
						}
					}
				}
				for (var s = 0; s < this.encoders.length; s++) {
					var n = this.encoders[s];
					if (n != null) {
						var r = n(t, i);
						if (r != null) {
							var o = s;
							return new ii(o, r);
						}
					}
				}
				return t instanceof ii ? t : null
			},
			e.prototype.decode = function (t, i, s) {
				var n = i < 0 ? this.builtInDecoders[-1 - i] : this.decoders[i];
				return n ? n(t, i, s) : new ii(i, t);
			},
			e.defaultCodec = new e,
			e
	}();
function yi(e) {
	return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e);
}
function ga(e) {
	if (e instanceof ArrayBuffer)
		return new DataView(e);
	var t = yi(e);
	return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
var ya = 100,
	wa = 2048,
	Encoder = function () {
		function e(t, i, s, n, r, o, l, c) {
			t === void 0 && (t = Br.defaultCodec),
				i === void 0 && (i = void 0),
				s === void 0 && (s = ya),
				n === void 0 && (n = wa),
				r === void 0 && (r = false),
				o === void 0 && (o = false),
				l === void 0 && (l = false),
				c === void 0 && (c = false),
				this.extensionCodec = t,
				this.context = i,
				this.maxDepth = s,
				this.initialBufferSize = n,
				this.sortKeys = r,
				this.forceFloat32 = o,
				this.ignoreUndefined = l,
				this.forceIntegerToFloat = c,
				this.pos = 0,
				this.view = new DataView(new ArrayBuffer(this.initialBufferSize)),
				this.bytes = new Uint8Array(this.view.buffer);
		}
		return e.prototype.reinitializeState = function () {
			this.pos = 0
		},
			e.prototype.encodeSharedRef = function (t) {
				return this.reinitializeState(),
					this.doEncode(t, 1),
					this.bytes.subarray(0, this.pos);
			},
			e.prototype.encode = function (t) {
				return this.reinitializeState(),
					this.doEncode(t, 1),
					this.bytes.slice(0, this.pos);
			},
			e.prototype.doEncode = function (t, i) {
				if (i > this.maxDepth)
					throw new Error("Too deep objects in depth ".concat(i));
				t == null ? this.encodeNil() : typeof t == "boolean" ? this.encodeBoolean(t) : typeof t == "number" ? this.encodeNumber(t) : typeof t == "string" ? this.encodeString(t) : this.encodeObject(t, i);
			},
			e.prototype.ensureBufferSizeToWrite = function (t) {
				var i = this.pos + t;
				this.view.byteLength < i && this.resizeBuffer(i * 2);
			},
			e.prototype.resizeBuffer = function (t) {
				var i = new ArrayBuffer(t),
					s = new Uint8Array(i),
					n = new DataView(i);
				s.set(this.bytes),
					this.view = n,
					this.bytes = s
			},
			e.prototype.encodeNil = function () {
				this.writeU8(192);
			},
			e.prototype.encodeBoolean = function (t) {
				t === false ? this.writeU8(194) : this.writeU8(195);
			},
			e.prototype.encodeNumber = function (t) {
				Number.isSafeInteger(t) && !this.forceIntegerToFloat ? t >= 0 ? t < 128 ? this.writeU8(t) : t < 256 ? (this.writeU8(204),
					this.writeU8(t)) : t < 65536 ? (this.writeU8(205),
						this.writeU16(t)) : t < 4294967296 ? (this.writeU8(206),
							this.writeU32(t)) : (this.writeU8(207),
								this.writeU64(t)) : t >= -32 ? this.writeU8(224 | t + 32) : t >= -128 ? (this.writeU8(208),
									this.writeI8(t)) : t >= -32768 ? (this.writeU8(209),
										this.writeI16(t)) : t >= -2147483648 ? (this.writeU8(210),
											this.writeI32(t)) : (this.writeU8(211),
												this.writeI64(t)) : this.forceFloat32 ? (this.writeU8(202),
													this.writeF32(t)) : (this.writeU8(203),
														this.writeF64(t));
			},
			e.prototype.writeStringHeader = function (t) {
				if (t < 32)
					this.writeU8(160 + t);
				else if (t < 256)
					this.writeU8(217),
						this.writeU8(t);
				else if (t < 65536)
					this.writeU8(218),
						this.writeU16(t);
				else if (t < 4294967296)
					this.writeU8(219),
						this.writeU32(t);
				else throw new Error("Too long string: ".concat(t, " bytes in UTF-8"));
			},
			e.prototype.encodeString = function (t) {
				var i = 5,
					s = t.length;
				if (s > Zo) {
					var n = Es(t);
					this.ensureBufferSizeToWrite(i + n),
						this.writeStringHeader(n),
						ta(t, this.bytes, this.pos),
						this.pos += n
				} else {
					var n = Es(t);
					this.ensureBufferSizeToWrite(i + n),
						this.writeStringHeader(n),
						Qo(t, this.bytes, this.pos),
						this.pos += n
				}
			},
			e.prototype.encodeObject = function (t, i) {
				var s = this.extensionCodec.tryToEncode(t, this.context);
				if (s != null)
					this.encodeExtension(s);
				else if (Array.isArray(t))
					this.encodeArray(t, i);
				else if (ArrayBuffer.isView(t))
					this.encodeBinary(t);
				else if (typeof t == "object")
					this.encodeMap(t, i);
				else throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(t)));
			},
			e.prototype.encodeBinary = function (t) {
				var i = t.byteLength;
				if (i < 256)
					this.writeU8(196),
						this.writeU8(i);
				else if (i < 65536)
					this.writeU8(197),
						this.writeU16(i);
				else if (i < 4294967296)
					this.writeU8(198),
						this.writeU32(i);
				else throw new Error("Too large binary: ".concat(i));
				var s = yi(t);
				this.writeU8a(s);
			},
			e.prototype.encodeArray = function (t, i) {
				var s = t.length;
				if (s < 16)
					this.writeU8(144 + s);
				else if (s < 65536)
					this.writeU8(220),
						this.writeU16(s);
				else if (s < 4294967296)
					this.writeU8(221),
						this.writeU32(s);
				else throw new Error("Too large array: ".concat(s));
				for (var n = 0, r = t; n < r.length; n++) {
					var o = r[n];
					this.doEncode(o, i + 1);
				}
			},
			e.prototype.countWithoutUndefined = function (t, i) {
				for (var s = 0, n = 0, r = i; n < r.length; n++) {
					var o = r[n];
					t[o] !== void 0 && s++
				}
				return s
			},
			e.prototype.encodeMap = function (t, i) {
				var s = Object.keys(t);
				this.sortKeys && s.sort();
				var n = this.ignoreUndefined ? this.countWithoutUndefined(t, s) : s.length;
				if (n < 16)
					this.writeU8(128 + n);
				else if (n < 65536)
					this.writeU8(222),
						this.writeU16(n);
				else if (n < 4294967296)
					this.writeU8(223),
						this.writeU32(n);
				else throw new Error("Too large map object: ".concat(n));
				for (var r = 0, o = s; r < o.length; r++) {
					var l = o[r],
						c = t[l];
					this.ignoreUndefined && c === void 0 || (this.encodeString(l),
						this.doEncode(c, i + 1));
				}
			},
			e.prototype.encodeExtension = function (t) {
				var i = t.data.length;
				if (i === 1)
					this.writeU8(212);
				else if (i === 2)
					this.writeU8(213);
				else if (i === 4)
					this.writeU8(214);
				else if (i === 8)
					this.writeU8(215);
				else if (i === 16)
					this.writeU8(216);
				else if (i < 256)
					this.writeU8(199),
						this.writeU8(i);
				else if (i < 65536)
					this.writeU8(200),
						this.writeU16(i);
				else if (i < 4294967296)
					this.writeU8(201),
						this.writeU32(i);
				else throw new Error("Too large extension object: ".concat(i));
				this.writeI8(t.type),
					this.writeU8a(t.data);
			},
			e.prototype.writeU8 = function (t) {
				this.ensureBufferSizeToWrite(1),
					this.view.setUint8(this.pos, t),
					this.pos++
			},
			e.prototype.writeU8a = function (t) {
				var i = t.length;
				this.ensureBufferSizeToWrite(i),
					this.bytes.set(t, this.pos),
					this.pos += i
			},
			e.prototype.writeI8 = function (t) {
				this.ensureBufferSizeToWrite(1),
					this.view.setInt8(this.pos, t),
					this.pos++
			},
			e.prototype.writeU16 = function (t) {
				this.ensureBufferSizeToWrite(2),
					this.view.setUint16(this.pos, t),
					this.pos += 2
			},
			e.prototype.writeI16 = function (t) {
				this.ensureBufferSizeToWrite(2),
					this.view.setInt16(this.pos, t),
					this.pos += 2
			},
			e.prototype.writeU32 = function (t) {
				this.ensureBufferSizeToWrite(4),
					this.view.setUint32(this.pos, t),
					this.pos += 4
			},
			e.prototype.writeI32 = function (t) {
				this.ensureBufferSizeToWrite(4),
					this.view.setInt32(this.pos, t),
					this.pos += 4
			},
			e.prototype.writeF32 = function (t) {
				this.ensureBufferSizeToWrite(4),
					this.view.setFloat32(this.pos, t),
					this.pos += 4
			},
			e.prototype.writeF64 = function (t) {
				this.ensureBufferSizeToWrite(8),
					this.view.setFloat64(this.pos, t),
					this.pos += 8
			},
			e.prototype.writeU64 = function (t) {
				this.ensureBufferSizeToWrite(8),
					Ko(this.view, this.pos, t),
					this.pos += 8
			},
			e.prototype.writeI64 = function (t) {
				this.ensureBufferSizeToWrite(8),
					Or(this.view, this.pos, t),
					this.pos += 8
			},
			e
	}();
function Zi(e) {
	return "".concat(e < 0 ? "-" : "", "0x").concat(Math.abs(e).toString(16).padStart(2, "0"));
}
var va = 16,
	xa = 16,
	ba = function () {
		function e(t, i) {
			t === void 0 && (t = va),
				i === void 0 && (i = xa),
				this.maxKeyLength = t,
				this.maxLengthPerKey = i,
				this.hit = 0,
				this.miss = 0,
				this.caches = [];
			for (var s = 0; s < this.maxKeyLength; s++)
				this.caches.push([]);
		}
		return e.prototype.canBeCached = function (t) {
			return t > 0 && t <= this.maxKeyLength
		},
			e.prototype.find = function (t, i, s) {
				var n = this.caches[s - 1];
				e: for (var r = 0, o = n; r < o.length; r++) {
					for (var l = o[r], c = l.bytes, a = 0; a < s; a++)
						if (c[a] !== t[i + a])
							continue e;
					return l.str
				}
				return null
			},
			e.prototype.store = function (t, i) {
				var s = this.caches[t.length - 1],
					n = {
						bytes: t,
						str: i
					};
				s.length >= this.maxLengthPerKey ? s[Math.random() * s.length | 0] = n : s.push(n);
			},
			e.prototype.decode = function (t, i, s) {
				var n = this.find(t, i, s);
				if (n != null)
					return this.hit++,
						n;
				this.miss++;
				var r = _r(t, i, s),
					o = Uint8Array.prototype.slice.call(t, i, i + s);
				return this.store(o, r),
					r
			},
			e
	}(),
	Sa = globalThis && globalThis.__awaiter || function (e, t, i, s) {
		function n(r) {
			return r instanceof i ? r : new i(function (o) {
				o(r);
			});
		}
		return new (i || (i = Promise))(function (r, o) {
			function l(u) {
				try {
					a(s.next(u));
				} catch (p) {
					o(p);
				}
			}
			function c(u) {
				try {
					a(s.throw(u));
				} catch (p) {
					o(p);
				}
			}
			function a(u) {
				u.done ? r(u.value) : n(u.value).then(l, c);
			}
			a((s = s.apply(e, t || [])).next());
		});
	},
	ji = globalThis && globalThis.__generator || function (e, t) {
		var i = {
			label: 0,
			sent: function () {
				if (r[0] & 1)
					throw r[1];
				return r[1];
			},
			trys: [],
			ops: []
		}, s, n, r, o;
		return o = {
			next: l(0),
			throw: l(1),
			return: l(2)
		},
			typeof Symbol == "function" && (o[Symbol.iterator] = function () {
				return this
			}),
			o;
		function l(a) {
			return function (u) {
				return c([a, u]);
			}
		}
		function c(a) {
			if (s)
				throw new TypeError("Generator is already executing.");
			for (; i;)
				try {
					if (s = 1,
						n && (r = a[0] & 2 ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n),
							0) : n.next) && !(r = r.call(n, a[1])).done)
						return r;
					switch (n = 0,
					r && (a = [a[0] & 2, r.value]),
					a[0]) {
						case 0: case 1: r = a;
							break;
						case 4: return i.label++,
						{
							value: a[1],
							done: false
						};
						case 5: i.label++,
							n = a[1],
							a = [0];
							continue;
						case 7: a = i.ops.pop(),
							i.trys.pop();
							continue;
						default: if (r = i.trys,
							!(r = r.length > 0 && r[r.length - 1]) && (a[0] === 6 || a[0] === 2)) {
							i = 0;
							continue;
						}
							if (a[0] === 3 && (!r || a[1] > r[0] && a[1] < r[3])) {
								i.label = a[1];
								break;
							}
							if (a[0] === 6 && i.label < r[1]) {
								i.label = r[1],
									r = a;
								break;
							}
							if (r && i.label < r[2]) {
								i.label = r[2],
									i.ops.push(a);
								break;
							}
							r[2] && i.ops.pop(),
								i.trys.pop();
							continue;
					}
					a = t.call(e, i);
				} catch (u) {
					a = [6, u],
						n = 0
				} finally {
					s = r = 0
				}
			if (a[0] & 5)
				throw a[1];
			return {
				value: a[0] ? a[1] : void 0,
				done: true
			}
		}
	},
	Ps = globalThis && globalThis.__asyncValues || function (e) {
		if (!Symbol.asyncIterator)
			throw new TypeError("Symbol.asyncIterator is not defined.");
		var t = e[Symbol.asyncIterator], i;
		return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](),
			i = {},
			s("next"),
			s("throw"),
			s("return"),
			i[Symbol.asyncIterator] = function () {
				return this
			},
			i);
		function s(r) {
			i[r] = e[r] && function (o) {
				return new Promise(function (l, c) {
					o = e[r](o),
						n(l, c, o.done, o.value);
				});
			}
		}
		function n(r, o, l, c) {
			Promise.resolve(c).then(function (a) {
				r({
					value: a,
					done: l
				});
			}, o);
		}
	},
	bt = globalThis && globalThis.__await || function (e) {
		return this instanceof bt ? (this.v = e,
			this) : new bt(e);
	},
	Ta = globalThis && globalThis.__asyncGenerator || function (e, t, i) {
		if (!Symbol.asyncIterator)
			throw new TypeError("Symbol.asyncIterator is not defined.");
		var s = i.apply(e, t || []), n, r = [];
		return n = {},
			o("next"),
			o("throw"),
			o("return"),
			n[Symbol.asyncIterator] = function () {
				return this
			},
			n;
		function o(h) {
			s[h] && (n[h] = function (m) {
				return new Promise(function (w, v) {
					r.push([h, m, w, v]) > 1 || l(h, m);
				});
			});
		}
		function l(h, m) {
			try {
				c(s[h](m));
			} catch (w) {
				p(r[0][3], w);
			}
		}
		function c(h) {
			h.value instanceof bt ? Promise.resolve(h.value.v).then(a, u) : p(r[0][2], h);
		}
		function a(h) {
			l("next", h);
		}
		function u(h) {
			l("throw", h);
		}
		function p(h, m) {
			h(m),
				r.shift(),
				r.length && l(r[0][0], r[0][1]);
		}
	},
	Ia = function (e) {
		var t = typeof e;
		return t === "string" || t === "number"
	},
	Dt = -1,
	jn = new DataView(new ArrayBuffer(0)),
	Ma = new Uint8Array(jn.buffer),
	Cn = function () {
		try {
			jn.getInt8(0);
		} catch (e) {
			return e.constructor
		}
		throw new Error("never reached");
	}(),
	Cs = new Cn("Insufficient data"),
	Ea = new ba,
	Decoder = function () {
		function e(t, i, s, n, r, o, l, c) {
			t === void 0 && (t = Br.defaultCodec),
				i === void 0 && (i = void 0),
				s === void 0 && (s = Ye),
				n === void 0 && (n = Ye),
				r === void 0 && (r = Ye),
				o === void 0 && (o = Ye),
				l === void 0 && (l = Ye),
				c === void 0 && (c = Ea),
				this.extensionCodec = t,
				this.context = i,
				this.maxStrLength = s,
				this.maxBinLength = n,
				this.maxArrayLength = r,
				this.maxMapLength = o,
				this.maxExtLength = l,
				this.keyDecoder = c,
				this.totalPos = 0,
				this.pos = 0,
				this.view = jn,
				this.bytes = Ma,
				this.headByte = Dt,
				this.stack = [];
		}
		return e.prototype.reinitializeState = function () {
			this.totalPos = 0,
				this.headByte = Dt,
				this.stack.length = 0
		},
			e.prototype.setBuffer = function (t) {
				this.bytes = yi(t),
					this.view = ga(this.bytes),
					this.pos = 0
			},
			e.prototype.appendBuffer = function (t) {
				if (this.headByte === Dt && !this.hasRemaining(1))
					this.setBuffer(t);
				else {
					var i = this.bytes.subarray(this.pos),
						s = yi(t),
						n = new Uint8Array(i.length + s.length);
					n.set(i),
						n.set(s, i.length),
						this.setBuffer(n);
				}
			},
			e.prototype.hasRemaining = function (t) {
				return this.view.byteLength - this.pos >= t
			},
			e.prototype.createExtraByteError = function (t) {
				var i = this,
					s = i.view,
					n = i.pos;
				return new RangeError("Extra ".concat(s.byteLength - n, " of ").concat(s.byteLength, " byte(s) found at buffer[").concat(t, "]"));
			},
			e.prototype.decode = function (t) {
				this.reinitializeState(),
					this.setBuffer(t);
				var i = this.doDecodeSync();
				if (this.hasRemaining(1))
					throw this.createExtraByteError(this.pos);
				return i
			},
			e.prototype.decodeMulti = function (t) {
				return ji(this, function (i) {
					switch (i.label) {
						case 0: this.reinitializeState(),
							this.setBuffer(t),
							i.label = 1;
						case 1: return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
						case 2: return i.sent(),
							[3, 1];
						case 3: return [2];
					}
				});
			},
			e.prototype.decodeAsync = function (t) {
				var i, s, n, r;
				return Sa(this, void 0, void 0, function () {
					var o, l, c, a, u, p, h, m;
					return ji(this, function (w) {
						switch (w.label) {
							case 0: o = false,
								w.label = 1;
							case 1: w.trys.push([1, 6, 7, 12]),
								i = Ps(t),
								w.label = 2;
							case 2: return [4, i.next()];
							case 3: if (s = w.sent(),
								!!s.done)
								return [3, 5];
								if (c = s.value,
									o)
									throw this.createExtraByteError(this.totalPos);
								this.appendBuffer(c);
								try {
									l = this.doDecodeSync(),
										o = true
								} catch (v) {
									if (!(v instanceof Cn))
										throw v
								}
								this.totalPos += this.pos,
									w.label = 4;
							case 4: return [3, 2];
							case 5: return [3, 12];
							case 6: return a = w.sent(),
								n = {
									error: a
								},
								[3, 12];
							case 7: return w.trys.push([7, , 10, 11]),
								s && !s.done && (r = i.return) ? [4, r.call(i)] : [3, 9];
							case 8: w.sent(),
								w.label = 9;
							case 9: return [3, 11];
							case 10: if (n)
								throw n.error;
								return [7];
							case 11: return [7];
							case 12: if (o) {
								if (this.hasRemaining(1))
									throw this.createExtraByteError(this.totalPos);
								return [2, l];
							}
								throw u = this,
								p = u.headByte,
								h = u.pos,
								m = u.totalPos,
								new RangeError("Insufficient data in parsing ".concat(Zi(p), " at ").concat(m, " (").concat(h, " in the current buffer)"));
						}
					});
				});
			},
			e.prototype.decodeArrayStream = function (t) {
				return this.decodeMultiAsync(t, true);
			},
			e.prototype.decodeStream = function (t) {
				return this.decodeMultiAsync(t, false);
			},
			e.prototype.decodeMultiAsync = function (t, i) {
				return Ta(this, arguments, function () {
					var n, r, o, l, c, a, u, p, h;
					return ji(this, function (m) {
						switch (m.label) {
							case 0: n = i,
								r = -1,
								m.label = 1;
							case 1: m.trys.push([1, 13, 14, 19]),
								o = Ps(t),
								m.label = 2;
							case 2: return [4, bt(o.next())];
							case 3: if (l = m.sent(),
								!!l.done)
								return [3, 12];
								if (c = l.value,
									i && r === 0)
									throw this.createExtraByteError(this.totalPos);
								this.appendBuffer(c),
									n && (r = this.readArraySize(),
										n = false,
										this.compvare()),
									m.label = 4;
							case 4: m.trys.push([4, 9, , 10]),
								m.label = 5;
							case 5: return [4, bt(this.doDecodeSync())];
							case 6: return [4, m.sent()];
							case 7: return m.sent(),
								--r === 0 ? [3, 8] : [3, 5];
							case 8: return [3, 10];
							case 9: if (a = m.sent(),
								!(a instanceof Cn))
								throw a;
								return [3, 10];
							case 10: this.totalPos += this.pos,
								m.label = 11;
							case 11: return [3, 2];
							case 12: return [3, 19];
							case 13: return u = m.sent(),
								p = {
									error: u
								},
								[3, 19];
							case 14: return m.trys.push([14, , 17, 18]),
								l && !l.done && (h = o.return) ? [4, bt(h.call(o))] : [3, 16];
							case 15: m.sent(),
								m.label = 16;
							case 16: return [3, 18];
							case 17: if (p)
								throw p.error;
								return [7];
							case 18: return [7];
							case 19: return [2];
						}
					});
				});
			},
			e.prototype.doDecodeSync = function () {
				e: for (; ;) {
					var t = this.readHeadByte(),
						i = void 0;
					if (t >= 224)
						i = t - 256;
					else if (t < 192)
						if (t < 128)
							i = t;
						else if (t < 144) {
							var s = t - 128;
							if (s !== 0) {
								this.pushMapState(s),
									this.compvare();
								continue e
							} else i = {}
						} else if (t < 160) {
							var s = t - 144;
							if (s !== 0) {
								this.pushArrayState(s),
									this.compvare();
								continue e
							} else i = [];
						} else {
							var n = t - 160;
							i = this.decodeUtf8String(n, 0);
						}
					else if (t === 192)
						i = null;
					else if (t === 194)
						i = false;
					else if (t === 195)
						i = true;
					else if (t === 202)
						i = this.readF32();
					else if (t === 203)
						i = this.readF64();
					else if (t === 204)
						i = this.readU8();
					else if (t === 205)
						i = this.readU16();
					else if (t === 206)
						i = this.readU32();
					else if (t === 207)
						i = this.readU64();
					else if (t === 208)
						i = this.readI8();
					else if (t === 209)
						i = this.readI16();
					else if (t === 210)
						i = this.readI32();
					else if (t === 211)
						i = this.readI64();
					else if (t === 217) {
						var n = this.lookU8();
						i = this.decodeUtf8String(n, 1);
					} else if (t === 218) {
						var n = this.lookU16();
						i = this.decodeUtf8String(n, 2);
					} else if (t === 219) {
						var n = this.lookU32();
						i = this.decodeUtf8String(n, 4);
					} else if (t === 220) {
						var s = this.readU16();
						if (s !== 0) {
							this.pushArrayState(s),
								this.compvare();
							continue e
						} else i = [];
					} else if (t === 221) {
						var s = this.readU32();
						if (s !== 0) {
							this.pushArrayState(s),
								this.compvare();
							continue e
						} else i = [];
					} else if (t === 222) {
						var s = this.readU16();
						if (s !== 0) {
							this.pushMapState(s),
								this.compvare();
							continue e
						} else i = {}
					} else if (t === 223) {
						var s = this.readU32();
						if (s !== 0) {
							this.pushMapState(s),
								this.compvare();
							continue e
						} else i = {}
					} else if (t === 196) {
						var s = this.lookU8();
						i = this.decodeBinary(s, 1);
					} else if (t === 197) {
						var s = this.lookU16();
						i = this.decodeBinary(s, 2);
					} else if (t === 198) {
						var s = this.lookU32();
						i = this.decodeBinary(s, 4);
					} else if (t === 212)
						i = this.decodeExtension(1, 0);
					else if (t === 213)
						i = this.decodeExtension(2, 0);
					else if (t === 214)
						i = this.decodeExtension(4, 0);
					else if (t === 215)
						i = this.decodeExtension(8, 0);
					else if (t === 216)
						i = this.decodeExtension(16, 0);
					else if (t === 199) {
						var s = this.lookU8();
						i = this.decodeExtension(s, 1);
					} else if (t === 200) {
						var s = this.lookU16();
						i = this.decodeExtension(s, 2);
					} else if (t === 201) {
						var s = this.lookU32();
						i = this.decodeExtension(s, 4);
					} else throw new Pe("Unrecognized type byte: ".concat(Zi(t)));
					this.compvare();
					for (var r = this.stack; r.length > 0;) {
						var o = r[r.length - 1];
						if (o.type === 0)
							if (o.array[o.position] = i,
								o.position++,
								o.position === o.size)
								r.pop(),
									i = o.array;
							else continue e;
						else if (o.type === 1) {
							if (!Ia(i))
								throw new Pe("The type of key must be string or number but " + typeof i);
							if (i === "__proto__")
								throw new Pe("The key __proto__ is not allowed");
							o.key = i,
								o.type = 2;
							continue e
						} else if (o.map[o.key] = i,
							o.readCount++,
							o.readCount === o.size)
							r.pop(),
								i = o.map;
						else {
							o.key = null,
								o.type = 1;
							continue e
						}
					}
					return i
				}
			},
			e.prototype.readHeadByte = function () {
				return this.headByte === Dt && (this.headByte = this.readU8()),
					this.headByte
			},
			e.prototype.compvare = function () {
				this.headByte = Dt
			},
			e.prototype.readArraySize = function () {
				var t = this.readHeadByte();
				switch (t) {
					case 220: return this.readU16();
					case 221: return this.readU32();
					default: {
						if (t < 160)
							return t - 144;
						throw new Pe("Unrecognized array type byte: ".concat(Zi(t)));
					}
				}
			},
			e.prototype.pushMapState = function (t) {
				if (t > this.maxMapLength)
					throw new Pe("Max length exceeded: map length (".concat(t, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
				this.stack.push({
					type: 1,
					size: t,
					key: null,
					readCount: 0,
					map: {}
				});
			},
			e.prototype.pushArrayState = function (t) {
				if (t > this.maxArrayLength)
					throw new Pe("Max length exceeded: array length (".concat(t, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
				this.stack.push({
					type: 0,
					size: t,
					array: new Array(t),
					position: 0
				});
			},
			e.prototype.decodeUtf8String = function (t, i) {
				var s;
				if (t > this.maxStrLength)
					throw new Pe("Max length exceeded: UTF-8 byte length (".concat(t, ") > maxStrLength (").concat(this.maxStrLength, ")"));
				if (this.bytes.byteLength < this.pos + i + t)
					throw Cs;
				var n = this.pos + i, r;
				return this.stateIsMapKey() && (!((s = this.keyDecoder) === null || s === void 0) && s.canBeCached(t)) ? r = this.keyDecoder.decode(this.bytes, n, t) : t > sa ? r = ra(this.bytes, n, t) : r = _r(this.bytes, n, t),
					this.pos += i + t,
					r
			},
			e.prototype.stateIsMapKey = function () {
				if (this.stack.length > 0) {
					var t = this.stack[this.stack.length - 1];
					return t.type === 1
				}
				return false
			},
			e.prototype.decodeBinary = function (t, i) {
				if (t > this.maxBinLength)
					throw new Pe("Max length exceeded: bin length (".concat(t, ") > maxBinLength (").concat(this.maxBinLength, ")"));
				if (!this.hasRemaining(t + i))
					throw Cs;
				var s = this.pos + i,
					n = this.bytes.subarray(s, s + t);
				return this.pos += i + t,
					n
			},
			e.prototype.decodeExtension = function (t, i) {
				if (t > this.maxExtLength)
					throw new Pe("Max length exceeded: ext length (".concat(t, ") > maxExtLength (").concat(this.maxExtLength, ")"));
				var s = this.view.getInt8(this.pos + i),
					n = this.decodeBinary(t, i + 1);
				return this.extensionCodec.decode(n, s, this.context);
			},
			e.prototype.lookU8 = function () {
				return this.view.getUint8(this.pos);
			},
			e.prototype.lookU16 = function () {
				return this.view.getUint16(this.pos);
			},
			e.prototype.lookU32 = function () {
				return this.view.getUint32(this.pos);
			},
			e.prototype.readU8 = function () {
				var t = this.view.getUint8(this.pos);
				return this.pos++,
					t
			},
			e.prototype.readI8 = function () {
				var t = this.view.getInt8(this.pos);
				return this.pos++,
					t
			},
			e.prototype.readU16 = function () {
				var t = this.view.getUint16(this.pos);
				return this.pos += 2,
					t
			},
			e.prototype.readI16 = function () {
				var t = this.view.getInt16(this.pos);
				return this.pos += 2,
					t
			},
			e.prototype.readU32 = function () {
				var t = this.view.getUint32(this.pos);
				return this.pos += 4,
					t
			},
			e.prototype.readI32 = function () {
				var t = this.view.getInt32(this.pos);
				return this.pos += 4,
					t
			},
			e.prototype.readU64 = function () {
				var t = Jo(this.view, this.pos);
				return this.pos += 8,
					t
			},
			e.prototype.readI64 = function () {
				var t = Rr(this.view, this.pos);
				return this.pos += 8,
					t
			},
			e.prototype.readF32 = function () {
				var t = this.view.getFloat32(this.pos);
				return this.pos += 4,
					t
			},
			e.prototype.readF64 = function () {
				var t = this.view.getFloat64(this.pos);
				return this.pos += 8,
					t
			},
			e
	}();
export { Encoder, Decoder }

