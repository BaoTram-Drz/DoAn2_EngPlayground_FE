import React, { useState } from 'react';
import { BigText, Container } from '../style/GlobalStyles';

const CheckLevel = () => {
  const questions = ['Câu hỏi 1', 'Câu hỏi 2', 'Câu hỏi 3', 'Câu hỏi 4', 'Câu hỏi 5'];

  // State để lưu trữ đánh giá của người dùng cho mỗi câu hỏi
  const [ratings, setRatings] = useState({});
  
  // State để lưu trữ tất cả đánh giá đã lưu
  const [savedRatings, setSavedRatings] = useState([]);

  // Hàm xử lý khi người dùng thay đổi đánh giá
  const handleRatingChange = (question, level) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [question]: level,
    }));
  };

  // Hàm xử lý khi người dùng submit đánh giá
  const handleSubmitRating = () => {
    // Kiểm tra xem tất cả câu hỏi đã được đánh giá chưa
    const allQuestionsRated = questions.every(question => ratings.hasOwnProperty(question));

    // Nếu tất cả câu hỏi đã được đánh giá, thì lưu dữ liệu và reset ratings
    if (allQuestionsRated) {
      setSavedRatings((prevSavedRatings) => [
        ...prevSavedRatings,
        { ...ratings }
      ]);

      // Reset đánh giá cho câu hỏi
      setRatings({});
    } else {
      alert("Vui lòng đánh giá tất cả các câu hỏi trước khi lưu.");
    }
  };

  return (
    <p>
      <BigText>Test your level</BigText>
      <Container>
        <h2>Đánh giá mức độ</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <label>{question}</label>
            <div>
              {[1, 2, 3, 4, 5].map((level) => (
                <label key={level}>
                  <input
                    type="radio"
                    name={`rating_${index}`}
                    value={level}
                    onChange={() => handleRatingChange(question, level)}
                    checked={ratings[question] === level}
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleSubmitRating}>Lưu đánh giá</button>

        {/* Hiển thị đánh giá đã lưu */}
        <div>
          <h3>Đánh giá đã lưu:</h3>
          <ul>
            {savedRatings.map((savedRating, index) => (
              <li key={index}>{JSON.stringify(savedRating)}</li>
            ))}
          </ul>
        </div>
      </Container>
    </p>
  );
};

export default CheckLevel;
