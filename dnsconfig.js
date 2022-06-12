// Providers:
var REG_GANDI = NewRegistrar('gandi', 'GANDI_V5');
var DNS_GANDI = NewDnsProvider('gandi', 'GANDI_V5');

D('usmanatron.co.uk', REG_GANDI, DnsProvider(DNS_GANDI),
    DefaultTTL('10800'),
    A('feeds', '51.75.169.137'),

    // Gandi Defaults - will change soon
    CNAME('www', 'webredir.vip.gandi.net.'),
    A('@', '217.70.184.38'),

    // Added by Gandi - Mail
    CNAME('gm1._domainkey', 'gm1.gandimail.net.'),
    CNAME('gm2._domainkey', 'gm2.gandimail.net.'),
    CNAME('gm3._domainkey', 'gm3.gandimail.net.'),
    CNAME('webmail', 'webmail.gandi.net.'),
    MX('@', 10, 'spool.mail.gandi.net.'),
    MX('@', 50, 'fb.mail.gandi.net.'),
    SRV('_imap._tcp', 0, 0, 0, '.'),
    SRV('_imaps._tcp', 0, 1, 993, 'mail.gandi.net.'),
    SRV('_pop3._tcp', 0, 0, 0, '.'),
    SRV('_pop3s._tcp', 10, 1, 995, 'mail.gandi.net.'),
    SRV('_submission._tcp', 0, 1, 465, 'mail.gandi.net.'),
    TXT('@', 'v=spf1 include:_mailcust.gandi.net ?all')
);

D('handmadebykomi.co.uk', REG_GANDI, DnsProvider(DNS_GANDI),
    DefaultTTL('10800'),
    CNAME('www', 'handmadebykomi.auth-6ae4f98f2cc44b99af8da84246e9eaa1.storage.uk.cloud.ovh.net.'),

    // Gandi Defaults - will change soon
    A('@', '217.70.184.38'),

    // Added by Gandi - Mail
    CNAME('gm1._domainkey', 'gm1.gandimail.net.'),
    CNAME('gm2._domainkey', 'gm2.gandimail.net.'),
    CNAME('gm3._domainkey', 'gm3.gandimail.net.'),
    CNAME('webmail', 'webmail.gandi.net.'),
    MX('@', 10, 'spool.mail.gandi.net.'),
    MX('@', 50, 'fb.mail.gandi.net.'),
    SRV('_imap._tcp', 0, 0, 0, '.'),
    SRV('_imaps._tcp', 0, 1, 993, 'mail.gandi.net.'),
    SRV('_pop3._tcp', 0, 0, 0, '.'),
    SRV('_pop3s._tcp', 10, 1, 995, 'mail.gandi.net.'),
    SRV('_submission._tcp', 0, 1, 465, 'mail.gandi.net.'),
    TXT('@', 'v=spf1 include:_mailcust.gandi.net ?all')
);
