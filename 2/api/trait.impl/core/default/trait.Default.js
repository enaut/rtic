(function() {var implementors = {
"byteorder":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"byteorder/enum.LittleEndian.html\" title=\"enum byteorder::LittleEndian\">LittleEndian</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"byteorder/enum.BigEndian.html\" title=\"enum byteorder::BigEndian\">BigEndian</a>"]],
"futures_util":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"futures_util/stream/enum.PollNext.html\" title=\"enum futures_util::stream::PollNext\">PollNext</a>"],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"futures_util/future/struct.OptionFuture.html\" title=\"struct futures_util::future::OptionFuture\">OptionFuture</a>&lt;F&gt;"]],
"hash32":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hash32/struct.FnvHasher.html\" title=\"struct hash32::FnvHasher\">Hasher</a>"],["impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hash32/struct.BuildHasherDefault.html\" title=\"struct hash32::BuildHasherDefault\">BuildHasherDefault</a>&lt;H&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hash32/struct.Murmur3Hasher.html\" title=\"struct hash32::Murmur3Hasher\">Hasher</a>"]],
"hashbrown":[["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator,</div>"],["impl&lt;T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hashbrown/hash_table/struct.HashTable.html\" title=\"struct hashbrown::hash_table::HashTable\">HashTable</a>&lt;T, A&gt;<div class=\"where\">where\n    A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Allocator,</div>"],["impl&lt;T, A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hashbrown/raw/struct.RawTable.html\" title=\"struct hashbrown::raw::RawTable\">RawTable</a>&lt;T, A&gt;"]],
"heapless":[["impl&lt;T, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.IndexSet.html\" title=\"struct heapless::IndexSet\">IndexSet</a>&lt;T, S, N&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.HistoryBuffer.html\" title=\"struct heapless::HistoryBuffer\">HistoryBuffer</a>&lt;T, N&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.Deque.html\" title=\"struct heapless::Deque\">Deque</a>&lt;T, N&gt;"],["impl&lt;K, V, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.LinearMap.html\" title=\"struct heapless::LinearMap\">LinearMap</a>&lt;K, V, N&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"],["impl&lt;T, K, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/binary_heap/struct.BinaryHeap.html\" title=\"struct heapless::binary_heap::BinaryHeap\">BinaryHeap</a>&lt;T, K, N&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,\n    K: <a class=\"trait\" href=\"heapless/binary_heap/trait.Kind.html\" title=\"trait heapless::binary_heap::Kind\">Kind</a>,</div>"],["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.String.html\" title=\"struct heapless::String\">String</a>&lt;N&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/mpmc/struct.MpMcQueue.html\" title=\"struct heapless::mpmc::MpMcQueue\">MpMcQueue</a>&lt;T, N&gt;"],["impl&lt;K, V, S, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.IndexMap.html\" title=\"struct heapless::IndexMap\">IndexMap</a>&lt;K, V, S, N&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/spsc/struct.Queue.html\" title=\"struct heapless::spsc::Queue\">Queue</a>&lt;T, N&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"heapless/struct.Vec.html\" title=\"struct heapless::Vec\">Vec</a>&lt;T, N&gt;"]],
"indexmap":[["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.Keys.html\" title=\"struct indexmap::map::Keys\">Keys</a>&lt;'_, K, V&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for &amp;<a class=\"struct\" href=\"indexmap/set/struct.Slice.html\" title=\"struct indexmap::set::Slice\">Slice</a>&lt;T&gt;"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for &amp;mut <a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/set/struct.IntoIter.html\" title=\"struct indexmap::set::IntoIter\">IntoIter</a>&lt;T&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.Values.html\" title=\"struct indexmap::map::Values\">Values</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.IterMut.html\" title=\"struct indexmap::map::IterMut\">IterMut</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for &amp;<a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.IntoIter.html\" title=\"struct indexmap::map::IntoIter\">IntoIter</a>&lt;K, V&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/set/struct.Iter.html\" title=\"struct indexmap::set::Iter\">Iter</a>&lt;'_, T&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.IntoKeys.html\" title=\"struct indexmap::map::IntoKeys\">IntoKeys</a>&lt;K, V&gt;"],["impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"indexmap/set/struct.Slice.html\" title=\"struct indexmap::set::Slice\">Slice</a>&lt;T&gt;&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.ValuesMut.html\" title=\"struct indexmap::map::ValuesMut\">ValuesMut</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.IntoValues.html\" title=\"struct indexmap::map::IntoValues\">IntoValues</a>&lt;K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"indexmap/map/struct.Iter.html\" title=\"struct indexmap::map::Iter\">Iter</a>&lt;'_, K, V&gt;"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;&gt;"]],
"portable_atomic":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU8.html\" title=\"struct portable_atomic::AtomicU8\">AtomicU8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicUsize.html\" title=\"struct portable_atomic::AtomicUsize\">AtomicUsize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicBool.html\" title=\"struct portable_atomic::AtomicBool\">AtomicBool</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI16.html\" title=\"struct portable_atomic::AtomicI16\">AtomicI16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI8.html\" title=\"struct portable_atomic::AtomicI8\">AtomicI8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU16.html\" title=\"struct portable_atomic::AtomicU16\">AtomicU16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI64.html\" title=\"struct portable_atomic::AtomicI64\">AtomicI64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI32.html\" title=\"struct portable_atomic::AtomicI32\">AtomicI32</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicPtr.html\" title=\"struct portable_atomic::AtomicPtr\">AtomicPtr</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU32.html\" title=\"struct portable_atomic::AtomicU32\">AtomicU32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU64.html\" title=\"struct portable_atomic::AtomicU64\">AtomicU64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"portable_atomic/struct.AtomicIsize.html\" title=\"struct portable_atomic::AtomicIsize\">AtomicIsize</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()