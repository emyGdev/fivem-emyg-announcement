QBCore = exports['qb-core']:GetCoreObject()

QBCore.Commands.Add('anons', "Sunucuya yönetici anonsu gönderir.", {
    {name = "mesaj", help = "Gönderilecek anons mesajı"}
}, false, function(source, args)
    local message = table.concat(args, " ")
    TriggerClientEvent('emyg:anons', -1, message)
end, 'admin')
