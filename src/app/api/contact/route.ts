import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  
  try {
    // Create mailto link
    const mailtoLink = `mailto:hendrickcastro017@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
    `)}`;

    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully",
      mailtoLink: mailtoLink 
    });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to process form" 
    }, { status: 500 });
  }
}