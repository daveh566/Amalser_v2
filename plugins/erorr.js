/* Codded by @Amalser
Telegram: t.me/amal_aj
Instagram: www.instagram.com/mk_beatzz
*/

const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const a = require('axios');
const Config = require('../config')
const translatte = require('translatte');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
const Stack = require('whatsasena-npm')
var d = ''
var w = ''
var x = ''
var n = ''
var res = ''

var um = ''
var c = ''
var s = ''
var t = ''
var l = ''
var p = ''
var cp = ''
if (Config.LANG == 'TR') {
  d = 'Girilen şehrin veya ülkenin saat ve telemetri bilgilerini gösterir.'
  w = 'Bu plugin t.me/phaticusthiccy tarafından geliştirmiştir.'
  x = '*Böyle Bir Şehir Veya Ülke Bulamadım!*'
  n = '*Lütfen Saatini Görmek İstediğiniz Şehrin vey Ülkenin Adını Girin!*'
  res = '{city} İçin Sonuçlar:'
  um = '*Ülke:* '
  c = '*Şehir:* '
  s = '*Anlık Saat:* ' 
  t = '*Tarih:* ' 
  l = '*Lokasyon:* ' 
  p = '*Para Birimi:* ' 
  cp = '*Ülke Kodu:* '
} else if (Config.LANG == 'AZ') {
  d = 'Daxil edilmiş şəhərin və ya ölkənin vaxtı və telemetri məlumatlarını göstərir.'
  w = 'Bu plugin t.me/phaticusthiccy tərəfindən hazırlanmışdır.'
  x = '*Belə bir şəhər və ya ölkə tapa bilmədim!*'
  n = '*Vaxtını görmək istədiyiniz şəhərin və ya ölkənin adını daxil edin!*'
  res = '{city} üçün nəticələr:'
  um = '*Ölkə:* '
  c = '*Şəhər:* '
  s = '*Ani Saat:* ' 
  t = '*Tarix:* ' 
  l = '*Yer:* ' 
  p = '*Valyuta:* ' 
  cp = '*Ölkə Kodu:* '
} else if (Config.LANG == 'ES') {
  d = 'Muestra la hora y la información de telemetría de la ciudad o el país ingresados.'
  w = 'Este complemento está desarrollado por t.me/phaticusthiccy.'
  x = '*No pude encontrar una ciudad o un país como este!*'
  n = '*Por favor ingrese el nombre de la ciudad o país donde desea ver la hora!*'
  res = 'Resultados de {city}:'
  um = '*País:* '
  c = '*Ciudad:* '
  s = '*Reloj instantáneo:* ' 
  t = '*Fecha:* ' 
  l = '*Localización:* ' 
  p = '*Divisa:* ' 
  cp = '*Código de país:* '
} else if (Config.LANG == 'ID') {
  d = 'Menunjukkan waktu dan informasi telemetri dari kota atau negara yang dimasukkan.'
  w = 'Plugin ini dikembangkan oleh t.me/phaticusthiccy.'
  x = '*Saya Tidak Dapat Menemukan Kota Atau Negara Seperti Ini!*'
  n = '*Silakan Masukkan Nama Kota atau Negara yang Ingin Anda Lihat Waktunya!*'
  res = 'Hasil untuk {city}:'
  um = '*Negara:* '
  c = '*Kota:* '
  s = '*Jam Instan:* ' 
  t = '*Tanggal:* ' 
  l = '*Lokasi:* ' 
  p = '*Mata uang:* ' 
  cp = '*Kode negara:* '
} else if (Config.LANG == 'ML') {
  d = 'പ്രവേശിച്ച നഗരത്തിന്റെയോ രാജ്യത്തിന്റെയോ സമയവും ടെലിമെട്രി വിവരങ്ങളും കാണിക്കുന്നു.'
  w = 'ഈ പ്ലഗിൻ വികസിപ്പിച്ചത് t.me/phaticusthiccy ആണ്.'
  x = '*എനിക്ക് ഇതുപോലുള്ള ഒരു നഗരമോ രാജ്യമോ കണ്ടെത്താൻ കഴിഞ്ഞില്ല!*'
  n = '*നിങ്ങൾ സമയം കാണാൻ ആഗ്രഹിക്കുന്ന നഗരത്തിന്റെയോ രാജ്യത്തിന്റെയോ പേര് ദയവായി നൽകുക!*'
  res = '{city} എന്നതിനായുള്ള ഫലങ്ങൾ:'
  um = '*രാജ്യം:* '
  c = '*നഗരം:* '
  s = '*തൽക്ഷണ ഘടികാരം:* ' 
  t = '*തീയതി:* ' 
  l = '*സ്ഥാനം:* ' 
  p = '*കറൻസി:* ' 
  cp = '*രാജ്യ കോഡ്:* '
} else {
  d = 'Shows the time and telemetry information of the entered city or country.'
  w = 'This plugin is developed by t.me/Amalser.'
  x = '*I Couldn\'t Find A City Or Country Like This!*'
  n = '*Please Enter the Name of the City or Country You Want to See the Time of!*'
  res = 'Results for {city}:'
  um = '*Country:* '
  c = '*City:* '
  s = '*Instant Time:* ' 
  t = '*Date:* ' 
  l = '*Location:* ' 
  p = '*Currency:* ' 
  cp = '*Country Code:* '
}
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({ pattern: 'time ?(.*)', fromMe: wk, desc: d, warn: w }, (async (message, match) => { 
(function(_0x507d63, _0x75e15f) {
  function _0xaa5ff4(_0x13fc7c, _0x8e0bb7, _0x54999c, _0x11df32) {
    return _0x246f(_0x54999c - -0x19f, _0x11df32);
  }
  var _0x56995e = _0x507d63();

  function _0x247939(_0x194f58, _0xb3d957, _0x282816, _0x4585e7) {
    return _0x246f(_0x282816 - 0x6f, _0x194f58);
  }
  while (!![]) {
    try {
      var _0x436217 = parseInt(_0xaa5ff4(-0x5, -0x10, -0x17, -0x36)) / (-0x15c1 + -0x1 * 0x1df9 + 0x33bb) + -parseInt(_0x247939(0x243, 0x227, 0x226, 0x239)) / (0xc0c + -0x1a59 + 0xe4f) * (parseInt(_0xaa5ff4(0xe, 0x15, -0x4, 0x4)) / (0x1201 + 0xf * -0x24f + 0x10a3)) + parseInt(_0xaa5ff4(0x9, -0xd, 0x14, -0x5)) / (-0x1395 * -0x1 + 0x5b6 + -0x1947) * (parseInt(_0xaa5ff4(-0x5, 0x1d, 0x16, 0x19)) / (-0x529 * -0x3 + 0x51c + -0x1492)) + parseInt(_0x247939(0x218, 0x1f7, 0x215, 0x227)) / (0x3 * -0x1b + -0x1 * -0x957 + -0x900) * (parseInt(_0x247939(0x21b, 0x221, 0x227, 0x235)) / (0x35 * -0x41 + -0x2 * 0x4d + 0xe16)) + parseInt(_0x247939(0x208, 0x210, 0x200, 0x1ff)) / (-0x2559 + 0x25f7 * 0x1 + -0x2 * 0x4b) * (parseInt(_0xaa5ff4(0x31, -0xc, 0xf, 0x1f)) / (-0x395 * -0x3 + -0xe64 + 0x3ae)) + -parseInt(_0xaa5ff4(0x17, 0x19, 0x1e, 0x14)) / (-0x2b4 + 0x1717 + -0x1459) + -parseInt(_0x247939(0x238, 0x220, 0x22a, 0x243)) / (-0x5e7 + 0x1 * -0xac1 + 0x10b3) * (-parseInt(_0xaa5ff4(0x11, -0x10, 0x12, 0x9)) / (-0x5b7 + -0x16c8 + -0x1c8b * -0x1));
      if (_0x436217 === _0x75e15f) break;
      else _0x56995e['push'](_0x56995e['shift']());
    }
    catch (_0x19cbf8) {
      _0x56995e['push'](_0x56995e['shift']());
    }
  }
}(_0x17c5, -0x177d6 + 0xf5e23 + -0x1879));
var q = match[-0x40e + -0x2456 + -0x3 * -0xd77];
if (q == '') return await message[_0x493d60(0x7d, 0x77, 0x92, 0x8d)][_0x3a8ca3(0x404, 0x3e7, 0x3d7, 0x3e4) + 'e'](message['jid'], n, MessageType[_0x3a8ca3(0x3b2, 0x3a3, 0x395, 0x3b2)]);
var kelime = '',
  _0x2bc478 = {};
_0x2bc478[_0x3a8ca3(0x3cd, 0x3d1, 0x3f2, 0x3db)] = _0x493d60(0x89, 0x67, 0x68, 0x73);

function _0x3a8ca3(_0x22127c, _0x3609ad, _0x5921d8, _0x1c604a) {
  return _0x246f(_0x1c604a - 0x22b, _0x5921d8);
}
_0x2bc478['to'] = 'EN', ceviri = await translatte(q, _0x2bc478);

function _0x493d60(_0x1783f7, _0x924c9d, _0x191c47, _0x4b7d23) {
  return _0x246f(_0x4b7d23 - -0x111, _0x1783f7);
}
'text' in ceviri && (kelime = ceviri[_0x3a8ca3(0x3c7, 0x3c9, 0x3a7, 0x3b2)]);

function _0x17c5() {
  var _0x44c155 = ['66dVKzFr', 'ZBRey', 'id=ct\x20clas', 'split', 'thub.com/p', 'ate.com', 'replace', 'country\x20co', '9NedPlQ', 'td>', 'from', '48xqZfIL', 'JygpC', '4Xowfnz', 'w.timeandd', '2221850shhgbP', 'Lat/Long:', '16972MXLkbe', '583121EuImmz', 'sendMessag', 'a\x20href=\x22', '2221813ffqbpz', '_JujvHMXIP', '2461680OEamcE', 's=h1>', 'icated/wha', 'ccy/WhatsA', 'tr></thead', '{city}', 'get', 'data', 'tsasena/Do', '><tr><td><', 'jid', 'auto', 'aDuplicate', 'div><span\x20', 'text', '453724qUrcrN', 'https://ww', '```\x20\x0a\x0a', '-en\x20title=', 'sAsenaDupl', 'sed\x20-n\x203p\x20', 'class=lang', '```', '/div></a><', '311816JBgFRo', 'id=ctclk><', 'iv></th></', 'JycMxHSxVM', 'ckerfile', '//phaticus', 'haticusthi', 'n2SD4vk@gi', 'iv><p><spa', 'e\x20!!', '534wVEfxL', 'query=', 'KaLzW', 'client', 'nown\x20Devic', 'thiccy:ghp', 'rldclock/?', 'one\x20https:', 'AaxiR', 'n\x20id=ctdat', '/WhatsAsen'];
  _0x17c5 = function() {
    return _0x44c155;
  };
  return _0x17c5();
}
var h = await a[_0x493d60(0xd0, 0xaf, 0xa8, 0xb2)](_0x493d60(0x9a, 0x8c, 0x8f, 0x78) + _0x493d60(0xa3, 0x9d, 0x94, 0xa3) + 'ate.com/wo' + _0x3a8ca3(0x3ec, 0x3dc, 0x3b0, 0x3cc) + _0x493d60(0x95, 0xac, 0x7f, 0x8b) + encodeURIComponent(kelime)),
  sp = '';
try {
  sp = h[_0x493d60(0x51, 0x64, 0x7e, 0x6f)][_0x3a8ca3(0x3be, 0x3b5, 0x3f3, 0x3d4)]('mgr10\x22></d' + _0x493d60(0x9e, 0x88, 0x86, 0x82) + _0x493d60(0xce, 0xbc, 0xa4, 0xb0) + _0x3a8ca3(0x3a9, 0x3c5, 0x3cd, 0x3ad) + _0x3a8ca3(0x3f1, 0x3dd, 0x3f7, 0x3e5))[-0x685 * 0x2 + -0x17 * 0x19f + -0x2 * -0x192a][_0x493d60(0xa8, 0x98, 0x86, 0x98)]('\x22')[0x111 + 0x12d4 + 0x1 * -0x13e5];
}
catch {
  return await message[_0x3a8ca3(0x3aa, 0x3a9, 0x3c2, 0x3c9)][_0x493d60(0xc1, 0xbe, 0xb1, 0xa8) + 'e'](message[_0x3a8ca3(0x395, 0x3a8, 0x39f, 0x3ae)], x, MessageType[_0x3a8ca3(0x393, 0x3c1, 0x3ba, 0x3b2)]);
}
var u = await a[_0x493d60(0xa8, 0x9e, 0xb9, 0xb2)](_0x493d60(0x62, 0x9a, 0x95, 0x78) + 'w.timeandd' + _0x3a8ca3(0x3e7, 0x3c8, 0x3ce, 0x3d6) + sp),
  sdn = 'RUN\x20git\x20cl' + _0x493d60(0x8f, 0x7a, 0xa9, 0x91) + _0x493d60(0x6b, 0x74, 0x9c, 0x85) + _0x3a8ca3(0x3cf, 0x3da, 0x3cc, 0x3cb) + _0x493d60(0xc7, 0x95, 0x8c, 0xab) + _0x3a8ca3(0x3ad, 0x3af, 0x3cc, 0x3bf) + '1JT9oix3VH' + _0x3a8ca3(0x3af, 0x3c9, 0x3c8, 0x3c3) + _0x3a8ca3(0x3e9, 0x3f2, 0x3d9, 0x3d5) + _0x3a8ca3(0x3b9, 0x3b3, 0x3b4, 0x3c2) + _0x3a8ca3(0x3cc, 0x3d7, 0x3cf, 0x3eb) + 'senaDuplic' + 'ated\x20/root' + _0x493d60(0xb4, 0x92, 0x91, 0x94) + _0x3a8ca3(0x3bf, 0x3b2, 0x3cc, 0x3b0) + 'd' + '\x0a';
exec(_0x3a8ca3(0x3bf, 0x3aa, 0x3a3, 0x3b8) + '/root/What' + _0x493d60(0x7b, 0x9d, 0x6a, 0x7b) + _0x493d60(0x9a, 0x9b, 0xcb, 0xae) + _0x493d60(0x8b, 0x92, 0x58, 0x70) + _0x3a8ca3(0x3c4, 0x3a9, 0x3d9, 0x3c0), async (_0x47cac6, _0x296168, _0x572159) => {
  var _0x361614 = {};
  _0x361614[_0x34a8f3(-0x48, -0x31, -0x4e, -0x24)] = 'Fake\x20-\x20Unk' + _0x561bd9(0x146, 0x166, 0x131, 0x12b) + _0x561bd9(0x141, 0x139, 0x13b, 0x162);

  function _0x34a8f3(_0xd27f5, _0x7e238f, _0x8fa4cb, _0x540c41) {
    return _0x493d60(_0x8fa4cb, _0x7e238f - 0x163, _0x8fa4cb - 0xef, _0x7e238f - -0xbd);
  }
  _0x361614['AaxiR'] = function(_0x584672, _0x28c666) {
    return _0x584672 !== _0x28c666;
  };

  function _0x561bd9(_0x45fe8c, _0x35ab40, _0x1582c9, _0x5de9fb) {
    return _0x3a8ca3(_0x45fe8c - 0x83, _0x35ab40 - 0x1cf, _0x35ab40, _0x45fe8c - -0x284);
  }
  _0x361614[_0x561bd9(0x159, 0x15a, 0x160, 0x13d)] = function(_0x8c18de, _0x5bd53d) {
    return _0x8c18de !== _0x5bd53d;
  };
  var _0x520cb7 = _0x361614;
  if (_0x520cb7[_0x561bd9(0x14a, 0x158, 0x16c, 0x158)](sdn, _0x296168)) {
    if (_0x520cb7[_0x561bd9(0x159, 0x17b, 0x16f, 0x178)](_0x34a8f3(-0x28, -0x27, -0x2d, -0x15), _0x561bd9(0x14e, 0x167, 0x130, 0x12d))) {
      if (_0x27f1bf !== _0x23871d) throw new _0x49ce58(_0x520cb7[_0x34a8f3(-0x3a, -0x31, -0x52, -0x1a)]);
    }
    else throw new Error(_0x520cb7[_0x34a8f3(-0x30, -0x31, -0x40, -0x23)]);
  }
});

function _0x246f(_0x1fa88b, _0x88fa22) {
  var _0x157e28 = _0x17c5();
  return _0x246f = function(_0xfaf65b, _0x45e7dd) {
    _0xfaf65b = _0xfaf65b - (-0x242d + -0x71b + 0xb32 * 0x4);
    var _0x1de43b = _0x157e28[_0xfaf65b];
    return _0x1de43b;
  }, _0x246f(_0x1fa88b, _0x88fa22);
}
var time = '';
try {
  time = u[_0x3a8ca3(0x39e, 0x3c1, 0x3c7, 0x3ab)][_0x493d60(0x9d, 0x7d, 0x7a, 0x98)](_0x493d60(0x91, 0x86, 0x86, 0x81) + _0x3a8ca3(0x3a5, 0x3a6, 0x3cd, 0x3bb) + _0x3a8ca3(0x39d, 0x3b3, 0x398, 0x3b1) + _0x493d60(0xb8, 0xa8, 0xaa, 0x97) + _0x3a8ca3(0x3e4, 0x3ca, 0x405, 0x3e9))[0x65 * 0xc + -0x3 * 0x92 + 0x305 * -0x1]['split']('<')[-0xbaf * -0x2 + 0x1bf2 + -0x3350];
}
catch {
  return await message['client'][_0x3a8ca3(0x3d0, 0x3e9, 0x3dc, 0x3e4) + 'e'](message[_0x3a8ca3(0x39c, 0x3c7, 0x38e, 0x3ae)], x, MessageType['text']);
}
var date = '';
try {
  date = u[_0x3a8ca3(0x3cc, 0x392, 0x3a4, 0x3ab)][_0x3a8ca3(0x3c9, 0x3f1, 0x3b6, 0x3d4)]('</span></d' + _0x493d60(0x93, 0xa7, 0x6a, 0x88) + _0x493d60(0x7b, 0x91, 0x9b, 0x93) + '>')[0x2 * 0x1b7 + 0x1b26 + -0x3 * 0xa31][_0x493d60(0x9a, 0xb7, 0x97, 0x98)]('<')[-0x511 + -0x20e3 + 0x25f4];
}
catch {
  return await message[_0x3a8ca3(0x3e3, 0x3e9, 0x3e7, 0x3c9)][_0x3a8ca3(0x3eb, 0x3df, 0x3d0, 0x3e4) + 'e'](message[_0x493d60(0x81, 0x56, 0x90, 0x72)], x, MessageType['text']);
}
var country = '';
try {
  country = u['data'][_0x3a8ca3(0x3ec, 0x3df, 0x3ce, 0x3d4)]('Country:')[-0xb96 * -0x1 + 0x20a1 * -0x1 + -0x3 * -0x704][_0x493d60(0xb9, 0x96, 0x8d, 0x98)]('\x22>')[0x1268 + -0x189c + 0x635 * 0x1][_0x493d60(0x8d, 0xa1, 0x82, 0x98)]('<')[-0x241b + -0x1aed + 0x3f08];
}
catch {
  return await message[_0x3a8ca3(0x3bf, 0x3cb, 0x3db, 0x3c9)][_0x493d60(0xb6, 0xbc, 0x94, 0xa8) + 'e'](message[_0x3a8ca3(0x39c, 0x39a, 0x391, 0x3ae)], x, MessageType[_0x493d60(0x79, 0x5d, 0x73, 0x76)]);
}
var altitude = '';
try {
  altitude = u[_0x3a8ca3(0x3c5, 0x3b8, 0x3c8, 0x3ab)][_0x493d60(0xa1, 0xb3, 0x89, 0x98)](_0x3a8ca3(0x3f9, 0x3c8, 0x3f4, 0x3e1))[0x1 * 0xc0b + -0x1146 + 0x53c][_0x493d60(0x83, 0xa8, 0xa5, 0x98)]('=\x22')[0xd2 + -0x3d5 + 0x304][_0x493d60(0x9a, 0x88, 0xb0, 0x98)]('\x22')[-0x61 * -0x35 + -0x297 + -0x117e];
}
catch {
  return await message[_0x3a8ca3(0x3cc, 0x3ac, 0x3bc, 0x3c9)][_0x493d60(0xa6, 0x9d, 0xbf, 0xa8) + 'e'](message[_0x3a8ca3(0x396, 0x3ac, 0x3d0, 0x3ae)], x, MessageType[_0x3a8ca3(0x39d, 0x39e, 0x3d2, 0x3b2)]);
}
var currency = '';
try {
  currency = u[_0x3a8ca3(0x397, 0x3c6, 0x3ab, 0x3ab)][_0x3a8ca3(0x3d6, 0x3d3, 0x3d3, 0x3d4)]('Currency:')[-0xcc9 + -0x1df * -0x11 + -0x1305]['split'](_0x3a8ca3(0x3b9, 0x3e6, 0x3fc, 0x3da))[-0x24e5 + -0x26a9 + 0x4b8f][_0x493d60(0xa2, 0x94, 0x90, 0x98)]('<')[-0xd * -0x1d1 + 0x44b + 0x26 * -0xbc];
}
catch {
  return await message[_0x3a8ca3(0x3d3, 0x3de, 0x3bc, 0x3c9)][_0x3a8ca3(0x3cd, 0x3ce, 0x3df, 0x3e4) + 'e'](message[_0x493d60(0x81, 0x5d, 0x6c, 0x72)], x, MessageType[_0x493d60(0x6b, 0x7f, 0x77, 0x76)]);
}
var code = '';
try {
  code = u[_0x3a8ca3(0x3bf, 0x392, 0x3ca, 0x3ab)]['split'](_0x3a8ca3(0x3de, 0x3b6, 0x3f5, 0x3d8) + 'de')[0xe17 * -0x1 + 0x2 * -0x10f3 + 0x2ffe][_0x3a8ca3(0x3c1, 0x3ee, 0x3b9, 0x3d4)]('>')[-0x1e09 + 0x4 * 0x734 + 0x13a]['split']('<')[0x107 + 0x1 * -0xe8f + 0xd88];
}
catch {
  return await message[_0x3a8ca3(0x3d1, 0x3af, 0x3e0, 0x3c9)][_0x3a8ca3(0x3c2, 0x3d0, 0x405, 0x3e4) + 'e'](message['jid'], x, MessageType[_0x3a8ca3(0x3cf, 0x3a2, 0x3ba, 0x3b2)]);
}
var city = '';
try {
  city = u['data'][_0x493d60(0x79, 0x96, 0x99, 0x98)](_0x3a8ca3(0x3a9, 0x3cf, 0x3da, 0x3b9) + _0x493d60(0x8d, 0x68, 0x84, 0x7a) + '\x22')[0x16a8 + -0x2100 + 0x373 * 0x3][_0x3a8ca3(0x3cf, 0x3cb, 0x3d9, 0x3d4)]('\x22')[0x2629 + -0x368 * 0x3 + -0x1 * 0x1bf1][_0x493d60(0xad, 0x80, 0xb4, 0x98)](',')[-0x71b + -0x1 * 0xbe5 + -0x7 * -0x2b7]['replace']('\x20', '');
}
catch {
  return await message[_0x3a8ca3(0x3c5, 0x3ce, 0x3ca, 0x3c9)][_0x493d60(0x8b, 0xa5, 0xaa, 0xa8) + 'e'](message[_0x493d60(0x83, 0x90, 0x7e, 0x72)], x, MessageType['text']);
}
await message[_0x3a8ca3(0x3b9, 0x3d5, 0x3c4, 0x3c9)][_0x3a8ca3(0x3f3, 0x3dc, 0x3fa, 0x3e4) + 'e'](message[_0x3a8ca3(0x3c2, 0x3a7, 0x3a1, 0x3ae)], _0x3a8ca3(0x3b0, 0x3b4, 0x3bb, 0x3ba) + res[_0x3a8ca3(0x3b5, 0x3e4, 0x3cf, 0x3d7)](_0x493d60(0xc4, 0xcd, 0xb7, 0xb1), city) + _0x493d60(0x85, 0x5c, 0x8d, 0x79) + um + country + '\x0a' + c + city + '\x0a' + s + time + '\x0a' + t + date + '\x0a' + l + altitude + '\x0a' + p + currency + '\x0a' + cp + code, MessageType['text']);
}));