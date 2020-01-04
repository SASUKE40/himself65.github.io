#include "./lib.h"

namespace example {
	using namespace v8;

	void Method(const FunctionCallbackInfo<Value>& args) {
		Isolate* isolate = args.GetIsolate();

		if (args.Length() < 2 || !args[0]->IsNumber() || !args[1]->IsNumber()) {
			isolate->ThrowException(Exception::TypeError(
				String::NewFromUtf8(isolate, "Error: Two Numbers expected").ToLocalChecked()));
			return;
		}

		Local<Context> context = isolate->GetCurrentContext();
		Local<Number> num1 = args[0]->ToNumber(context).ToLocalChecked();
		Local<Number> num2 = args[1]->ToNumber(context).ToLocalChecked();
		int ans = method(num1->Int32Value(context).ToChecked(), num2->Int32Value(context).ToChecked());
		args.GetReturnValue()
			.Set(Number::New(isolate, ans));
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "add", Method);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}
