/**
 *randomString
 *随机字符串生成
 */
class randomString {
    constructor(randomLen, min, max) {
        this.randomLen = randomLen
        this.min = min
        this.max = max
    }
    createString() {
        var str = "",
            range = this.min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
            ];
        // 随机产生
        if (this.randomLen) {
            range = Math.round(Math.random() * (this.max - this.min)) + this.min;
        }
        for (var i = 0; i < range; i++) {
            var pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    }
}
module.exports = randomString