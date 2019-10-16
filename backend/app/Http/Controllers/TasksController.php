<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use App\Traits\ApiResponseTrait;

class TasksController extends Controller
{
    use ApiResponseTrait;


    /**
     *
     * Get listing of tasks
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->dataResponse(Task::all());
    }


    /**
     * Store a newly created task in storage.
     *
     * @param  TaskRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskRequest $request)
    {
        $data = Task::create($request->only('title', 'description'));
        if ($data) {
            return $this->dataResponse(['message' => 'Record successfully created']);
        } else {
            return $this->errorResponse(['message' => 'There is some issue, Please try later']);
        }
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return $this->dataResponse(Task::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  TaskRequest $request
     * @param  Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(TaskRequest $request, Task $task)
    {
        $status = $task->update($request->only('title', 'description'));
        if ($status) {
            return $this->dataResponse(['message' => 'Record successfully updated']);
        } else {
            return $this->errorResponse(['message' => 'There is some issue, Please try later']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Task $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        $status = $task->delete();
        if ($status) {
            return $this->dataResponse(['message' => 'Record successfully deleted']);
        } else {
            return $this->errorResponse(['message' => 'There is some issue, Please try later']);
        }
    }
}
