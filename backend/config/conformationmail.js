import nodemailer from "nodemailer";

export const sendOrderConfirmationEmail = async (to, order) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use another email service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const itemsHtml = order.products.map(item => `
            <li>
                ${item.name} x ${item.quantity} = $${item.price.toFixed(2)}
            </li>
        `).join("");

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject: "Your Order Confirmation",
            html: `
                <h2>Thank you for your order!</h2>
                <p>Here are your order details:</p>
                <ul>${itemsHtml}</ul>
                <p><strong>Total Amount:</strong> $${order.totalAmount.toFixed(2)}</p>
                <p>We will notify you when your order is shipped.</p>
            `
        };

        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error("Email send error:", err);
    }
};
