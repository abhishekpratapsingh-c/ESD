import { useState, useEffect } from 'react';
import api from './lib/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  const [courses, setCourses] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [formData, setFormData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/user');
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchCourses();
    }
  }, [isAuthenticated]);

  const fetchCourses = async () => {
    try {
      const response = await api.get('/courses');
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure? This will cascade delete prerequisites.")) {
      try {
        await api.delete(`/courses/${id}`);
        fetchCourses();
      } catch (error) {
        alert("Failed to delete course");
      }
    }
  };

  const handleEditClick = (course) => {
    setEditMode(course.courseId);
    setFormData(course);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/courses/${editMode}`, formData);
      setEditMode(null);
      fetchCourses();
    } catch (error) {
      alert("Failed to update course");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin: Course Management</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Faculty</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              {editMode === course.courseId ? (
                <td colSpan="5">
                  <form onSubmit={handleUpdate} className="d-flex gap-2">
                    <input name="courseCode" value={formData.courseCode} onChange={handleChange} className="form-control" />
                    <input name="name" value={formData.name} onChange={handleChange} className="form-control" />
                    <input name="faculty" value={formData.faculty} onChange={handleChange} className="form-control" />
                    <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} className="form-control" style={{width: '100px'}} />
                    <button type="submit" className="btn btn-success btn-sm">Save</button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditMode(null)}>Cancel</button>
                  </form>
                </td>
              ) : (
                <>
                  <td>{course.courseCode}</td>
                  <td>{course.name}</td>
                  <td>{course.faculty}</td>
                  <td>{course.capacity}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(course)}>Update</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(course.courseId)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="alert alert-info">
        <strong>Note:</strong> Deleting a course will automatically cascade delete any related prerequisites in the database.
      </div>
    </div>
  );
}

export default App;