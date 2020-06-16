            function speedMult(target, base) {
                return 100.0 * (target / base - 1);
            }

            var allWeapons = {};

            // -------------------------------------------------------------------------------
            // Setup weapon data
            // -------------------------------------------------------------------------------

            var speedSlow = 0.55;
            var speedMedium = 0.88;
            var speedFast = 1.26;
            var speedVFast = 4.2;

            allWeapons.Melee = [
                {
                    name: "Board",
                    category: "One-handed",
                    strengthFactor: 0.1,
                    speed: speedSlow,
                    level: [1, 5, 15, 25, 35, 45],
                    damage: [14, 18, 22, 26, 30, 33],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard",
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 15,
                                    ignoreDRPercent: 10
                                },
                                {
                                    name: "Puncturing",
                                    damageMultPercent: 20,
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Bladed",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Deathclaw Gauntlet",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedMedium,
                    level: [30, 40, 50],
                    damage: [45, 50, 55],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Extra claw",
                                    damageMultPercent: 20,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Super Sledge",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [30, 40, 50],
                    damage: [65, 75, 85],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Heating coil",
                                    addDamageEnergyLeveled: [5, 7.5, 10]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Tenderizer",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [10, 20, 30, 40, 50],
                    damage: [35, 45, 55, 67, 75],
                    mods: [
                    {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Peppered",
                                    damageMultPercent: 4
                                },
                                {
                                    name: "Salty",
                                    damageMultPercent: 16
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Sheepsquatch Staff",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [10, 20, 30, 40, 50],
                    damage: [35, 45, 55, 65, 75],
                    mods: [
                    {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                }
                            ]
                        }
                    ]
                },{
                    name: "Sheepsquatch Club",
                    category: "One-handed",
                    speed: speedSlow,
                    level: [10, 20, 30, 40, 50],
                    damage: [20, 30, 40, 50, 60],
                    mods: [
                    {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                }
                            ]
                        }
                    ]
                },{
                    name: "Power Fist",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedMedium,
                    level: [30, 40, 50],
                    damage: [48, 53, 58],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Puncturing",
                                    ignoreDRPercent: 20,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Mole Miner Gauntlet",
                    category: "Unarmed",
                    kind: "unarmed",
                    strengthFactor: 0.1,
                    speed: speedMedium,
                    level: [20, 30, 40, 50],
                    damage: [30, 35, 40, 45],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Third Blade",
                                    damageMultPercent: 15,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Death Tambo",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedMedium,
                    level: [15, 25, 35, 45],
                    damage: [30, 35, 40, 45],
                    mods: []
                },
                {
                    name: "Machete",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [15, 17, 20, 25, 30, 35, 40],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Serrated",
                                    damageMultPercent: 20,
                                },
                                {
                                    name: "Sacrificial",
                                    damageMultPercent: 15,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Bowie Knife",
                    category: "One-handed",
                    kind: "knife",
                    speed: speedFast,
                    level: [10, 15, 25, 35, 45],
                    damage: [10, 15, 20, 25, 30],
                    mods: []
                },
                {
                    name: "Boxing Glove",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedMedium,
                    level: [5, 15, 25, 35, 45],
                    damage: [13, 18, 23, 28, 34],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Lead Lining",
                                    damageMultPercent: 20,
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Puncturing",
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Cultist Blade",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [10, 20, 30, 40, 50],
                    damage: [21, 26, 31, 36, 41],
                    mods: []
                },
                {
                    name: "Cultist Dagger",
                    category: "One-handed",
                    kind: "knife",
                    speed: speedFast,
                    level: [15, 25, 35, 45],
                    damage: [20, 25, 28, 32],
                    mods: []
                },
                {
                    name: "Multi-purpose Axe",
                    category: "One-handed",
                    speed: speedSlow,
                    level: [1, 5, 15, 25, 35, 45],
                    damage: [26, 32, 42, 52, 62, 69],
                    mods: []
                },
                {
                    name: "Combat Knife",
                    category: "One-handed",
                    kind: "knife",
                    speed: speedFast,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [9, 13, 17, 21, 25, 29, 33],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Serrated",
                                    damageMultPercent: 10,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Hatchet",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [15, 17, 20, 25, 30, 35, 40],
                    mods: []
                },
                {
                    name: "Pickaxe",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [5, 15, 25, 35, 45],
                    damage: [32, 41, 48, 55, 60],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sharp",
                                    damageMultPercent: 15
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Ski Sword",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [15, 25, 35, 45],
                    damage: [35, 40, 45, 50],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Metal Shards",
                                    damageMultPercent: 20,
                                },
                                {
                                    name: "Skate",
                                    damageMultPercent: 10,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Rolling pin",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [9, 12, 15, 19, 22, 25, 28],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sharp",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 25,
                                },
                                {
                                    name: "Chef's",
                                    damageMultPercent: 20,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Knuckles",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [8, 10, 15, 20, 25, 30, 35],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sharp",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Bladed",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Puncturing",
                                    damageMultPercent: 10,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Lead Pipe",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [14, 16, 19, 24, 29, 34, 39],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 10,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Tire Iron",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [12, 14, 17, 20, 23, 26, 29],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Bladed",
                                    damageMultPercent: 10,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Blade of Bastet",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [25, 35, 45],
                    damage: [42, 46, 52],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Serrated",
                                    damageMultPercent: 20,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Fire Axe",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [5, 15, 25, 35, 45],
                    damage: [35, 45, 55, 65, 72],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Spikes",
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Guitar Sword",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [15, 25, 35, 45],
                    damage: [35, 40, 45, 50],
                    mods: []
                },
                {
                    name: "Assaultron Blade",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [25, 35, 45],
                    damage: [28, 33, 40],
                    mods: []
                },
                {
                    name: "Pitchfork",
                    category: "Two-handed",
                    strengthFactor: 0.1,
                    speed: speedMedium,
                    level: [1, 5, 15, 25, 35, 45],
                    damage: [22, 27, 32, 37, 42, 47],
                    mods: [
                        {
                            slot: "Forks",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Barbed",
                                    damageMultPercent: 15
                                },
                                {
                                    name: "Flaming",
                                    damageMultPercent: 15,
                                    addDamageEnergyLeveled: [2, 3.5, 5, 6.5, 8, 9.5]
                                },
                                {
                                    name: "Barbed Flaming",
                                    damageMultPercent: 15,
                                    addDamageEnergyLeveled: [2, 3.5, 5, 6.5, 8, 9.5]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Revolutionary Sword",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [10, 20, 30, 40, 50],
                    damage: [24, 29, 34, 39, 44],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Serrated",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Electrified",
                                    addDamageEnergyPercentLeveled: [10, 15, 20, 25, 30]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "War Drum",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [15, 25, 35, 45],
                    damage: [48, 58, 68, 78],
                    mods: []
                },
                {
                    name: "Walking Cane",
                    category: "One-handed",
                    strengthFactor: 0.1,
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [17, 19, 22, 27, 32, 37, 42],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Barbed",
                                    damageMultPercent: 10,
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 10
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Security Baton",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [5, 15, 25, 35, 45],
                    damage: [15, 25, 30, 35, 40],
                    mods: []
                },
                {
                    name: "Meat Hook",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedMedium,
                    level: [5, 15, 25, 35, 45],
                    damage: [14, 19, 24, 29, 34],
                    mods: [
                        {
                            slot: "Hooks",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Extra",
                                    damageMultPercent: 20,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Pipe Wrench",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [13, 15, 18, 21, 24, 27, 30],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hooked",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 15,
                                },
                                {
                                    name: "Extra Heavy",
                                    damageMultPercent: 25,
                                },
                                {
                                    name: "Puncturing",
                                    damageMultPercent: 10,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Ripper",
                    category: "One-handed",
                    speed: speedVFast,
                    level: [40],
                    damage: [3],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Extended",
                                    damageMultPercent: 66.6,
                                },
                                {
                                    name: "Curved",
                                    damageMultPercent: 33.3,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Mr. Handy Buzz Blade",
                    category: "One-handed",
                    speed: speedVFast,
                    level: [15, 25, 35, 45],
                    damage: [4, 5, 6, 7],
                    mods: [ {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Electrified",
                                    addDamageEnergyPercentLeveled: [10, 15, 20, 25]
                                }
                            ]
                        }]
                },
                {
                    name: "Chinese Officer Sword",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [5, 15, 25, 35, 45],
                    damage: [16, 21, 26, 31, 36],
                    mods: [
                        {
                            slot: "Blade",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Serrated",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Electrified",
                                    addDamageEnergyPercentLeveled: [5, 10, 15, 20, 25]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Grognak's Axe",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [30, 40, 50],
                    damage: [65, 75, 85],
                    mods: []
                },
                {
                    name: "Shishkebab",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [35, 45],
                    damage: [22, 27],
                    damageEnergy: [22, 27],
                    mods: [
                    {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Extra Flame Jets",
                                    addDamageEnergyLeveled: [8, 9.5]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Sledgehammer",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [10, 20, 30, 40, 50],
                    damage: [43, 50, 57, 65, 71],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sharp",
                                    damageMultPercent: 15,
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 20,
                                    ignoreDRPercent: 15
                                },
                                {
                                    name: "Heavy Rocket",
                                    damageMultPercent: 25,
                                },
                                {
                                    name: "Heavy Spiked",
                                    damageMultPercent: 25,
                                    ignoreDRPercent: 15
                                },
                                {
                                    name: "Heavy Sharp",
                                    damageMultPercent: 25,
                                },
                                {
                                    name: "Heavy Shearing Sharp Rocket",
                                    damageMultPercent: 15,
                                    addDamageEnergyLeveled: [3, 4.5, 7, 8.5, 10]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Baseball Bat",
                    category: "Two-handed",
                    strengthFactor: 0.1,
                    speed: speedSlow,
                    level: [1, 5, 15, 25, 35, 45],
                    damage: [28, 35, 40, 45, 50, 55],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Barbed Wire",
                                    damageMultPercent: 20,
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Nails",
                                    damageMultPercent: 25,
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Razors",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Chains",
                                    damageMultPercent: 50
                                },
                                {
                                    name: "Saw Blades",
                                    damageMultPercent: 75
                                },
                                {
                                    name: "Bladed Rocket",
                                    damageMultPercent: 75
                                },
                                {
                                    name: "Heated Rocket",
                                    damageMultPercent: 20
                                },
                                {
                                    name: "Spiked Rocket",
                                    damageMultPercent: 25,
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Puncturing Rocket",
                                    damageMultPercent: 25,
                                    ignoreDRPercent: 20
                                }
                            ]
                        },
                        {
                            slot: "Material",
                            options: [
                                {
                                    name: "Wood"
                                },
                                {
                                    name: "All Star",
                                    damageMultPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Drill",
                    category: "One-handed",
                    strengthFactor: 0.1,
                    speed: speedVFast,
                    level: [20],
                    damage: [14],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Piercing",
                                    damageMultPercent: 15,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Spear",
                    category: "One-handed",
                    strengthFactor: 0.1,
                    speed: 0.62,
                    level: [15, 25, 35, 45],
                    damage: [43, 48, 53, 58],
                    mods: [
                    ]
                },
                {
                    name: "Pole Hook",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [10, 20, 30, 40, 50],
                    damage: [43, 50, 57, 65, 71],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Multihook",
                                    damageMultPercent: 50,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Sheperd's Crook",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [10, 20, 30, 40, 50],
                    damage: [10, 20, 30, 40, 50],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Spiked",
                                    damageMultPercent: 10,
                                    ignoreDRPercent: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Bone Club",
                    category: "One-handed",
                    speed: speedMedium,
                    level: [15, 25, 35, 45],
                    damage: [21, 31, 41, 51],
                    mods: []
                },
                {
                    name: "Bone Hammer",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [15, 25, 35, 45],
                    damage: [50, 60, 70, 80],
                    mods: []
                },
                {
                    name: "Bear Arm",
                    category: "Unarmed",
                    kind: "unarmed",
                    speed: speedSlow,
                    level: [20, 30, 40, 50],
                    damage: [35, 40, 45, 50],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 10,
                                },
                                {
                                    name: "Puncturing",
                                    ignoreDRPercent: 20
                                }
                            ]
                        }]
                },
                {
                    name: "Cattle Prod",
                    category: "One-handed",
                    speed: speedMedium,
                    level:  [ 5,10,15,20,25,30,35,40,45,50],
                    damage: [18,22,30,33,36,39,42,45,48,54],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Electrified",
                                    addDamageEnergyLeveled: [20,20,20,20,20,20,20,20,20,20]
                                }
                            ]
                        }
                    ]
                },
                /*
                {
                    name: "Auto-axe",
                    category: "One-handed",
                    speed: speedVFast,
                    level: [30,40,50],
                    damage: [10,18,26],
                    mods: []
                },
                */
                {
                    name: "Gauntlet",
                    category: "Unarmed",
                    speed: speedMedium,
                    level: [40,50],
                    damage: [45,50],
                    mods: [
                        {
                            slot: "Main",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Bladed",
                                    damageMultPercent: 15
                                },
                                {
                                    name: "Shock Pads",
                                    addDamageEnergyLeveled: [20, 20]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Shovel",
                    category: "Two-handed",
                    speed: speedSlow,
                    level: [1,5,15,25,35,45],
                    damage: [15,20,25,30,35,40],
                    mods: []
                },
            ];

            // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

            // the default magazine selection for typical weapons
            var standardAPMagazines = {
                            slot: "Magazine",
                            options: [
                                {
                                    name: "Standard",
                                    ignoreDRPercent: 0
                                },
                                {
                                    name: "Stinging",
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Piercing",
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Perforating",
                                    ignoreDRPercent: 40
                                }                            
                            ]
                        }
            
            var standardMuzzle = {
                slot: "Muzzle",
                options: [
                    {
                        name: "Standard",
                    },
                    {
                        name: "Suppressor",
                        silencer: true
                    }
                ]  
            };

            var standardSights = {
                slot: "Sights",
                options: [
                    {
                        name: "Standard"
                    },
                    {
                        name: "Short scope",
                        scope: true
                    },
                    {
                        name: "Medium scope",
                        scope: true
                    },
                    {
                        name: "Long scope",
                        scope: true
                    },
                    {
                        name: "Short night vision scope",
                        scope: true
                    },
                    {
                        name: "Medium night vision scope",
                        scope: true
                    },
                    {
                        name: "Long night vision scope",
                        scope: true
                    },
                ]
            }

            var standardArrows = {
                slot: "Arrow",
                options: [
                    {
                        name: "Standard"
                    },
                    {
                        name: "Plasma",
                        addDamageEnergyLeveled: [20,20,20,20,20,20,20,20,20,20,20]
                    },
                    {
                        name: "Cryo",
                        addDamageEnergyLeveled: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                    },
                    {
                        name: "Explosive",
                        addDamageExplosiveLeveled: [15,15,15,15,15,15,15,15,15,15,15],
                    },
                    {
                        name: "Flaming",
                        addDamageEnergyLeveled: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                    },
                    {
                        name: "Poison",
                        addDamageBallisticLeveled: [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                    },
                    {
                        name: "Ultracite",
                        damageMultPercent: 25,
                        versusMultPercent: 35,
                        versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"]
                    },
                ]
            };


            allWeapons.Ranged = [
                {
                    name: "Handmade",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 4,
                    level: [15, 25, 35, 45],
                    damage: [30, 35, 40, 45],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: 87.5
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 87.5
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: 87.5,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle,
                        standardSights
                    ]
                },
                {
                    name: "Hunting Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 0.3,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [40, 45, 50, 55, 60, 65, 70],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: ".38",
                                    damageMultPercent: -25
                                },
                                {
                                    name: ".50",
                                    damageMultPercent: 33.3
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 40,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle,
                        standardSights
                    ]
                },
                {
                    name: "Lever Action Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 0.5,
                    level: [25, 35, 45],
                    damage: [65, 70, 75],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        standardMuzzle,
                        standardSights
                    ]
                },
                {
                    name: "Black Powder Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.1,
                    level: [15, 25, 35, 45],
                    damage: [150, 160, 170, 180],
                    mods: [ ]
                },
                {
                    name: "The Dragon",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.1,
                    level: [35, 45],
                    damage: [200, 225],
                    mods: [ ]
                },
                {
                    name: "Assault Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 4,
                    level: [30, 40, 50],
                    damage: [25, 29, 33],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: 87.5
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 87.5
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: 87.5,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle,
                        standardSights
                    ]
                },
                {
                    name: "Gatling Gun",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: false,
                    speed: 2,
                    level: [20, 30, 40, 50],
                    damage: [43, 57, 72, 86],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Speedy",
                                    speedAddPercent: 25
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Railway Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    speed: 1,
                    level: [30, 40, 50],
                    damage: [75, 85, 95],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: 650
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "50 Cal Machine Gun",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: false,
                    speed: 9.1,
                    level: [25, 35, 45],
                    damage: [29, 36, 43],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard",
                                    ignoreDRPercent: 0
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 15,
                                }                           
                            ]
                        }
                    ]
                },
                {
                    name: "Final Word",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: false,
                    special: true,
                    info: "WeaponFinalWord",
                    speed: 9.1,
                    level: [25, 35, 45],
                    damage: [29, 36, 43],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard",
                                    ignoreDRPercent: 0
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 15,
                                    preinstalled: true
                                }                           
                            ]
                        }
                    ],
                    legendaryPrefix: "Anti-armor",
                    legendaryMajor: "25% increased fire rate"
                },
                {
                    name: "Light Machine Gun",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: false,
                    speed: 15.9,
                    level: [30, 40, 50],
                    damage: [29, 34, 42],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 10,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Minigun",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: false,
                    speed: 18.2,
                    level: [35, 45],
                    damage: [20, 24],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Accelerated",
                                    damageMultPercent: 10,
                                    speedAddPercent: 25
                                },
                                {
                                    name: "Tri",
                                    damageMultPercent: 20,
                                    speedAddPercent: -25
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 15,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Combat Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 3.3,
                    level: [20, 30, 40, 50],
                    damage: [28, 32, 36, 40],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "Hair Triggered",
                                    speedAddPercent: speedMult(5, 3.3),
                                },
                                {
                                    name: "Focused",
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "Hasty .38",
                                    damageMultPercent: -25,
                                    speedAddPercent: speedMult(4, 3.3),
                                },
                                {
                                    name: "Refined .38",
                                    damageMultPercent: -8.75,
                                },
                                {
                                    name: "Severe",
                                    damageMultPercent: 8.75,
                                },
                                {
                                    name: "Steadfast",
                                    speedAddPercent: speedMult(4, 3.3),
                                },
                                {
                                    name: "Tweaked Automatic",
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "True"
                                },
                                {
                                   name: "Vicious"
                                },
                                {
                                   name: "Vigorous",
                                   speedAddPercent: speedMult(4, 3.3),
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: speedMult(7.5, 3.3),
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle
                    ]
                },
                {
                    name: "The Fixer",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 3.3,
                    level: [20, 30, 40, 50],
                    damage: [33, 38, 43, 48],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "Hair Triggered",
                                    speedAddPercent: speedMult(5, 3.3),
                                },
                                {
                                    name: "Focused",
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "Hasty .38",
                                    damageMultPercent: -25,
                                    speedAddPercent: speedMult(4, 3.3),
                                },
                                {
                                    name: "Refined .38",
                                    damageMultPercent: -8.75,
                                },
                                {
                                    name: "Severe",
                                    damageMultPercent: 8.75,
                                },
                                {
                                    name: "Steadfast",
                                    speedAddPercent: speedMult(4, 3.3),
                                },
                                {
                                    name: "Tweaked Automatic",
                                    speedAddPercent: speedMult(7.5, 3.3),
                                },
                                {
                                    name: "True"
                                },
                                {
                                   name: "Vicious"
                                },
                                {
                                   name: "Calibrated",
                                   preinstalled: true
                                },
                                {
                                   name: "Vigorous",
                                   speedAddPercent: speedMult(4, 3.3),
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: speedMult(7.5, 3.3),
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        {
                            slot: "Magazine",
                            options: [
                                {
                                    name: "Standard",
                                    ignoreDRPercent: 0
                                },
                                {
                                    name: "Stinging",
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Piercing",
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Perforating",
                                    ignoreDRPercent: 40,
                                    preinstalled: true
                                }                            
                            ]
                        },
                        {
                            slot: "Muzzle",
                            options: [
                                {
                                    name: "Standard",
                                },
                                {
                                    name: "Suppressor",
                                    silencer: true,
                                    preinstalled: true
                                }
                            ]  
                        }
                    ]
                },
                {
                    name: "Combat Shotgun",
                    category: "Shotgun",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 2,
                    level: [20, 30, 40, 50],
                    damage: [60, 70, 80, 90],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: 10
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 10
                                },
                                {
                                    name: "Focused Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 10
                                },
                                {
                                    name: "Tweaked Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 10
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Refined",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Severe",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: 10,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle
                    ]
                },
                {
                    name: "Pump Action Shotgun",
                    category: "Shotgun",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 3.6,
                    level: [5, 15, 25, 35, 45],
                    damage: [55, 65, 75, 85, 95],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardMuzzle
                    ]
                },
                {
                    name: "Double-barrel Shotgun",
                    category: "Shotgun",
                    kind: "ballistic",
                    explosive: false,
                    speed: 3.6,
                    level: [15, 25, 35, 45],
                    damage: [80, 90, 100, 115],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Powerful",
                                    damageMultPercent: 15
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Crossbow",
                    category: "Bow",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 0.4,
                    level: [15, 25, 35, 45],
                    damage: [55, 60, 65, 70],
                    mods: [
                        {
                            slot: "Frame",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Plasma",
                                    addDamageEnergyLeveled: [20,20,20,20]
                                },
                                {
                                    name: "Cryo",
                                    addDamageEnergyLeveled: [ 2, 2, 2, 2]
                                },
                                {
                                    name: "Explosive",
                                    addDamageExplosiveLeveled: [15,15,15,15],
                                },
                                {
                                    name: "Flaming",
                                    addDamageEnergyLeveled: [ 2, 2, 2, 2]
                                },
                                {
                                    name: "Poison",
                                    addDamageBallisticLeveled: [ 2, 2, 2, 2]
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "10mm Pistol",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 4.3,
                    level: [5, 15, 25, 35, 45],
                    damage: [15, 18, 21, 24, 28],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: 87.5
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 87.5
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: 87.5,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle
                    ]
                },
                {
                    name: "Western Revolver",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.6,
                    level: [20, 30, 40, 50],
                    damage: [50, 55, 60, 65],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Refined",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Refined (Bugged)",
                                    damageMultPercent: 12.5 + 25
                                },
                                {
                                    name: "Vigorous",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Severe",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Severe (Bugged)",
                                    damageMultPercent: 12.5 + 25
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Submachine Gun",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 7.5,
                    level: [15, 25, 35, 45],
                    damage: [18, 22, 25, 29],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Armor-piercing",
                                    ignoreDRPercent: 40
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardMuzzle
                    ]
                },
                {
                    name: "10mm SMG",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 9.1,
                    level: [10, 20, 30, 40, 50],
                    damage: [17, 19, 23, 28, 34],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Refined",
                                    damageMultPercent: 12.5,
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        {
                            slot: "Magazine",
                            options: [
                                {
                                    name: "Standard",
                                    ignoreDRPercent: 0
                                },
                                {
                                    name: "Piercing",
                                    ignoreDRPercent: 20
                                },
                            ]
                        },
                        standardMuzzle
                    ]
                },
                {
                    name: "Old Guard's 10mm SMG",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    special: true,
                    info: "WeaponOldGuard",
                    speed: 100,
                    level: [10, 20, 30, 40, 50],
                    damage: [17, 19, 23, 28, 34],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Refined",
                                    damageMultPercent: 12.5,
                                    preinstalled: true
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        {
                            slot: "Magazine",
                            options: [
                                {
                                    name: "Standard",
                                    ignoreDRPercent: 0
                                },
                                {
                                    name: "Piercing",
                                    ignoreDRPercent: 20,
                                    preinstalled: true
                                },
                            ]
                        },
                        standardMuzzle
                    ],
                    legendaryPrefix: "Anti-armor"
                },
                {
                    name: "Broadsider",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: true,
                    speed: 0.3,
                    level: [25, 35, 45],
                    damage: [95, 115, 135],
                    mods: []
                },
                {
                    name: "Harpoon Gun",
                    category: "Heavy",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.2,
                    level: [30, 40, 50],
                    damage: [125, 150, 175],
                    mods: [
                    {
                            slot: "Ammunition",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Flechette",
                                    damageMultPercent: 100
                                }
                            ]
                        }
                    ]
                },
                {
                    name: ".44 Pistol",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.6,
                    level: [5, 15, 25, 35, 45],
                    damage: [40, 45, 50, 55, 60],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Black Powder Pistol",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.2,
                    level: [10, 20, 30, 40, 50],
                    damage: [115, 130, 145, 160, 175],
                    mods: []
                },
                {
                    name: "Black Powder Blunderbuss",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speeD: 0.2,
                    level: [10, 20, 30, 40, 50],
                    damage: [115, 130, 145, 160, 175],
                    mods: []
                },
                {
                    name: "Pipe Bolt-action Pistol",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.3,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [40, 45, 50, 55, 60, 65, 70],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Pipe Bolt-action Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.3,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [40, 45, 50, 55, 60, 65, 70],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Pipe Pistol",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speed: 6,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [12, 13, 15, 18, 21, 23, 26],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 50
                                },
                                {
                                    name: "Scorch killer's",
                                    damageMultPercent: -20,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusAddPercent: 50
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: 50,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardAPMagazines
                    ]
                },
                {
                    name: "Pipe Revolver Pistol",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.5,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [27, 31, 36, 40, 45, 50, 55],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Pipe Revolver Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    speed: 0.6,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [27, 31, 36, 40, 45, 50, 55],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Pipe Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    speed: 6,
                    level: [1, 5, 10, 20, 30, 40, 50],
                    damage: [12, 13, 15, 18, 21, 23, 26],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -10,
                                    speedAddPercent: 50
                                },
                                {
                                    name: "Powerful Automatic",
                                    damageMultPercent: 11.11,
                                    speedAddPercent: 50
                                },
                                {
                                    name: "Prime Automatic",
                                    damageMultPercent: 15,
                                    speedAddPercent: 50,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        standardAPMagazines
                    ]
                },
                {
                    name: "Gauss Rifle",
                    category: "Rifle",
                    kind: "energy",
                    explosive: false,
                    silencer: true,
                    chargetime: 1,
                    speed: 6.7,
                    explosiveDamageMult: 15,
                    level: [35, 45],
                    damage: [125, 140],
                    mods: [
                        {
                            slot: "Capacitors",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Stinging",
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Piercing",
                                    ignoreDRPercent: 20
                                },
                                {
                                    name: "Perforating",
                                    ignoreDRPercent: 40
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        standardMuzzle
                    ]
                },
                {
                    name: "Radium Rifle",
                    category: "Rifle",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 4,
                    level: [40, 50],
                    damage: [33, 37],
                    damageRadiation: [13, 15],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25,
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        standardAPMagazines,
                        standardMuzzle
                    ]
                },
                {
                    name: "Laser Pistol",
                    category: "Pistol",
                    kind: "laser",
                    explosive: false,
                    silencer: false,
                    speed: 4,
                    level: [5, 15, 25, 35, 45],
                    damage: [0, 0, 0, 0, 0],
                    damageEnergy: [21, 26, 31, 36, 44],
                    mods: [
                        {
                            slot: "Capacitor",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Laser Rifle",
                    category: "Rifle",
                    kind: "laser",
                    explosive: false,
                    silencer: false,
                    speed: 5,
                    level: [5, 15, 25, 35, 45],
                    damage: [0, 0, 0, 0, 0],
                    damageEnergy: [21, 26, 31, 36, 44],
                    mods: [
                        {
                            slot: "Capacitor",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Ultracite Laser Pistol",
                    category: "Pistol",
                    kind: "laser",
                    explosive: false,
                    silencer: false,
                    speed: 4,
                    level: [30, 40, 50],
                    damage: [0, 0, 0],
                    damageEnergy: [28, 31, 34],
                    mods: [
                        {
                            slot: "Capacitor",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Ultracite Laser Rifle",
                    category: "Rifle",
                    kind: "laser",
                    explosive: false,
                    silencer: false,
                    speed: 5,
                    level: [30, 40, 50],
                    damage: [0, 0, 0, 0, 0],
                    damageEnergy: [28, 31, 34],
                    mods: [
                        {
                            slot: "Capacitor",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 25
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Gatling Laser",
                    category: "Heavy",
                    kind: "laser",
                    explosive: false,
                    silencer: false,
                    speed: 18.2,
                    level: [25, 35, 45],
                    damage: [0, 0, 0],
                    damageEnergy: [18, 21, 25],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 9,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Charging",
                                    damageMultPercent: 55,
                                    speedAddPercent: -speedMult(18.2, 3)
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Ultracite Gatling Laser",
                    category: "Heavy",
                    kind: "laser",
                    explosive: false,
                    silencer: false,
                    speed: 18.2,
                    level: [35, 45],
                    damage: [0, 0, 0],
                    damageEnergy: [25, 28],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 9,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        },
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Charging",
                                    damageMultPercent: 55,
                                    speedAddPercent: -speedMult(18.2, 3)
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Plasma Pistol",
                    category: "Pistol",
                    kind: "plasma",
                    explosive: false,
                    silencer: false,
                    speed: 3.3,
                    level: [15, 25, 35, 45],
                    damage: [15, 21, 25, 29],
                    damageEnergy: [15, 21, 25, 29],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Flamer",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Splitter",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 50
                                }
                                ,
                                {
                                    name: "Automatic",
                                    damageMultPercent: -15
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Plasma Rifle",
                    category: "Rifle",
                    kind: "plasma",
                    explosive: false,
                    silencer: false,
                    speed: 3.3,
                    level: [15, 25, 35, 45],
                    damage: [15, 21, 25, 29],
                    damageEnergy: [15, 21, 25, 29],
                    mods: [
                    {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Flamer",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Splitter",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 50
                                }
                                ,
                                {
                                    name: "Automatic",
                                    damageMultPercent: -15
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Slug Buster",
                    category: "Rifle",
                    kind: "plasma",
                    info: "WeaponSlugBuster",
                    special: true,
                    explosive: false,
                    silencer: false,
                    speed: 3.3,
                    level: [15, 25, 35, 45],
                    damage: [15, 21, 25, 29],
                    damageEnergy: [15, 21, 25, 29],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Flamer",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Splitter",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 50,
                                    preinstalled: true
                                }
                                ,
                                {
                                    name: "Automatic",
                                    damageMultPercent: -15
                                }
                            ]
                        },
                        {
                            slot: "Scope",
                            options: [
                                {
                                    name: "None"
                                },
                                {
                                    name: "Medium Night Vision Scope",
                                    scope: true,
                                    preinstalled: true
                                }
                            ]
                        }
                    ],
                    legendaryPrefix: "Anti-armor",
                    // legendaryMajor: "VATS Crits do +50% damage",
                    // legendaryMinor: "90% reduced weight"
                },
                {
                    name: "Gatling Plasma",
                    category: "Heavy",
                    kind: "plasma",
                    explosive: false,
                    silencer: false,
                    speed: 9.1,
                    level: [30, 40, 50],
                    damage: [0, 0, 0],
                    damageEnergy: [43, 50, 58],
                    mods: [
                    {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 5,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Enclave Plasma Pistol",
                    category: "Pistol",
                    kind: "plasma",
                    explosive: false,
                    silencer: false,
                    speed: 3.3,
                    level: [25, 35, 45],
                    damage: [24, 28, 32],
                    damageEnergy: [24, 28, 32],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Flamer",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Splitter",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 50
                                }
                                ,
                                {
                                    name: "Automatic",
                                    damageMultPercent: -15
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Enclave Plasma Rifle",
                    category: "Rifle",
                    kind: "plasma",
                    explosive: false,
                    silencer: false,
                    speed: 3.3,
                    level: [25, 35, 45],
                    damage: [24, 28, 32],
                    damageEnergy: [24, 28, 32],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Flamer",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Splitter",
                                    damageMultPercent: 10
                                },
                                {
                                    name: "Sniper",
                                    damageMultPercent: 50
                                }
                                ,
                                {
                                    name: "Automatic",
                                    damageMultPercent: -15
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Gamma Gun",
                    category: "Pistol",
                    kind: "energy",
                    explosive: false,
                    silencer: false,
                    speed: 6.7,
                    level: [15, 25, 35, 45],
                    damage: [81, 91, 105, 121],
                    damageRadiation: [50, 50, 50, 50],
                    mods: [
                        {
                            slot: "Dish",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Deep Dish",
                                    addDamageRadiationLeveled: [75, 75, 75, 75]
                                }
                            ]
                        },
                        {
                            slot: "Muzzle",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Electric signal carrier",
                                    addDamageEnergyLeveled: [40, 40, 40, 40]
                                },
                                {
                                    name: "Signal Repeater",
                                    speedAddPercent: speedMult(9.1, 6.7)
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Tesla Rifle",
                    category: "Rifle",
                    kind: "energy",
                    explosive: false,
                    silencer: false,
                    speed: 2,
                    level: [40, 50],
                    damage: [0, 0],
                    damageEnergy: [66, 78],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Automatic",
                                    damageMultPercent: -15,
                                    speedAddPercent: speedMult(9.1, 2)
                                },
                                {
                                    name: "Charging",
                                    damageMultPercent: 30
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "Cryolator",
                    category: "Heavy",
                    kind: "energy",
                    explosive: false,
                    silencer: false,
                    speed: 9.1,
                    level: [25, 35, 45],
                    damage: [0, 0, 0],
                    damageEnergy: [24, 30, 36],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Chrystallizing",
                                    damageMultPercent: -25,
                                    speedAddPercent: -25,
                                    addDamageBallisticLeveled: [25 / 0.75, 25 / 0.75, 25 / 0.75]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Fat Man",
                    category: "Heavy",
                    explosive: true,
                    speed: 0.2,
                    level: [25, 35, 45],
                    damage: [355, 405, 455],
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "MIRV",
                                    addDamageBallisticLeveled: [145, 145, 145]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Missile Launcher",
                    category: "Heavy",
                    explosive: true,
                    speed: 0.2,
                    level: [20, 30, 40, 50],
                    damage: [105, 125, 145, 155],
                    mods: [
                    ]
                },
                {
                    name: "M79 Grenade Launcher",
                    category: "Heavy",
                    explosive: true,
                    speed: 0.2,
                    level: [15, 25, 35, 45],
                    damage: [90, 100, 110, 120],
                    mods: [
                    ]
                },
                {
                    name: "Auto Grenade Launcher",
                    category: "Heavy",
                    explosive: true,
                    speed: 10,
                    level: [50],
                    damage: [75],
                    mods: [
                    {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Heavy",
                                    damageMultPercent: 10,
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Alien Blaster",
                    category: "Pistol",
                    kind: "energy",
                    explosive: true,
                    speed: 10,
                    level: [20,30,40,50],
                    damage: [0, 0, 0, 0],
                    damageEnergy: [15,29,22,25],
                    mods: []
                },
                {
                    name: "The V.A.T.S. Unknown",
                    category: "Pistol",
                    kind: "energy",
                    explosive: true,
                    special: true,
                    info: "WeaponVATSUnknown",
                    speed: 10,
                    level: [20,30,40,50],
                    damage: [0, 0, 0, 0],
                    damageEnergy: [15,29,22,25],
                    mods: []
                },
                {
                    name: "Tomahawk",
                    category: "Thrown",
                    kind: "ballistic",
                    speed: speedSlow,
                    level: [1],
                    damage: [100],
                    mods: []
                },
                {
                    name: "Throwing Knife",
                    category: "Thrown",
                    kind: "ballistic",
                    speed: speedSlow,
                    level: [1],
                    damage: [75],
                    mods: []
                },
                {
                    name: "Sheepsquatch Shard",
                    category: "Thrown",
                    kind: "ballistic",
                    speed: speedSlow,
                    level: [1],
                    damage: [75],
                    mods: []
                },
                {
                    name: "Meat Cleaver",
                    category: "Thrown",
                    kind: "ballistic",
                    speed: speedSlow,
                    level: [1],
                    damage: [60],
                    mods: []
                },
                {
                    name: "Gauss Shotgun",
                    category: "Shotgun",
                    kind: "energy",
                    explosive: false,
                    speed: 6.7,
                    chargetime: 1,
                    explosiveDamageMult: 15,
                    level: [25,30,35,40,45,50],
                    damage: [80,85,90,95,100,105],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Refined",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        },
                        {
                            slot: "Magazine",
                            options: [
                                {
                                    name: "Standard",
                                },
                                {
                                    name: "Perforating",
                                    ignoreDRPercent: 40
                                }

                            ]
                        }
                    ]
                },
                {
                    name: "Gauss Minigun",
                    category: "Heavy",
                    kind: "energy",
                    explosive: false,
                    speed: 9.1,
                    level: [45,50],
                    damage: [48,50],
                    explosiveDamageMult: 15,
                    mods: [
                        {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Tri",
                                    speedAddPercent: 20
                                },
                                {
                                    name: "Penta",
                                    damageMultPercent: -15,
                                    speedAddPercent: 35
                                }
                            ]
                        },
                        {
                            slot: "Tesla",
                            options: [
                                {
                                    name: "None"
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                },
                                {
                                    name: "Dynamo",
                                    addDamageEnergyLeveled: [3, 3]
                                },
                                {
                                    name: "Capacitor",
                                    addDamageEnergyLeveled: [6, 6]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Gauss Pistol",
                    category: "Pistol",
                    kind: "energy",
                    explosive: false,
                    speed: 6.7,
                    chargetime: 1,
                    explosiveDamageMult: 15,
                    level:  [15,20,25,30,35, 40, 45, 50],
                    damage: [62,70,76,85,92,100,108,115],
                    mods: [
                    {
                            slot: "Barrel",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Suppressed",
                                    silencer: true
                                }
                            ]
                        },
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Refined",
                                    damageMultPercent: 12.5
                                },
                                {
                                    name: "Hardened",
                                    damageMultPercent: 25
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Plasma Caster",
                    category: "Heavy",
                    kind: "plasma",
                    explosive: false,
                    speed: 2,
                    level: [40,45,50],
                    damage: [60,68,76],
                    damageEnergy: [60,68,76],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Pulse",
                                    damageMultPercent: -15
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Compound Bow",
                    category: "Bow",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 0.5,
                    level:  [ 1, 5,10,15,20,25,30,35,40,45,50],
                    damage: [50,55,60,65,70,75,80,85,90,95,100],
                    mods: [
                        standardArrows
                    ]
                },
                {
                    name: "Bow",
                    category: "Bow",
                    kind: "ballistic",
                    explosive: false,
                    silencer: true,
                    speed: 0.5,
                    level:  [ 1, 5,10,15,20,25,30,35,40,45,50],
                    damage: [40,45,50,55,60,65,70,75,80,85,90],
                    mods: [
                        standardArrows
                    ]
                },
                {
                    name: "Single Action Revolver",
                    category: "Pistol",
                    kind: "ballistic",
                    explosive: false,
                    silencer: false,
                    speed: 0.6,
                    level:  [10,20,30,40,50],
                    damage: [42,48,52,58,62],
                    mods: [
                        {
                            slot: "Receiver",
                            options: [
                                {
                                    name: "Standard"
                                },
                                {
                                    name: "Fancy",
                                    speedAddPercent: 30
                                },
                                {
                                    name: "Prime",
                                    damageMultPercent: 25,
                                    versus: ["Scorched", "Scorchbeast", "Scorchbeast Queen"],
                                    versusMultPercent: 35
                                }
                            ]
                        }
                    ]
                },
            ];

// Output as json

const fs = require('fs');
const file = fs.createWriteStream('weapons.json');
file.write(JSON.stringify(allWeapons, null, 2));
file.end();
