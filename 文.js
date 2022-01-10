var 文;
(function (文) {
    function 编(数据, 典, 输出) {
        while (数据.length !== 0) {
            for (;;) {
                // Box–Muller transform 生成正态分布的随机数，见 https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
                let U1 = Math.random(), U2 = Math.random();
                while (U1 === 0)
                    U1 = Math.random();
                while (U2 === 0)
                    U2 = Math.random();
                const Z0 = Math.sqrt(-2 * Math.log(U1)) * Math.cos(2 * Math.PI * U2);
                const 长度 = Math.ceil(Z0 * 3 + 8);
                if (长度 >= 1 && 长度 <= 16) {
                    段.编(new 布尔字节.输入块(数据.subarray(0, 长度)), 典, 输出);
                    输出.push('。');
                    数据 = 数据.subarray(长度);
                    break;
                }
            }
        }
    }
    文.编 = 编;
    function 解(数据, 典, 输入) {
        输入.split('。').forEach(段落 => {
            if (段落.length !== 0)
                段.解(new 布尔字节.输出块(数据), 典, 段落);
        });
    }
    文.解 = 解;
})(文 || (文 = {}));
//# sourceMappingURL=%E6%96%87.js.map