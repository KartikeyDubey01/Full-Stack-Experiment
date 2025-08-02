
# Student Registration Form with HTML5 Validation

## 🧠 Aim

To design and develop a student registration form using HTML5 that collects basic user information with built-in validation.

---

## 🎯 Objective

- To understand and implement HTML5 form elements.
- To apply built-in HTML5 validation features to improve user input quality.
- To practice clean and accessible form design using HTML and CSS.

---

## 📋 Task Description

Create a **Student Registration Form** that includes the following features:

- Fields:
  - **Name**
  - **Email**
  - **Age**
- Use appropriate HTML5 input types (`text`, `email`, `number`).
- Add required validation using the `required` attribute and constraints like `min`, `max`, etc.
- Implement a basic user interface using CSS for better visual experience.

---

## 🪜 Steps Followed

1. Set up a basic HTML5 document structure.
2. Added input fields with corresponding labels.
3. Used HTML5 validation attributes:
   - `required` to ensure no field is left empty.
   - `type="email"` to validate proper email format.
   - `type="number"` with `min` and `max` to restrict age input.
4. Applied styling using an external CSS file (`style.css`) for aesthetics.
5. Tested the form to verify validation and layout.

---

## 🧾 Code

### 📄 index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Students Feedback Form</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h2>Student Registration Form</h2>
    <form>
        <label>Name: </label> 
        <br>
        <input type="text" placeholder="Enter Your Name" required> 
        <br><br>
        <label>Email: </label> 
        <br>
        <input type="email" placeholder="Enter Your Email" required> 
        <br><br>
        <label>Age: </label> 
        <br>
        <input type="number" placeholder="Enter Your Age" required min="1" max="100"> 
        <br><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>
```

---

## 📸 Output

### Preview:



---

## 📘 Learning Outcomes

By completing this project, you will have learned:

- How to create forms using semantic HTML5.
- The importance and implementation of input validation.
- Styling form elements using CSS for a modern UI.
- Structuring responsive and accessible form layouts.

---
