import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import UseFetch from "../../../hook/useFetch";

import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const router = useRouter();

  const { error, isLoading, data } = UseFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          "Something went wrong !"
        ) : (
          data?.map((job) => {
            return (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() => {
                  router.push(`/job-details/${job.job_id}`);
                }}
              />
            );
          })
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
