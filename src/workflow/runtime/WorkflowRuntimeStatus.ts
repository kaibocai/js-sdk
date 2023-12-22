/*
Copyright 2022 The Dapr Authors
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

import { OrchestrationStatus } from "kaibocai-durabletask-js/orchestration/enum/orchestration-status.enum";

export enum WorkflowRuntimeStatus {
  RUNNING = OrchestrationStatus.RUNNING,
  COMPLETED = OrchestrationStatus.COMPLETED,
  FAILED = OrchestrationStatus.FAILED,
  TERMINATED = OrchestrationStatus.TERMINATED,
  CONTINUED_AS_NEW = OrchestrationStatus.CONTINUED_AS_NEW,
  PENDING = OrchestrationStatus.PENDING,
  SUSPENDED = OrchestrationStatus.SUSPENDED,
}

export function fromOrchestrationStatus(val: OrchestrationStatus): WorkflowRuntimeStatus {
  const values = Object.values(WorkflowRuntimeStatus);
  const valIdx = values.findIndex((v) => v == (val as number));

  //Return the entry of the WorkflowRuntimeStatus enum at index
  const entries = Object.entries(WorkflowRuntimeStatus);
  return entries[valIdx][1] as WorkflowRuntimeStatus;
}

export function toOrchestrationStatus(val: WorkflowRuntimeStatus): OrchestrationStatus {
  const values = Object.values(OrchestrationStatus);
  const valIdx = values.findIndex((v) => v == (val as number));

  //Return the entry of the WorkflowRuntimeStatus enum at index
  const entries = Object.entries(OrchestrationStatus);
  return entries[valIdx][1] as OrchestrationStatus;
}