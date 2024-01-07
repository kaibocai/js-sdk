/*
Copyright 2024 The Dapr Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as grpc from "@grpc/grpc-js";
import { Settings } from "../../utils/Settings.util";

export function generateInterceptors(): (options: any, nextCall: any) => grpc.InterceptingCall {
  return (options: any, nextCall: any) => {
    return new grpc.InterceptingCall(nextCall(options), {
      start: (metadata, listener, next) => {
        if (metadata.get("dapr-api-token").length == 0) {
          metadata.add("dapr-api-token", Settings.getDefaultApiToken() as grpc.MetadataValue);
        }
        next(metadata, listener);
      },
    });
  };
}
