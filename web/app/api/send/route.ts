import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, organization, classification, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Gravity Geyser <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL || 'shreyasputtaraju@gmail.com'], // Fallback for dev
            subject: `New Technical Inquiry: ${classification}`,
            text: `
        Name: ${name}
        Email: ${email}
        Organization: ${organization}
        Classification: ${classification}
        
        Message:
        ${message}
      `,
            replyTo: email,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
