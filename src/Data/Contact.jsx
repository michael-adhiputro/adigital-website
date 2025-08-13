const ContactInfo = () => {
    const companyInfo = {
        'maps'   : {
            link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.304648853098!2d106.80518829326203!3d-6.22350172285308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a29bc71929%3A0xa44ceca0c7cd9204!2sOne%20Pacific%20Place!5e0!3m2!1sen!2sid!4v1755068969497!5m2!1sen!2sid'
        },
        'address': `
            Jl. Jenderal Sudirman Kav. 52-53, RT005/RW03 Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta, 12190, Indonesia
        `,
        'email': 'csr@waterfront.co.id',
        'phone': '+6221 250-6355',
        'fax': '+6221 250-6322',
        'website': 'www.waterfrontsekuritas.com',
        'socmed': [
            {
                name: "Facebook",
                link: 'https://www.facebook.com/people/Waterfront Sekuritas/100088056559882/',
                show: true,
                faIcon: ['fab', 'facebook']
            },
            {
                name: "@winvest.id",
                link: "https://www.instagram.com/winvest.id/",
                show: true,
                faIcon: ['fab', 'instagram']
            },
            {
                name: "LinkedIn",
                link: 'https://www.linkedin.com/company/waterfront-sekuritas-indonesia/',
                show: false,
                faIcon: ['fab', 'linkedin']
            },
            // {
            //     name: "Twitter",
            //     link: 'https://twitter.com/Waterfront Sekuritasid/',
            //     show: false,
            //     faIcon: ['fab', 'twitter']
            // },
            // {
            //     name: "Youtube",
            //     link: 'https://www.youtube.com/channel/UCqVBdkmFmX2P912HELZmr4w',
            //     show: false,
            //     faIcon: ['fab', 'youtube']
            // },
            // {
            //     name: "Tiktok",
            //     link: 'https://www.tiktok.com/@landack.id/',
            //     show: false,
            //     faIcon: ['fab', 'tiktok']
            // }
        ],
        'dirjen': {
            title: 'Layanan Pengaduan Konsumen',
            company: 'PT Waterfront Securities',
            email: 'info@waterfrontsekuritas.com',
            description: [
                'Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga',
                'Kementrian Perdagangan Republik Indonesia'
            ],
            whatsapp: '+62 853-1111-1010'
        }
    };

    const text = 'Selamat datang di Waterfront Sekuritas!'
    companyInfo.whatsappLink = `whatsapp:send?phone=${companyInfo.phoneno}&text=${text}`;
    
    return companyInfo;
}

export default ContactInfo;