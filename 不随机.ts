const a1 = [], a2 = []

namespace 不随机 {
    function 生成整数(块: 布尔字节.输入块, 小: number, 大: number): number {
        while (!块.到头了() && 小 !== 大) {
            const 中 = (小 + 大) >>> 1
            if (块.获取当前并前进()) 小 = 中 + 1
            else 大 = 中
        }
        return 小 !== 大 ? Math.floor(Math.random() * (大 - 小 + 1)) + 小 : 小
    }

    export function 生成编号(块: 布尔字节.输入块, 大小: number): number {
        const t = 生成整数(块, 0, 大小 - 1)
        a1.push(t)
        return t
    }

    function 提取整数(块: 布尔字节.输出块, 小: number, 大: number, 果: number) {
        while (!块.到头了() && 小 !== 大) {
            const 中 = (小 + 大) >>> 1
            if (果 > 中) {
                小 = 中 + 1
                块.设置当前并前进(true)
            } else {
                大 = 中
                块.设置当前并前进(false)
            }
        }
    }

    export function 提取编号(块: 布尔字节.输出块, 大小: number, 果: number) {
        a2.push(果)
        提取整数(块, 0, 大小 - 1, 果)
    }
}