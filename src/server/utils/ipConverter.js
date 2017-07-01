export function ipv6Toipv4(ipv6){
    return ipv6.replace(/^.*:/, '');
}