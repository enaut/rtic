(function() {var implementors = {
"hashbrown":[["impl&lt;T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"hashbrown/hash_table/struct.HashTable.html\" title=\"struct hashbrown::hash_table::HashTable\">HashTable</a>&lt;T, A&gt;<div class=\"where\">where\n    A: Allocator,</div>"],["impl&lt;'a, K, V, S, A: Allocator&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;"],["impl&lt;'a, T, S, A: Allocator&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;"],["impl&lt;'a, K, V, S, A: Allocator&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;"],["impl&lt;T, A: Allocator&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"hashbrown/raw/struct.RawTable.html\" title=\"struct hashbrown::raw::RawTable\">RawTable</a>&lt;T, A&gt;"],["impl&lt;'a, T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"hashbrown/hash_table/struct.HashTable.html\" title=\"struct hashbrown::hash_table::HashTable\">HashTable</a>&lt;T, A&gt;<div class=\"where\">where\n    A: Allocator,</div>"],["impl&lt;'a, T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"hashbrown/hash_table/struct.HashTable.html\" title=\"struct hashbrown::hash_table::HashTable\">HashTable</a>&lt;T, A&gt;<div class=\"where\">where\n    A: Allocator,</div>"],["impl&lt;T, S, A: Allocator&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;"],["impl&lt;K, V, S, A: Allocator&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;"]],
"heapless":[["impl&lt;'a, T, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/struct.IndexSet.html\" title=\"struct heapless::IndexSet\">IndexSet</a>&lt;T, S, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div>"],["impl&lt;'a, T, K, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/binary_heap/struct.BinaryHeap.html\" title=\"struct heapless::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T, K, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"heapless/binary_heap/trait.Kind.html\" title=\"trait heapless::binary_heap::Kind\">Kind</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,</div>"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/spsc/struct.Queue.html\" title=\"struct heapless::spsc::Queue\">Queue</a>&lt;T, N&gt;"],["impl&lt;'a, K, V, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"heapless/struct.Deque.html\" title=\"struct heapless::Deque\">Deque</a>&lt;T, N&gt;"],["impl&lt;'a, K, V, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/struct.LinearMap.html\" title=\"struct heapless::LinearMap\">LinearMap</a>&lt;K, V, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;'a, K, V, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"heapless/struct.Deque.html\" title=\"struct heapless::Deque\">Deque</a>&lt;T, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"heapless/spsc/struct.Queue.html\" title=\"struct heapless::spsc::Queue\">Queue</a>&lt;T, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/struct.Deque.html\" title=\"struct heapless::Deque\">Deque</a>&lt;T, N&gt;"],["impl&lt;K, V, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt;"],["impl&lt;'a, T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;"]],
"indexmap":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"indexmap/set/struct.Slice.html\" title=\"struct indexmap::set::Slice\">Slice</a>&lt;T&gt;"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;&gt;"],["impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"indexmap/set/struct.Slice.html\" title=\"struct indexmap::set::Slice\">Slice</a>&lt;T&gt;&gt;"],["impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;"],["impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;"],["impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for &amp;'a mut <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()