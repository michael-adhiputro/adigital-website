const ContactInfo = () => {
    const companyInfo = {
        'maps'   : {
            link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.6525159238561!2d106.82030144886441!3d-6.212701712003324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f40180597e17%3A0x89c01000b8d01c0d!2sPT.%20Waterfront%20Securities!5e0!3m2!1sen!2sid!4v1735494250291!5m2!1sen!2sid',
            image: 'location-map.png'
        },
        'branchOffice': [
            {
                office: `Grand Puri Niaga`,
                address: `Jl. Puri Kencana Blok K6/1H, Kembangan Selatan, Jakarta Barat`,
                phone: `+6221 5835 1699`,
                fax: `+6221 5835 1698`,
            },
            {
                office: `Semarang`,
                address: `Jl. Erlangga Tengah No. 18 B, Semarang`,
                phone: `024-76530330`,
                fax: `024-76530131`,
            },
            {
                office: `Surabaya`,
                address: `Ruko Taman Beverly Kav.19, Jl. HR. Mohammad No. 49-55, Surabaya 60189`,
                phone: `+6221 5835 1699`,
                fax: `+6231 731 6880`,
            },
        ],
        'address': `
            Sona Topas Tower Lt. 15A, Jl. Jendral Sudirman Kav. 26, RT.4/RW.2, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
        `,
        // 'address': `
        //     PT. WATERFRONT SEKURITAS INDONESIA
        //     <br />
        //     (Member of Indonesia Stock Exchange)
        //     <br />
        //     Sona Topas Tower Lt. 15A, Jl. Jendral Sudirman Kav. 26, RT.4/RW.2, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920
        // `,
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