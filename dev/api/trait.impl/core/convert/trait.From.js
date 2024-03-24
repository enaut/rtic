(function() {var implementors = {
"embedded_hal":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.bool.html\">bool</a>&gt; for <a class=\"enum\" href=\"embedded_hal/digital/enum.PinState.html\" title=\"enum embedded_hal::digital::PinState\">PinState</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"embedded_hal/digital/enum.PinState.html\" title=\"enum embedded_hal::digital::PinState\">PinState</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.bool.html\">bool</a>"]],
"fugit":[["impl&lt;const NOM: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>, const DENOM: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fugit/struct.Rate.html\" title=\"struct fugit::Rate\">Rate</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>, NOM, DENOM&gt;&gt; for <a class=\"struct\" href=\"fugit/struct.Rate.html\" title=\"struct fugit::Rate\">Rate</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u64.html\">u64</a>, NOM, DENOM&gt;"],["impl&lt;const NOM: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>, const DENOM: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fugit/struct.Duration.html\" title=\"struct fugit::Duration\">Duration</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>, NOM, DENOM&gt;&gt; for <a class=\"struct\" href=\"fugit/struct.Duration.html\" title=\"struct fugit::Duration\">Duration</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u64.html\">u64</a>, NOM, DENOM&gt;"]],
"futures_task":[["impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"futures_task/struct.FutureObj.html\" title=\"struct futures_task::FutureObj\">FutureObj</a>&lt;'a, T&gt;&gt; for <a class=\"struct\" href=\"futures_task/struct.LocalFutureObj.html\" title=\"struct futures_task::LocalFutureObj\">LocalFutureObj</a>&lt;'a, T&gt;"]],
"futures_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"futures_util/future/struct.OptionFuture.html\" title=\"struct futures_util::future::OptionFuture\">OptionFuture</a>&lt;T&gt;"]],
"hashbrown":[["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.unit.html\">()</a>, S, A&gt;&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    A: Allocator,</div>"]],
"indexmap":[["impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"indexmap/map/struct.Slice.html\" title=\"struct indexmap::map::Slice\">Slice</a>&lt;K, V&gt;&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/set/struct.Slice.html\" title=\"struct indexmap::set::Slice\">Slice</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"struct\" href=\"indexmap/set/struct.Slice.html\" title=\"struct indexmap::set::Slice\">Slice</a>&lt;T&gt;&gt;"],["impl&lt;T, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">[T; N]</a>&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/hash/random/struct.RandomState.html\" title=\"struct std::hash::random::RandomState\">RandomState</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div>"],["impl&lt;K, V, const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(K, V)</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">N</a>]&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/hash/random/struct.RandomState.html\" title=\"struct std::hash::random::RandomState\">RandomState</a>&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div>"]],
"portable_atomic":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.i8.html\">i8</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI8.html\" title=\"struct portable_atomic::AtomicI8\">AtomicI8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicUsize.html\" title=\"struct portable_atomic::AtomicUsize\">AtomicUsize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU64.html\" title=\"struct portable_atomic::AtomicU64\">AtomicU64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI32.html\" title=\"struct portable_atomic::AtomicI32\">AtomicI32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.i16.html\">i16</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI16.html\" title=\"struct portable_atomic::AtomicI16\">AtomicI16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU8.html\" title=\"struct portable_atomic::AtomicU8\">AtomicU8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicBool.html\" title=\"struct portable_atomic::AtomicBool\">AtomicBool</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU32.html\" title=\"struct portable_atomic::AtomicU32\">AtomicU32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.isize.html\">isize</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicIsize.html\" title=\"struct portable_atomic::AtomicIsize\">AtomicIsize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicI64.html\" title=\"struct portable_atomic::AtomicI64\">AtomicI64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicU16.html\" title=\"struct portable_atomic::AtomicU16\">AtomicU16</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/core/primitive.pointer.html\">*mut T</a>&gt; for <a class=\"struct\" href=\"portable_atomic/struct.AtomicPtr.html\" title=\"struct portable_atomic::AtomicPtr\">AtomicPtr</a>&lt;T&gt;"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.Ident.html\" title=\"struct proc_macro2::Ident\">Ident</a>&gt; for <a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/proc_macro/struct.TokenStream.html\" title=\"struct proc_macro::TokenStream\">TokenStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.Literal.html\" title=\"struct proc_macro2::Literal\">Literal</a>&gt; for <a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/proc_macro/struct.Span.html\" title=\"struct proc_macro::Span\">Span</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.Span.html\" title=\"struct proc_macro2::Span\">Span</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.Group.html\" title=\"struct proc_macro2::Group\">Group</a>&gt; for <a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.Punct.html\" title=\"struct proc_macro2::Punct\">Punct</a>&gt; for <a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>"]],
"proc_macro_error":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/syn/1.0.109/syn/error/struct.Error.html\" title=\"struct syn::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"proc_macro_error/struct.Diagnostic.html\" title=\"struct proc_macro_error::Diagnostic\">Diagnostic</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()