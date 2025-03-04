import { useState, useEffect } from "react";
import apiAuthor from "../../../api/apiAuthor";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditAuthorManagement() {
  const { id } = useParams();
  const [Authorname, setAuthorName] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sts, setSts] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    apiAuthor.getDetailAuthorById(id).then((res) => {
      try {
        const authorData = res.data;
        setSts(authorData.sts);
        setAuthorName(authorData.name);
        setGender(authorData.gender);
        setDescription(authorData.description);
        setBirthday(authorData.birthday);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const AuthorData = {
      name: Authorname,
      birthday: birthday,
      gender: gender,
      description: description,
      birthday: birthday,
      sts: sts,
    };
    console.log(AuthorData);
    try {
      const res = await apiAuthor.updateAuthor(id, { data: AuthorData });
      alert("Sửa tác giả thành công");
      navigate("/QuanLyTacGia/1");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h3>
          <strong>Sửa thông tin tác giả</strong>
        </h3>
        <form className="styled-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="AuthorName">Tên tác giả</label>
            <input
              type="text"
              value={Authorname}
              onChange={(e) => setAuthorName(e.target.value)}
              id="AuthorName"
              name="AuthorName"
              required
            />
          </div>
          <div className="form-group">
            <label for="dob">Ngày sinh</label>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              id="dob"
              name="dob"
              required
            />
          </div>
          <div className="form-group">
            <label for="gender">Giới tính</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              id="gender"
              name="gender"
              required
            />
          </div>
          <div className="form-group">
            <label for="description">Sơ lược về tác giả</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              name="description"
              required
            />
          </div>
          <div className="form-group">
            <label for="sts">Trạng thái</label>
            <select
              class="form-control"
              id="sts"
              value={sts}
              onChange={(e) => setSts(e.target.value)}
            >
              <option value="0" selected>
                Ẩn
              </option>
              <option value="1">Hiển thị</option>
            </select>
          </div>
          <div className="form-actions">
            <Link to="/QuanLyTacGia/1">
              <button type="button" className="btn-quaylai">
                Quay lại
              </button>
            </Link>
            <button type="submit" className="btn primary">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditAuthorManagement;
