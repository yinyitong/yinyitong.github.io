var 隐译通;
(function (隐译通) {
    const 典 = [
        [
            ["持续", "全面"],
            ["推动", "深化", "推进"],
            ["基层治理体制机制"],
            ["改革", "改革攻坚", "改革创新"],
            ["，将"],
            ["服务", "管理", "制度", "秩序", "意识", "重点", "资源", "渠道"],
            ["、"],
            ["职能", "能力", "格局", "焦点"],
            ["、"],
            ["活力", "信念", "风尚", "热点", "保障", "行动", "方案", "措施", "沟通"],
            ["精准下沉", "统筹兼顾", "贯彻始终", "切实抓好", "扎实推进", "狠抓落实", "做深、做细、做实", "持续推进", "巩固深化", "一抓到底"],
            ["，形成了"],
            ["管理有力", "资源到位", "制度完备", "动能充足"],
            ["、"],
            ["服务高效", "方向明确", "重点突出", "竞争有序"],
            ["、"],
            ["职能科学", "治理完善"],
            ["的"],
            ["行政管理模式", "市场制度规则", "治理体制机制", "协同监管机制", "发展模式", "人权发展道路", "市场体系"],
            ["，有效提升了治理能力、服务效能和发展质量，给"],
            ["老百姓", "人民", "群众"],
            ["带来了"],
            ["实实在在", "切切实实", "踏踏实实", "实打实", "扎扎实实"],
            ["的"],
            ["幸福", "获得", "认同"],
            ["感、"],
            ["荣誉", "成就"],
            ["感"]
        ],
        [
            ["推动"],
            ["品牌", "标准", "基地", "制度", "程序", "集约"],
            ["化、"],
            ["法制", "规范", "有序", "常态", "专业", "网格", "精细"],
            ["化、"],
            ["正常", "智能", "优质", "科学", "年轻", "知识"],
            ["化发展，致力于"],
            ["构建", "构筑", "形成"],
            ["高效", "科学", "有效", "完善", "全面", "规范", "有序", "优质", "优良", "完整", "良好", "健康", "合理", "稳定", "平衡", "均衡", "稳健", "平稳", "现代"],
            ["的"],
            ["行政管理模式", "市场制度规则", "治理体制机制", "协同监管机制", "发展模式", "人权发展道路", "市场体系"],
            ["，"],
            ["打造", "铸成"],
            ["拳头产品和优势产业"]
        ],
        // [
        //     ["统一"],
        //     ["思想", "源头", "标准", "精神", "口径", "信用代码", "命名", "数据", "文本格式"],
        //     ["，开展"],
        //     ["活动", "党史教育", "批评与自我批评", "会议", "科研项目", "工作会议"]
        // ],
        // [
        //     ["创建"],
        //     ["文明城市", "窗口", "品牌效应", "文明体系", "标准化企业", "完善的制度", "标准化项目工程"],
        //     ["，建设"],
        //     ["美好家园", "标准化企业", "高科技产业园", "新零售生态系统"]
        // ],
        // [
        //     ["不忘"],
        //     ["初心", "过去", "警钟", "国耻"],
        //     ["，牢记"],
        //     ["使命", "历史", "安全", "振兴"]
        // ],
        // [
        //     ["当地"],
        //     ["街道", "社区", "企业", "公司", "产业", "国营企业", "党支部", "工厂", "院校", "民营企业"],
        //     ["利用"],
        //     ["窗口，", "宣传栏，", "LED显示屏，", "可变情报板，", "传单，"],
        //     ["宣讲", "宣传"],
        //     ["全会精神，"],
        //     ["结合"],
        //     ["实际", "身边琐事", "变化", "为民办实事"],
        //     ["帮助"],
        //     ["员工", "领导班子", "校职员工", "学生", "工人", "企业家", "个体工商户", "群众", "离退休人员", "社会青年"],
        //     ["深入"],
        //     ["理解", "贯彻", "领会"],
        //     ["精神内涵，"],
        //     ["夯实基础、"],
        //     ["立足当下，"],
        //     ["坚持"],
        //     ["理想，", "改革创新，", "为高质量发展提供科技创新支撑，", "可持续发展共建亚太命运共同体，", "以公平正义为理念引领全球治理体系改革"],
        //     ["开创", "建设", "打造", "改善", "创建", "推动", "共建"],
        //     ["社会主义家庭文明新风尚", "美好家园", "融入健康理念建设更舒适的人居环境", "和谐社会", "发展经济共建和谐"]
        // ]
    ];
    function 编(原文) {
        const 输出 = [];
        文.编(new TextEncoder().encode(原文), 典, 输出);
        return 输出.join('');
    }
    隐译通.编 = 编;
    function 解(密文) {
        const 缓冲 = new 字节缓冲();
        文.解(缓冲, 典, 密文);
        return new TextDecoder().decode(缓冲.结果());
    }
    隐译通.解 = 解;
})(隐译通 || (隐译通 = {}));
//# sourceMappingURL=%E9%9A%90%E8%AF%91%E9%80%9A.js.map