import Header from "@/components/layout/Header/Header";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import QRCodeStyled from "react-native-qrcode-styled";

// ダミーデータ
const DUMMY_USER_DATA = {
  id: "kohta9521",
  name: "Kohta9521",
  username: "@kohta_9521",
};

const QR_DATA = JSON.stringify(DUMMY_USER_DATA);

export default function QRCodeScreen() {
  const [isScanning, setIsScanning] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const handleScanPress = async () => {
    if (!permission) {
      const result = await requestPermission();
      if (result.granted) {
        setIsScanning(true);
      }
    } else if (permission.granted) {
      setIsScanning(true);
    } else {
      // 権限が拒否された場合
      const result = await requestPermission();
      if (result.granted) {
        setIsScanning(true);
      }
    }
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setIsScanning(false);
    // ここでQRコードのデータを処理
    console.log("Scanned QR Code:", data);
    // 必要に応じてナビゲーションや処理を追加
  };

  const handleCancelScan = () => {
    setIsScanning(false);
  };

  if (isScanning) {
    return (
      <>
        <Header
          id="qr-scan"
          left={
            <Pressable onPress={handleCancelScan} className="p-2">
              <IconSymbol name="chevron.left" size={24} color="#F5F5F5" />
            </Pressable>
          }
        />
        <View className="flex-1 bg-black pt-20">
          <CameraView
            className="flex-1"
            facing="back"
            onBarcodeScanned={handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
          >
            <View className="flex-1 bg-black/70 items-center justify-center">
              <View className="w-[250px] h-[250px] relative">
                <View style={[styles.corner, styles.topLeft]} />
                <View style={[styles.corner, styles.topRight]} />
                <View style={[styles.corner, styles.bottomLeft]} />
                <View style={[styles.corner, styles.bottomRight]} />
              </View>
              <Text className="mt-10 text-base text-[#F5F5F5] text-center px-5">
                QRコードを枠内に合わせてください
              </Text>
            </View>
          </CameraView>
        </View>
      </>
    );
  }

  return (
    <>
      <Header
        id="qr"
        left={
          <Pressable onPress={() => router.back()} className="p-2">
            <IconSymbol name="chevron.left" size={24} color="#F5F5F5" />
          </Pressable>
        }
      />
      <View className="flex-1 bg-black pt-20">
        <View className="flex-1 items-center justify-center px-5">
          {/* IDカード風のQRコードカード */}
          <View className="w-full max-w-[380px]">
            {/* カード本体 */}
            <View
              style={styles.card}
              className="rounded-[20px] bg-[#1A1A1A] overflow-hidden relative border border-white/10"
            >
              {/* 上部：ユーザー情報 */}
              <View className="flex-row justify-between items-start p-6 pb-5 border-b border-white/10">
                <View className="flex-1">
                  <Text
                    className="text-[22px] font-bold text-white mb-1"
                    style={{ letterSpacing: 0.5 }}
                  >
                    {DUMMY_USER_DATA.name}
                  </Text>
                  <Text className="text-sm text-accent font-medium">
                    Premium Plan
                  </Text>
                </View>
                <View className="items-end">
                  <Text
                    className="text-[10px] text-[#666666] mb-1 font-semibold"
                    style={{ letterSpacing: 1 }}
                  >
                    ID
                  </Text>
                  <Text
                    className="text-xs text-white font-semibold"
                    style={{ letterSpacing: 0.5 }}
                  >
                    {DUMMY_USER_DATA.id}
                  </Text>
                </View>
              </View>

              {/* 中央：QRコード（主役） */}
              <View
                style={styles.qrContainer}
                className="items-center justify-center py-10 px-[30px] bg-white mx-5 my-5 rounded-2xl"
              >
                <QRCodeStyled
                  data={QR_DATA}
                  padding={40}
                  color="#000000"
                  outerEyesOptions={{
                    borderRadius: 25,
                    color: "#000000",
                  }}
                  innerEyesOptions={{
                    borderRadius: 12,
                    color: "#000000",
                  }}
                  style={{ width: 520, height: 520 }}
                />
              </View>

              {/* 下部：ユーザー名とボタン */}
              <View className="p-6 pt-5 border-t border-white/10 items-center">
                <Text className="text-sm text-[#999999] mb-5 font-medium">
                  {DUMMY_USER_DATA.username}
                </Text>
                <Pressable
                  onPress={handleScanPress}
                  style={styles.scanButton}
                  className="w-full rounded-[10px] bg-black flex-row items-center justify-center py-3.5 px-8 gap-2"
                >
                  <IconSymbol name="qrcode" size={18} color="#FFFFFF" />
                  <Text
                    className="text-[15px] font-semibold text-white"
                    style={{ letterSpacing: 0.5 }}
                  >
                    読み取る
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // 複雑なシャドウ効果はStyleSheetで管理
  card: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 25,
  },
  qrContainer: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  scanButton: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  // スキャン画面のコーナー装飾（複雑なborder設定）
  corner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderColor: "#FF10F0",
    borderWidth: 4,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopLeftRadius: 12,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopRightRadius: 12,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomLeftRadius: 12,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomRightRadius: 12,
  },
});
