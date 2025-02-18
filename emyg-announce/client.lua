QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent('emyg:anons')
AddEventHandler('emyg:anons', function(message, serverName)
    SendNUIMessage({
        type = "openAnons",
        text = message,
        logo = Config.Logo,
        serverName = Config.ServerName,
        displayTime = Config.DisplayTime
    })
end)
