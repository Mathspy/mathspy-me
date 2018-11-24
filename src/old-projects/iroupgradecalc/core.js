var ragialPrices = {};

$().ready(function() {
  //ASAP
  if (localStorage.getItem("ragial")) {
    $("#ragial").prop(
      "checked",
      localStorage.getItem("ragial") === "true" ? true : false
    );
  }

  kpCalc();

  $(".beautify").on("input", smartInput);

  $("#kpValue").on("input", kpCalc);
  $(".kpCheckBox").on("change", kpCalc);
  $(".weaponCheckbox").on("change", toWeaponOrNotToWeapon);
  $("#type").on("change", changeType);
  $("#ragial").on("change", function() {
    localStorage.setItem("ragial", $(this).prop("checked"));
    if ($(this).prop("checked")) {
      changeType();
    }
  });
  $("#calculate").on("click", refinery.main);

  changeServer(localStorage.getItem("server") || "chaos");

  $(".server").on("click", function(e) {
    changeServer(e.target.attributes.data.value);
  });

  if (new URL(window.location.href).searchParams.get("thanksMike")) {
    $(".thanksMike").removeClass("hidden");
  }

  $(".byeNotfication").on("click", function(e) {
    $(".thanksMike").addClass("hidden");
  });
});

function changeServer(server) {
  server = server.toLowerCase();

  $(".notodin, .notnova").css({ display: "" });
  if (server === "odin" || server === "nova") {
    isOdinOrNova(server);
  }

  localStorage.setItem("server", server);

  $.ajax({
    url: "https://ragial-unofficial-api.herokuapp.com/" + server,
    method: "GET",
  }).then(function(data) {
    ragialPrices[server] = data;
    localStorage.setItem("prices", JSON.stringify(ragialPrices));
    changeType();
  });
}

function toWeaponOrNotToWeapon(event) {
  if (this.checked) {
    $("#type").prop("disabled", true);
  } else if (!$("#hasMS").prop("checked") && !$("#wp3").prop("checked")) {
    $("#type").prop("disabled", false);
  }
}

function isOdinOrNova(server) {
  $(".not" + server).css({ display: "none" });
}

function changeType() {
  var server = localStorage.getItem("server");

  var type = $("#type").val();
  if (type === "weapon") {
    $("#hasMS").prop("disabled", false);
    $("#wp3").prop("disabled", false);
    if ($("#ragial").prop("checked")) {
      $("#nOre").val(ragialPrices[server].oridecon);
      $("#sevenCert").val(ragialPrices[server].safe7Weapon);
    }
  } else {
    $("#hasMS").prop("disabled", true);
    $("#wp3").prop("disabled", true);
    if ($("#ragial").prop("checked")) {
      $("#nOre").val(ragialPrices[server].elunium);
      if (type === "headgear") {
        $("#sevenCert").val(ragialPrices[server].safe7Headgear);
      } else {
        $("#sevenCert").val(ragialPrices[server].safe7Body);
      }
    }
  }

  if ($("#ragial").prop("checked")) {
    $("#tenCert").val(ragialPrices[server].safe10);
    $("#blackBless").val(ragialPrices[server].bsb);
  }

  $(".beautify").each(function(index, element) {
    $(element).val(
      formatForEyes(
        parseInt(
          $(element)
            .val()
            .replace(/\D/g, ""),
          10
        )
      )
    );
  });
}

//Guide: Normal4, Enriched4, Special4, Normal3, Enriched3, Special3
var rates = [
  [100, 100, 100, 100, 60, 40, 40, 20, 20, 9],
  [100, 100, 100, 100, 90, 70, 70, 40, 40, 20],
  [100, 100, 100, 100, 95, 80, 80, 60, 50, 35],
  [100, 100, 100, 100, 100, 60, 50, 20, 20, 19],
  [100, 100, 100, 100, 100, 90, 80, 40, 40, 30],
  [100, 100, 100, 100, 100, 95, 90, 70, 60, 45],
];

var rates10 = [
  [8, 8, 8, 8, 7, 7, 7, 7, 5, 5],
  [20, 20, 16, 16, 15, 15, 14, 14, 10, 10],
  [18, 18, 18, 18, 18, 17, 17, 17, 15, 15],
  [35, 35, 30, 30, 25, 25, 20, 20, 15, 15],
];
var oresRequired = [
  [
    12.5,
    168.75,
    1978.125,
    22798.4375,
    299425.4464285714,
    3974627.1364795915,
    52802321.018585995,
    701513125.4522853,
    13027018429.692572,
    247211619230.25803,
  ],
  [
    5,
    30,
    167.5,
    895.625,
    5028.333333333333,
    28453.680555555555,
    172359.3849206349,
    1056358.7117346937,
    9012362.653061222,
    80616408.12499999,
  ],
  [
    5.555555555555555,
    36.41975308641975,
    182.57887517146776,
    853.9704313366864,
    3918.087520533793,
    18884.070956025545,
    91959.16655283821,
    448743.4568196294,
    2470527.768331446,
    13927312.200231742,
  ],
  [
    2.857142857142857,
    11.020408163265307,
    33.401360544217695,
    88.95691609977327,
    259.62358276644,
    775.6235827664402,
    2844.6235827664414,
    11125.623582766446,
    58057.95691609981,
    324014.51247165556,
  ],
];

function findOre() {
  for (var i = 0; i < rates10.length; i++) {
    oresRequired[i] = [];
    oresRequired[i].push(1 / (rates10[i][0] / 100));
    oresRequired[i].push(
      (1 / (rates10[i][1] / 100)) * (oresRequired[i][0] + 1)
    );
    for (var j = 2; j < rates10[i].length; j++) {
      oresRequired[i].push(
        (1 / (rates10[i][j] / 100)) * (oresRequired[i][j - 1] + 1) -
          (1 / (rates10[i][j] / 100) - 1) * oresRequired[i][j - 2]
      );
    }
  }
}

var refinery = {
  main: function() {
    //Extracts values
    refinery.nOre = parseInt(
      $("#nOre")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.eOre = parseInt(
      $("#eOre")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.hdOre = parseInt(
      $("#hdOre")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.hdBradCarn = parseInt(
      $("#hdBradCarn")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.cert7 = parseInt(
      $("#sevenCert")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.cert10 = parseInt(
      $("#tenCert")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.bsb = parseInt(
      $("#blackBless")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.itemPrice = parseInt(
      $("#itemPrice")
        .val()
        .replace(/\D/g, ""),
      10
    );

    refinery.refine = parseInt(
      $("#refine")
        .val()
        .replace(/\D/g, ""),
      10
    );
    refinery.type = $("#type").val();
    refinery.isWp3 = $("#wp3").prop("checked");
    refinery.hasMS = $("#hasMS").prop("checked");
    refinery.isSpecial = $("#isSpecial").prop("checked");
    refinery.isEnriched = $("#isEnriched").prop("checked");
    refinery.isMrs = $("#isMrs").prop("checked");
    refinery.isGenerous = $("#isGenerous").prop("checked");

    //Determines the upgrade cost
    if (refinery.type === "weapon" && refinery.isWp3) {
      refinery.zenyCost = 5000;
    } else if (refinery.type === "weapon") {
      refinery.zenyCost = 20000;
    } else {
      refinery.zenyCost = 2000;
    }

    //Checks validity of level and then upgrade weapon safely to 4 if it's less than 4
    if (refinery.refine <= 4 && refinery.refine >= 0) {
      refinery.currentPrice =
        refinery.itemPrice +
        ((refinery.isWp3 ? 5 : 4) - refinery.refine) *
          (refinery.nOre + refinery.zenyCost);
      refinery.refine = 4;
    } else if (refinery.refine >= 20) {
      return alert(
        "This upgrade level is almost equivalent to God items, please give it to me <3"
      );
    } else if (refinery.refine < 0) {
      return alert("Can't use negative values for refine level!");
    } else {
      refinery.currentPrice = refinery.itemPrice;
    }

    //Determines which upgrades we are gonna compare and show them and then hide whichever ones not gonna be used
    var level = refinery.refine;
    var items = 1;

    var allUpgrades =
      localStorage.getItem("server") !== "odin" &&
      localStorage.getItem("server") !== "nova"
        ? [
            ["nOre", "eOre", "cert7"],
            ["nOre", "eOre", "cert7"],
            ["nOre", "eOre", "cert7"],
            ["nOre", "eOre", "bsb"],
            ["nOre", "eOre", "bsb"],
            ["nOre", "eOre", "cert10", "bsb"],
          ]
        : [
            ["nOre", "eOre"],
            ["nOre", "eOre"],
            ["nOre", "eOre"],
            ["nOre", "eOre"],
            ["nOre", "eOre"],
            ["nOre", "eOre"],
          ];
    if (
      localStorage.getItem("server") !== "odin" &&
      localStorage.getItem("server") !== "nova"
    ) {
      for (var o = 3; o <= 5; o++) {
        if (refinery.isEnriched) {
          allUpgrades[o].push("enrHam");
          $("#hdHam" + (o + 5) + "a").addClass("hidden");
        } else {
          $("#enrHam" + (o + 5) + "a").addClass("hidden");
          allUpgrades[o].push("hdHam");
        }
      }
    }
    for (var i = 0; i <= 5; i++) {
      if (refinery.isSpecial) {
        allUpgrades[i].push("speEnr");
      } else {
        $("#speEnr" + (i + 5) + "a").addClass("hidden");
      }
    }
    for (var j = 0; j <= 5; j++) {
      if (refinery.hasMS) {
        allUpgrades[j].push("master");
      } else {
        $("#master" + (j + 5) + "a").addClass("hidden");
      }
    }
    for (var hi = 0; hi <= 10; hi++) {
      if (refinery.isSpecial) {
        $("#hdBradCarn" + (hi + 10) + "a").addClass("hidden");
        $("#speBradCarn" + (hi + 10) + "a").removeClass("hidden");
      } else {
        $("#speBradCarn" + (hi + 10) + "a").addClass("hidden");
        $("#hdBradCarn" + (hi + 10) + "a").removeClass("hidden");
      }
    }

    if (refinery.isWp3) {
      //+5 is safe for lv3 weapons!
      $("#notSoSafe")
        .html("To +5 (Safe lv3 weapon)")
        .css("background-color", "#009E60");
      $("#fifthTable").addClass("hidden");
    } else {
      $("#notSoSafe")
        .html("To +5")
        .css("background-color", "#315b95");
      $("#fifthTable").removeClass("hidden");
    }
    for (var lv = 0; lv < allUpgrades.length; lv++) {
      for (var sv = 0; sv < allUpgrades[lv].length; sv++) {
        $("#" + allUpgrades[lv][sv] + (lv + 5) + "a")
          .removeClass("hidden")
          .css("background-color", "#CCCCCC");
      }
    }

    for (var bs = 5; bs <= 20; bs++) {
      $("#up" + bs).addClass("hidden");
    }

    //Starts calculating for each and every upgrade we are gonna make and then compares them and picks the lowest
    for (; level < 10; level++) {
      var comparison = [];
      var comparison2 = [];
      $("#up" + (level + 1)).removeClass("hidden");

      for (var z = 0; z <= allUpgrades[level - 4].length - 1; z++) {
        var endResult = refinery.upgrade(
          level,
          allUpgrades[level - 4][z],
          refinery.currentPrice,
          items
        );
        comparison[z] = endResult[0];
        comparison2[z] = endResult[1];
        $("#" + allUpgrades[level - 4][z] + (level + 1)).val(
          Math.floor(endResult[0]).toLocaleString()
        );
        $("#" + allUpgrades[level - 4][z] + "I" + (level + 1)).val(
          endResult[1]
        );
      }
      var minIndex = indexOfMin(comparison);
      refinery.currentPrice = comparison[minIndex];
      items = comparison2[minIndex];
      $("#" + allUpgrades[level - 4][minIndex] + (level + 1) + "a").css(
        "background-color",
        "#009E60"
      );
      console.log("#" + allUpgrades[level - 4][minIndex] + (level + 1) + "a");
    }
    if (localStorage.getItem("server") !== "odin") {
      for (; level < 20; level++) {
        $("#up" + (level + 1)).removeClass("hidden");
        var table = 0;
        if (refinery.isWp3) {
          table += 2;
        }
        if (refinery.isSpecial) {
          table += 1;
        }
        refinery.currentPrice +=
          ((refinery.isGenerous ? 0 : 100000) + refinery.hdBradCarn) *
          oresRequired[table][level - 10];

        $(
          "#" +
            (refinery.isSpecial ? "speBradCarn" : "hdBradCarn") +
            (level + 1)
        ).val(Math.floor(refinery.currentPrice).toLocaleString());
        //$("#" + (refinery.isSpecial ? "speBradCarn" : "hdBradCarn") + "I" + (level + 1)).val(items);
      }
    }
  },

  upgrade: function(level, upgradeType, currentPrice, currentItems) {
    var safety;
    var orePrice;
    var rate;
    var specialUpgrade;
    switch (upgradeType) {
      case "nOre":
        safety = false;
        orePrice = refinery.nOre;
        rate = rates[0 + (refinery.isWp3 ? 3 : 0)][level];
        break;
      case "eOre":
        safety = false;
        orePrice = refinery.eOre;
        rate = rates[1 + (refinery.isWp3 ? 3 : 0)][level];
        break;
      case "cert7":
        safety = true;
        orePrice = refinery.cert7 + refinery.nOre;
        rate = rates[0 + (refinery.isWp3 ? 3 : 0)][level];
        break;
      case "cert10":
        safety = true;
        orePrice = refinery.cert10 + refinery.nOre;
        rate = rates[0 + (refinery.isWp3 ? 3 : 0)][level];
        break;
      case "bsb":
        safety = true;
        orePrice = refinery.bsb * 2 ** (level - 7) + refinery.hdOre;
        rate = rates[0 + (refinery.isWp3 ? 3 : 0)][level];
        break;
      case "speEnr":
        safety = false;
        orePrice = refinery.eOre;
        rate = rates[2 + (refinery.isWp3 ? 3 : 0)][level];
        break;
      case "master":
        safety = false;
        orePrice = refinery.nOre - refinery.zenyCost;
        rate = rates[0 + (refinery.isWp3 ? 3 : 0)][level] + 10;
        break;

      default:
        specialUpgrade = upgradeType;
    }

    if (rate > 100) {
      rate = 100;
    }

    if (!specialUpgrade) {
      if (safety) {
        currentPrice += ((orePrice + refinery.zenyCost) * 1) / (rate / 100);
      } else {
        currentPrice =
          ((currentPrice + orePrice + refinery.zenyCost) * 1) / (rate / 100);
        currentItems = (currentItems * 1) / (rate / 100);
      }
    } else {
      if (specialUpgrade == "enrHam") {
        if (level == 7) {
          currentPrice +=
            (refinery.eOre + (refinery.isMrs ? 0 : refinery.zenyCost)) *
            (refinery.isWp3 ? 4.831 : 5.897);
        } else if (level == 8) {
          currentPrice +=
            (refinery.eOre + (refinery.isMrs ? 0 : refinery.zenyCost)) *
            (refinery.isWp3 ? 9.75 : 11.344);
        } else if (level == 9) {
          currentPrice +=
            (refinery.isWp3
              ? 1 / (rates[3][9] / 100)
              : 1 / (rates[0][9] / 100)) *
              ((refinery.isGenerous ? 0 : 20000) + refinery.hdOre) +
            ((refinery.isWp3
              ? 1 / (rates[3][9] / 100)
              : 1 / (rates[0][9] / 100)) -
              1) *
              ((refinery.eOre + (refinery.isMrs ? 0 : refinery.zenyCost)) *
                (refinery.isWp3 ? 9.75 : 11.344));
        }
      } else if (specialUpgrade == "hdHam") {
        if (level == 7) {
          currentPrice +=
            (refinery.hdOre + (refinery.isGenerous ? 0 : 20000)) *
            (refinery.isWp3 ? 22.32 : 51);
        } else if (level == 8) {
          currentPrice +=
            (refinery.hdOre + (refinery.isGenerous ? 0 : 20000)) *
            (refinery.isWp3 ? 94.3 : 209);
        } else if (level == 9) {
          currentPrice +=
            (refinery.isWp3
              ? 1 / (rates[3][9] / 100)
              : 1 / (rates[0][9] / 100)) *
              ((refinery.isGenerous ? 0 : 20000) + refinery.hdOre) +
            ((refinery.isWp3
              ? 1 / (rates[3][9] / 100)
              : 1 / (rates[0][9] / 100)) -
              1) *
              ((refinery.hdOre + (refinery.isGenerous ? 0 : 20000)) *
                (refinery.isWp3 ? 94.3 : 209));
        }
      }
    }

    return [currentPrice, currentItems];
  },
};

function indexOfMin(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var min = arr[0];
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      minIndex = i;
      min = arr[i];
    }
  }

  return minIndex;
}

function kpCalc() {
  var kpValue = $("#kpValue").val();
  $("#eOre").val(Math.floor(0.19 * kpValue * 1000000));
  if ($("#specialHDOreBox").prop("checked")) {
    $("#hdOre").val(Math.floor(0.08 * kpValue * 1000000));
  } else {
    $("#hdOre").val(Math.floor(0.1 * kpValue * 1000000));
  }
  if ($("#specialHDBradBox").prop("checked")) {
    $("#hdBradCarn").val(Math.floor(0.12 * kpValue * 1000000));
  } else {
    $("#hdBradCarn").val(Math.floor(0.15 * kpValue * 1000000));
  }

  $(".beautify").each(function(index, element) {
    $(element).val(
      formatForEyes(
        parseInt(
          $(element)
            .val()
            .replace(/\D/g, ""),
          10
        )
      )
    );
  });
}

function formatForEyes(value) {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "z";
}

function smartInput(event) {
  var newValue = formatForEyes(
    parseInt(
      $(this)
        .val()
        .replace(/\D/g, ""),
      10
    )
  );
  $(this).val(newValue);
  setCaretPosition(this.id, $(this).val().length - 1);
}

//Kudos https://stackoverflow.com/questions/512528/set-keyboard-caret-position-in-html-textbox
function setCaretPosition(elemId, caretPos) {
  var elem = document.getElementById(elemId);

  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move("character", caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
}
