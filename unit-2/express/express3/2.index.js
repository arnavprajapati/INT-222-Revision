const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post(
    '/register',
    [
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('Invalid email'),

        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be 6 characters long')
    ],

    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
            // return res.status(400).json({ msg: error.array()[0].msg  })
        }

        res.send("User registered successfully!");
    }
);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
