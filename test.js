const angularYearlessLocale = require('./index');
const assert = require('assert');

const locales = `EEEE, dd. MMMM y
d MMMM, y 'ел', EEEE
y, MMMM d, EEEE
y MMMMའི་ཚེས་d, EEEE
d MMMM y EEEE
dd MMMM y
y d-MMMM، EEEE
EEEE, y. 'gada' d. MMMM
EEEE, d 'di' MMMM 'di' y
cccc d. MMMM y
EEEE, MMMM dd, y
EEEE, 'dä' d. MMMM y
d, MMMM y, EEEE
EEEE፣ dd MMMM መዓልቲ y G
EEEE, d בMMMM y
y-'ж'., d-MMMM, EEEE
y 'оны' MMM'ын' d. EEEE 'гараг'.
y թ. MMMM d, EEEE
EEEE, MMMM d, y
EEEE، d MMMM y
EEEE, སྤྱི་ལོ་y MMMM ཚེས་dd
EEEE, d MMMM y
EEEE, dd MMMM y
y년 M월 d일 EEEE
EEEE, d 'de' MMMM 'de' y
EEEE d 'di' MMMM 'dal' y
cccc, MMMM d. y
EEEE, d-'a' 'de' MMMM y
EEEE, d. MMMM y
EEEEที่ d MMMM G y
EEEE , 'lyɛ'̌ʼ d 'na' MMMM, y
EEEE, 'ils' d 'da' MMMM y
y年M月d日EEEE
EEEE ፣d MMMM y
EEEE, d. MMMM y.
EEEE د y د MMMM d
y MMMM d, EEEE
EEEE, d MMMM y 'г'.
y 'сыл' MMMM d 'күнэ', EEEE
EEEE, dd MMMM, y
EEEE, d MMMM, y
EEEE, d MMMM 'de' y
EEEE d. MMMM y
EEEE, d MMM, y
EEEE d MMMM y
y 'm'. MMMM d 'd'., EEEE
y年M月d日 EEEE
y('e')'ko' MMMM'ren' d('a'), EEEE
EEEE 'den' d. MMMM y
EEEE, y MMMM dd
EEEE, d-MMMM, y
EEEE, dd. MMMM y.
EEEE dd MMMM y
EEEE, d'mh' MMMM y
EEEE, d MMMM, y 'аз'
y. MMMM d., EEEE
EEEE, d MMMM y 'р'.
EEEE, d 'ta'’ MMMM y
EEEE, MMMM d 'lia' y
EEEE, dטן MMMM y
EEEE dd 'de' MMMM 'de' y
y 'ж'. d MMMM, EEEE
y၊ MMMM d၊ EEEE
EEEE ທີ d MMMM G y
d MMMM y, EEEE`;
const yearlessLocales = `EEEE, dd. MMMM
d MMMM, EEEE
MMMM d, EEEE
MMMMའི་ཚེས་d, EEEE
d MMMM EEEE
dd MMMM
d-MMMM، EEEE
EEEE, d. MMMM
EEEE, d 'di' MMMM
cccc d. MMMM
EEEE, MMMM dd
EEEE, 'dä' d. MMMM
d, MMMM, EEEE
EEEE፣ dd MMMM G
EEEE, d בMMMM
d-MMMM, EEEE
MMM'ын' d. EEEE 'гараг'.
MMMM d, EEEE
EEEE, MMMM d
EEEE، d MMMM
EEEE, MMMM ཚེས་dd
EEEE, d MMMM
EEEE, dd MMMM
M월 d일 EEEE
EEEE, d 'de' MMMM
EEEE d 'di' MMMM
cccc, MMMM d
EEEE, d-'a' 'de' MMMM
EEEE, d. MMMM
EEEEที่ d MMMM G
EEEE , 'lyɛ'̌ʼ d 'na' MMMM
EEEE, 'ils' d 'da' MMMM
M月d日EEEE
EEEE ፣d MMMM
EEEE, d. MMMM
EEEE د y د MMMM
MMMM d, EEEE
EEEE, d MMMM
MMMM d 'күнэ', EEEE
EEEE, dd MMMM
EEEE, d MMMM
EEEE, d MMMM
EEEE d. MMMM
EEEE, d MMM
EEEE d MMMM
MMMM d 'd'., EEEE
M月d日 EEEE
MMMM'ren' d('a'), EEEE
EEEE 'den' d. MMMM
EEEE, MMMM dd
EEEE, d-MMMM
EEEE, dd. MMMM
EEEE dd MMMM
EEEE, d'mh' MMMM
EEEE, d MMMM
MMMM d., EEEE
EEEE, d MMMM 'р'.
EEEE, d 'ta'’ MMMM
EEEE, MMMM d
EEEE, dטן MMMM
EEEE dd 'de' MMMM
d MMMM, EEEE
MMMM d၊ EEEE
EEEE ທີ d MMMM G
d MMMM, EEEE`;

describe('AngularYearlessLocale', () => {
  const localesArray = locales.split(/\n/g);
  const yearlessLocalesArray = yearlessLocales.split(/\n/);
  it('removes all years as expected', () => {
    localesArray.forEach((locale, index) => {
      assert.equal(angularYearlessLocale(locale), yearlessLocalesArray[index], `failure on locale "${locale}", index ${index}`);
    });
  });
});