import React from 'react'
import EditTask from './EditTask'

const Tasks = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                  type="button"
                  className="btn btn-info">Add Task
                </button>

                <div className="todo-list">
                  <div className="todo-item">
                    <hr />
                    <span>
                      <div class="checker"><span class=""><input type="checkbox" /></span></div>
                      &nbsp;Create theme
                    </span>
                    <span className=" float-end mx-3"><EditTask /></span>
                    <button type="button" className="btn btn-danger float-end">Delete</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">Add Task</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a Task"
                />
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tasks