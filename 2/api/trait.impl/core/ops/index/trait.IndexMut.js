(function() {var implementors = {
"heapless":[["impl&lt;'a, K, Q, V, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.reference.html\">&amp;'a Q</a>&gt; for <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;Q&gt;,\n    Q: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div>"],["impl&lt;'a, K, V, Q, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.reference.html\">&amp;'a Q</a>&gt; for <a class=\"struct\" href=\"heapless/struct.LinearMap.html\" title=\"struct heapless::LinearMap\">LinearMap</a>&lt;K, V, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;Q&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"]],
"indexmap":[["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeFrom.html\" title=\"struct core::ops::range::RangeFrom\">RangeFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeTo.html\" title=\"struct core::ops::range::RangeTo\">RangeTo</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;(<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/enum.Bound.html\" title=\"enum core::ops::range::Bound\">Bound</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/enum.Bound.html\" title=\"enum core::ops::range::Bound\">Bound</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;)&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeInclusive.html\" title=\"struct core::ops::range::RangeInclusive\">RangeInclusive</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeFull.html\" title=\"struct core::ops::range::RangeFull\">RangeFull</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;(<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/enum.Bound.html\" title=\"enum core::ops::range::Bound\">Bound</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/enum.Bound.html\" title=\"enum core::ops::range::Bound\">Bound</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;)&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeFrom.html\" title=\"struct core::ops::range::RangeFrom\">RangeFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V, Q, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Q</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"indexmap/trait.Equivalent.html\" title=\"trait indexmap::Equivalent\">Equivalent</a>&lt;K&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeInclusive.html\" title=\"struct core::ops::range::RangeInclusive\">RangeInclusive</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeFull.html\" title=\"struct core::ops::range::RangeFull\">RangeFull</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeToInclusive.html\" title=\"struct core::ops::range::RangeToInclusive\">RangeToInclusive</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeToInclusive.html\" title=\"struct core::ops::range::RangeToInclusive\">RangeToInclusive</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/index/trait.IndexMut.html\" title=\"trait core::ops::index::IndexMut\">IndexMut</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/range/struct.RangeTo.html\" title=\"struct core::ops::range::RangeTo\">RangeTo</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()