var 段;
(function (段) {
    function 编(块, 典, 输出) {
        for (;;) {
            const t = 典[Math.floor(Math.random() * 典.length)];
            句.编(块, t, 输出);
            if (块.到头了())
                return;
            输出.push('；');
        }
    }
    段.编 = 编;
    function 解(块, 典, 输入) {
        输入.split('；').forEach(句子 => {
            for (let 式 of 典)
                if (句.解(块, 式, 句子))
                    break;
        });
    }
    段.解 = 解;
})(段 || (段 = {}));
//# sourceMappingURL=%E6%AE%B5.js.map