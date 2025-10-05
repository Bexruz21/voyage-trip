'use client';

import { useState, useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { StatsSection } from './StatsSection';
import { ContactForm } from './ContactForm';
import { CTASection } from './CTASection';
import { ContactInfo } from './ContactInfo';

function ContactsContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        contactMethod: 'phone',
        travelType: 'beach',
        budget: 'medium',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleFormChange = (newFormData) => {
        setFormData(newFormData);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            contactMethod: 'phone',
            travelType: 'beach',
            budget: 'medium',
            message: ''
        });

        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50 relative overflow-hidden">            
            <div className="relative z-10">
                <HeroSection isClient={isClient} page="contacts" />
                <StatsSection />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <ContactForm 
                            isClient={isClient}
                            formData={formData}
                            onFormChange={handleFormChange}
                            onSubmit={handleSubmit}
                            isSubmitting={isSubmitting}
                            submitStatus={submitStatus}
                        />
                        <ContactInfo />
                    </div>
                </div>

                <CTASection />
            </div>
        </div>
    );
}

export default ContactsContent;