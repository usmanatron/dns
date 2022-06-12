// Providers:
var REG_GANDI = NewRegistrar('gandi', 'GANDI_V5');
var DNS_GANDI = NewDnsProvider('gandi', 'GANDI_V5');

D('usmanatron.co.uk', REG_GANDI, DnsProvider(DNS_GANDI),
    A('@', '1.2.3.4')
);
D('handmadebykomi.co.uk', REG_GANDI, DnsProvider(DNS_GANDI),
    A('@', '1.2.3.4')
);