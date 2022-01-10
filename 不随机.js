const a1 = [], a2 = [];
var 不随机;
(function (不随机) {
    function 生成整数(块, 小, 大) {
        while (!块.到头了() && 小 !== 大) {
            const 中 = (小 + 大) >>> 1;
            if (块.获取当前并前进())
                小 = 中 + 1;
            else
                大 = 中;
        }
        return 小 !== 大 ? Math.floor(Math.random() * (大 - 小 + 1)) + 小 : 小;
    }
    function 生成编号(块, 大小) {
        const t = 生成整数(块, 0, 大小 - 1);
        a1.push(t);
        return t;
    }
    不随机.生成编号 = 生成编号;
    function 提取整数(块, 小, 大, 果) {
        while (!块.到头了() && 小 !== 大) {
            const 中 = (小 + 大) >>> 1;
            if (果 > 中) {
                小 = 中 + 1;
                块.设置当前并前进(true);
            }
            else {
                大 = 中;
                块.设置当前并前进(false);
            }
        }
    }
    function 提取编号(块, 大小, 果) {
        a2.push(果);
        提取整数(块, 0, 大小 - 1, 果);
    }
    不随机.提取编号 = 提取编号;
})(不随机 || (不随机 = {}));
//# sourceMappingURL=%E4%B8%8D%E9%9A%8F%E6%9C%BA.js.map