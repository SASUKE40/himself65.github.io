#[macro_use]
extern crate neon;

use neon::prelude::*;

fn add(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let arg0 = cx.argument::<JsNumber>(0)?.value();
    let arg1 = cx.argument::<JsNumber>(1)?.value();
    Ok(cx.number(arg0 + arg1))
}

register_module!(mut cx, {
    cx.export_function("add", add)
});
